
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { XMarkIcon, PaperAirplaneIcon, SparklesIcon, UserIcon, CpuChipIcon } from '@heroicons/react/24/solid';
import { ChatMessage } from '../types';
import { sendMessageToAI } from '../services/geminiService';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: 'initial',
          role: 'system',
          content: 'こんにちは！税金に関する一般的な質問があれば、何でも聞いてくださいね。',
        },
      ]);
    } else {
        setMessages([]);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  const handleSendMessage = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', content: input };
    const currentInput = input;
    const previousMessages = messages;

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const modelMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: modelMessageId, role: 'model', content: '', isLoading: true }]);

    try {
        const stream = sendMessageToAI(previousMessages, currentInput);
        let currentContent = '';
        for await (const chunk of stream) {
            currentContent += chunk;
            setMessages(prev => prev.map(msg => 
                msg.id === modelMessageId ? { ...msg, content: currentContent } : msg
            ));
        }
         setMessages(prev => prev.map(msg => 
            msg.id === modelMessageId ? { ...msg, isLoading: false } : msg
        ));
    } catch (error) {
        console.error('AI Chat stream error:', error);
         setMessages(prev => prev.map(msg => 
            msg.id === modelMessageId ? { ...msg, content: "申し訳ありません、エラーが発生しました。もう一度お試しください。", isLoading: false } : msg
        ));
    } finally {
        setIsLoading(false);
    }
  }, [messages, input, isLoading]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg h-[90vh] max-h-[700px] flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <SparklesIcon className="h-6 w-6 text-sky-700" />
            <h2 className="text-lg font-bold text-slate-800">税務相談AIアシスタント</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-slate-500 hover:bg-slate-200">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role !== 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <CpuChipIcon className="w-5 h-5 text-slate-600" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-sky-700 text-white rounded-br-lg' : 'bg-slate-100 text-slate-800 rounded-bl-lg'}`}>
                {msg.isLoading ? (
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                    </div>
                ) : (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>
              {msg.role === 'user' && (
                 <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                  <UserIcon className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <footer className="p-4 border-t border-slate-200 bg-white">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="質問を入力してください..."
              disabled={isLoading}
              className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-sky-700 text-white rounded-full disabled:bg-slate-400 hover:bg-sky-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default AIChat;
