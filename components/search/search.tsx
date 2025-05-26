'use client';

import { useState, useRef, useEffect } from 'react';
import SamplePrompts from './sample-prompts';
import ChatMessage from './chat-message';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function filterPersonalWebsite(text: string) {
  // Remove phrases like 'personal website' and links to your own domain
  return text
    .replace(/(my\s+)?personal website(\.|,|!|\s|$)/gi, '')
    .replace(/https?:\/\/(www\.)?nicholaschen\.ca\S*/gi, '') // replace with your actual domain if different
    .replace(/\s{2,}/g, ' ') // clean up extra spaces
    .trim();
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dotCount, setDotCount] = useState(1);
  const [pendingAI, setPendingAI] = useState<string | null>(null);
  const [typedAI, setTypedAI] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [isLoading]);

  // Typing animation for AI response
  useEffect(() => {
    if (pendingAI === null) return;
    setTypedAI('');
    let idx = 0;
    function typeChar() {
      if (pendingAI === null) return;
      if (idx < pendingAI.length) {
        setTypedAI(pendingAI.slice(0, idx + 1));
        idx++;
        typingTimeout.current = setTimeout(typeChar, 18); // typing speed
      } else {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: pendingAI }
        ]);
        setPendingAI(null);
        setTypedAI('');
      }
    }
    typeChar();
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [pendingAI]);

  // Track if user is near the bottom
  useEffect(() => {
    const chatDiv = chatContainerRef.current;
    if (!chatDiv) return;
    function handleScroll() {
      if (!chatDiv) return;
      const threshold = 80; // px from bottom
      const atBottom = chatDiv.scrollHeight - chatDiv.scrollTop - chatDiv.clientHeight < threshold;
      setShouldAutoScroll(atBottom);
    }
    chatDiv.addEventListener('scroll', handleScroll);
    return () => chatDiv.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to bottom only when a new AI message is added and user is near bottom
  useEffect(() => {
    if (!shouldAutoScroll) return;
    if (messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];
    if (lastMsg.role === 'assistant') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, shouldAutoScroll]);

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
        // Filter out personal website mentions and type out the response
        setPendingAI(filterPersonalWebsite(aiData.response));
      }
    } catch (error) {
      console.error('Search error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
      setDotCount(1);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setQuery(prompt);
    const input = formRef.current?.querySelector('input');
    if (input) {
      input.focus();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-lg text-stone-300 mb-4 mt-8">What else do you want to know about me?</h2>
      <SamplePrompts onPromptClick={handlePromptClick} />

      <div className="flex flex-col h-[600px] border border-white/30 rounded-lg bg-[#1a1a1a] overflow-hidden relative">
        {/* Overlay for AI typing, allows scroll/select but blocks input */}
        {(pendingAI || typedAI) && (
          <div
            className="absolute inset-0 z-10 bg-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}
        <div className="flex-1 overflow-y-auto" ref={chatContainerRef}>
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              content={message.content}
            />
          ))}
          {/* Typing animation for AI */}
          {typedAI && (
            <ChatMessage role="assistant" content={typedAI + (typedAI.length < (pendingAI?.length || 0) ? '|' : '')} />
          )}
          {isLoading && !typedAI && !pendingAI && (
            <div className="flex gap-4 p-4 bg-white/5">
              <div className="flex items-center gap-2 text-stone-400 pl-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-stone-400 border-t-transparent"></div>
                <span className="font-medium animate-pulse">Thinking{'...'.slice(0, dotCount + 1)}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="p-4 border-t border-white/30 relative z-20">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me anything"
              className="w-full pl-4 pr-4 py-3 rounded-lg border border-white/30 bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-0 focus:border-white/60 transition-all"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading || !!pendingAI || !!typedAI}
            />
            <button
              type="submit"
              className="px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors flex items-center gap-2"
              disabled={isLoading || !!pendingAI || !!typedAI}
            >
              {(!!pendingAI || !!typedAI) ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent inline-block"></span>
                  Responding...
                </>
              ) : (
                'Send'
              )}
            </button>
            <button
              type="button"
              className="px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-white rounded-md border border-white/20 transition-colors"
              onClick={() => {
                setMessages([]);
                setPendingAI(null);
                setTypedAI('');
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
