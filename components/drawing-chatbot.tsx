'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: Date;
}

interface DrawingChatbotProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export default function DrawingChatbot({ canvasRef }: DrawingChatbotProps) {
    const { t, language } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Add initial welcome message
    useEffect(() => {
        const welcomeMessage: Message = {
            id: 'welcome',
            type: 'ai',
            content: language === 'zh'
                ? "你好！我是你的画画助手。开始画画然后点击 \"猜猜我画的什么\" 让我来分析你的作品！"
                : "Hi! I'm your drawing assistant. Start drawing and click \"Guess My Drawing\" to let me analyze your artwork!",
            timestamp: new Date()
        };
        setMessages([welcomeMessage]);
    }, [language]);

    const analyzeDrawing = async () => {
        if (!canvasRef.current) return;

        setIsAnalyzing(true);

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: language === 'zh' ? '猜猜我画的什么？' : 'Guess my drawing!',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);

        try {
            // Get canvas image data
            const canvas = canvasRef.current;
            const imageData = canvas.toDataURL('image/png');

            // Check if canvas is mostly empty
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const imageDataObj = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pixels = imageDataObj.data;
                let hasDrawing = false;

                // Check if there are any non-transparent pixels
                for (let i = 3; i < pixels.length; i += 4) {
                    if (pixels[i] > 0) {
                        hasDrawing = true;
                        break;
                    }
                }

                if (!hasDrawing) {
                    const emptyMessage: Message = {
                        id: Date.now().toString() + '_empty',
                        type: 'ai',
                        content: language === 'zh'
                            ? "我看到画布是空的！请先画点什么，然后我就能猜测你画的是什么了。"
                            : "I see the canvas is empty! Please draw something first, then I can guess what it is.",
                        timestamp: new Date()
                    };
                    setMessages(prev => [...prev, emptyMessage]);
                    setIsAnalyzing(false);
                    return;
                }
            }

            // Send to AI for analysis
            const response = await fetch('/api/ai/drawing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    imageData,
                    language
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to analyze drawing');
            }

            const data = await response.json();

            const aiMessage: Message = {
                id: Date.now().toString() + '_ai',
                type: 'ai',
                content: data.response,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);

        } catch (error) {
            const errorMessage: Message = {
                id: Date.now().toString() + '_error',
                type: 'ai',
                content: language === 'zh'
                    ? "抱歉，我分析你的画时遇到了问题。请再试一次！"
                    : "Sorry, I had trouble analyzing your drawing. Please try again!",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const clearChat = () => {
        const welcomeMessage: Message = {
            id: 'welcome_' + Date.now(),
            type: 'ai',
            content: language === 'zh'
                ? "聊天记录已清除！继续画画，让我猜猜你的新作品"
                : "Chat cleared! Keep drawing and let me guess your new artwork",
            timestamp: new Date()
        };
        setMessages([welcomeMessage]);
    };

    return (
        <div className="w-full mt-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <h3 className="text-white text-lg font-minecraft">
                    {language === 'zh' ? 'AI 画画助手' : 'AI Drawing Assistant'}
                </h3>
            </div>

            {/* Chat Window */}
            <div className="bg-transparent border border-stone-500 rounded-lg w-full h-64 flex flex-col">
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] p-3 rounded-lg text-sm ${message.type === 'user'
                                    ? 'bg-[#3a3a3a] text-white'
                                    : 'bg-[#333333] text-stone-100'
                                    }`}
                            >
                                {message.content}
                            </div>
                        </div>
                    ))}
                    {isAnalyzing && (
                        <div className="flex justify-start">
                            <div className="bg-[#333333] text-stone-100 p-3 rounded-lg text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="animate-spin w-3 h-3 border border-stone-400 border-t-transparent rounded-full"></div>
                                    {language === 'zh' ? '正在分析...' : 'Analyzing...'}
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Actions */}
                <div className="p-4 border-t border-stone-500 flex gap-2">
                    <button
                        onClick={analyzeDrawing}
                        disabled={isAnalyzing}
                        className="flex-1 bg-[#3a3a3a] hover:bg-[#444444] hover:scale-105 disabled:bg-[#2a2a2a] disabled:hover:scale-100 text-white py-3 px-4 rounded text-sm font-minecraft transition-all duration-200"
                    >
                        {isAnalyzing
                            ? (language === 'zh' ? '分析中...' : 'Analyzing...')
                            : (language === 'zh' ? '猜猜我画的什么' : 'Guess My Drawing')
                        }
                    </button>
                    <button
                        onClick={clearChat}
                        className="bg-[#333333] hover:bg-[#3a3a3a] hover:scale-105 text-white py-3 px-4 rounded text-sm font-minecraft transition-all duration-200"
                    >
                        {language === 'zh' ? '清除聊天' : 'Clear Chat'}
                    </button>
                </div>
            </div>
        </div>
    );
} 