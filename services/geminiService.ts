
import { GoogleGenAI, Chat } from "@google/genai";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || " " });

const SYSTEM_INSTRUCTION = `あなたは、日本の「TKS税理士法人」の優秀なAIアシスタントです。税金に関する一般的な質問に対して、親切かつ、専門用語を避け平易な言葉で回答してください。

### 回答のルール:
- **役割:** あなたは税理士本人ではなく、あくまでアシスタントです。
- **免責事項:** 回答の冒頭で必ず「AIによる一般的な回答です。」と記載してください。
- **専門家への誘導:** 回答の最後で必ず「より正確な情報や個別のケースについては、当事務所の税理士による無料相談をご利用ください。」という一文を付け加えてください。
- **安全性:** 法律に違反するようなアドバイス（脱税の方法など）は絶対にしないでください。その場合は「税法を遵守することが重要です。ご質問の内容についてはお答えできません。」と回答してください。
- **範囲外の質問:** 税金や会計と全く関係のない質問には、「申し訳ありませんが、税務・会計に関するご質問をお願いいたします。」と回答してください。
`;

export const createAIChatSession = (): Chat => {
    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 1,
            topK: 32,
        },
        // Safety settings can be configured here if needed
    });
};

export const sendMessageToAI = async (chat: Chat, message: string) => {
    if (!process.env.API_KEY) {
        return (async function*() {
            yield { text: "APIキーが設定されていないため、AIアシスタントは現在ご利用いただけません。" };
        })();
    }
    return chat.sendMessageStream({ message });
};
