import { ChatMessage } from '../types';

export async function* sendMessageToAI(history: ChatMessage[], message: string): AsyncGenerator<string, void, unknown> {
    try {
        const response = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // The initial system message is handled by the backend, so we filter it out here.
                history: history.filter(m => m.role !== 'system'),
                message: message,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`API request failed with status ${response.status}: ${errorText}`);
            yield `申し訳ありません、サーバーでエラーが発生しました。管理者にご連絡ください。`;
            return;
        }

        if (!response.body) {
            throw new Error('Response body is null');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            yield decoder.decode(value, { stream: true });
        }

    } catch (error) {
        console.error("Error sending message to AI proxy:", error);
        yield "申し訳ありません、通信エラーが発生しました。もう一度お試しください。";
    }
}
