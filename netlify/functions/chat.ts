import { GoogleGenAI } from "@google/genai";
import type { Handler, HandlerEvent } from "@netlify/functions";
import type { Content } from "@google/genai";

// Self-contained type definition to match the frontend type
interface ChatMessage {
    role: 'user' | 'model' | 'system';
    content: string;
}

const SYSTEM_INSTRUCTION = `あなたは、日本の「TKS税理士法人」の優秀なAIアシスタントです。税金に関する一般的な質問に対して、親切かつ、専門用語を避け平易な言葉で回答してください。

### 回答のルール:
- **役割:** あなたは税理士本人ではなく、あくまでアシスタントです。
- **免責事項:** 回答の冒頭で必ず「AIによる一般的な回答です。」と記載してください。
- **専門家への誘導:** 回答の最後で必ず「より正確な情報や個別のケースについては、当事務所の税理士による無料相談をご利用ください。」という一文を付け加えてください。
- **安全性:** 法律に違反するようなアドバイス（脱税の方法など）は絶対にしないでください。その場合は「税法を遵守することが重要です。ご質問の内容についてはお答えできません。」と回答してください。
- **範囲外の質問:** 税金や会計と全く関係のない質問には、「申し訳ありませんが、税務・会計に関するご質問をお願いいたします。」と回答してください。
`;

const handler: Handler = async (event: HandlerEvent) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        return { statusCode: 500, body: "APIキーが設定されていません。" };
    }

    try {
        const { history, message } = JSON.parse(event.body || '{}');

        if (!message || !Array.isArray(history)) {
            return { statusCode: 400, body: "Invalid request body: 'history' array and 'message' string are required." };
        }
        
        const ai = new GoogleGenAI({ apiKey });

        const contents: Content[] = history
            .filter((msg: ChatMessage) => msg.role === 'user' || msg.role === 'model')
            .map((msg: ChatMessage) => ({
                role: msg.role,
                parts: [{ text: msg.content }],
            }));
        
        // Add the new user message to the end of the history
        contents.push({ role: 'user', parts: [{ text: message }]});

        const result = await ai.models.generateContentStream({
            model: 'gemini-2.5-flash',
            contents,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
                topP: 1,
                topK: 32,
            },
        });
        
        const readableStream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                for await (const chunk of result) {
                    controller.enqueue(encoder.encode(chunk.text));
                }
                controller.close();
            }
        });

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
            },
            body: readableStream,
        };

    } catch (error) {
        console.error("Error in chat function:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An internal server error occurred." }),
        };
    }
};

export { handler };
