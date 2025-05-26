'use client';

import { useState, useRef, useEffect } from 'react';
import SamplePrompts from './sample-prompts';
import ChatMessage from './chat-message';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dotCount, setDotCount] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [isLoading]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: trimmed }]);
    setQuery('');
    setIsLoading(true);

    try {
      const aiResult = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: trimmed }),
      });

      if (aiResult.ok) {
        const aiData = await aiResult.json();
        // Add AI response
        setMessages(prev => [...prev, { role: 'assistant', content: aiData.response }]);
      }
    } catch (error) {
      console.error('Search error:', error);
      // Add error message
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
      setDotCount(1);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setQuery(prompt);
    // Focus the input after setting the query
    const input = formRef.current?.querySelector('input');
    if (input) {
      input.focus();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-lg text-stone-300 mb-4 mt-8">What else do you want to know about me?</h2>
      <SamplePrompts onPromptClick={handlePromptClick} />

      <div className="flex flex-col h-[600px] border border-white/30 rounded-lg bg-[#1a1a1a] overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              content={message.content}
            />
          ))}
          {isLoading && (
            <div className="flex gap-4 p-4 bg-white/5">
              <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-sm">
                AI
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-stone-400 border-t-transparent"></div>
                <span className="font-medium animate-pulse">Thinking{'...'.slice(0, dotCount + 1)}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="p-4 border-t border-white/30">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask me anything"
              className="w-full pl-4 pr-4 py-3 rounded-lg border border-white/30 bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-0 focus:border-white/60 transition-all"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
