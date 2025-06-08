'use client';

import { useState, useRef, useEffect } from 'react';
import SamplePrompts from './sample-prompts';
import ChatMessage from './chat-message';
import localFont from 'next/font/local';

const minecraft = localFont({
  src: '../../public/fonts/MinecraftRegular-Bmg3.otf',
  variable: '--font-minecraft',
});

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
  const [rehydrated, setRehydrated] = useState(false);
  const [resuming, setResuming] = useState(false);
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

  // Hydrate all state from localStorage on mount (client only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('chat-messages');
      if (saved) setMessages(JSON.parse(saved));
      const pending = localStorage.getItem('chat-pendingAI');
      if (pending) setPendingAI(pending);
      const typed = localStorage.getItem('chat-typedAI');
      if (typed) setTypedAI(typed);
    } catch { }
    setRehydrated(true);
  }, []);

  // Resume typing if needed after hydration
  useEffect(() => {
    if (!rehydrated) return;
    if (pendingAI && typedAI.length < pendingAI.length) {
      setResuming(true);
      let idx = typedAI.length;
      function typeChar() {
        if (!pendingAI) return;
        if (idx < pendingAI.length) {
          setTypedAI(pendingAI.slice(0, idx + 1));
          idx++;
          setTimeout(typeChar, 20);
        } else {
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: pendingAI }
          ]);
          setPendingAI(null);
          setTypedAI('');
          localStorage.removeItem('chat-pendingAI');
          localStorage.removeItem('chat-typedAI');
          setResuming(false);
        }
      }
      typeChar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rehydrated]);

  // Typing animation for AI response (only if not resuming)
  useEffect(() => {
    if (!rehydrated || resuming) return;
    if (pendingAI === null) return;
    setTypedAI('');
    let idx = 0;
    function typeChar() {
      if (pendingAI === null) return;
      if (idx < pendingAI.length) {
        setTypedAI(pendingAI.slice(0, idx + 1));
        idx++;
        typingTimeout.current = setTimeout(typeChar, 20);
      } else {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: pendingAI }
        ]);
        setPendingAI(null);
        setTypedAI('');
        localStorage.removeItem('chat-pendingAI');
        localStorage.removeItem('chat-typedAI');
      }
    }
    typeChar();
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [pendingAI, rehydrated, resuming]);

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

  // Persist messages to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('chat-messages', JSON.stringify(messages));
    } catch { }
  }, [messages]);

  // Persist pendingAI and typedAI to localStorage
  useEffect(() => {
    try {
      if (pendingAI) {
        localStorage.setItem('chat-pendingAI', pendingAI);
      } else {
        localStorage.removeItem('chat-pendingAI');
      }
    } catch { }
  }, [pendingAI]);

  useEffect(() => {
    try {
      if (typedAI) {
        localStorage.setItem('chat-typedAI', typedAI);
      } else {
        localStorage.removeItem('chat-typedAI');
      }
    } catch { }
  }, [typedAI]);

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
    <div className={`px-0 ${minecraft.variable} font-minecraft`}>
      <h2 className="text-lg text-stone-300 mb-4 mt-8 font-minecraft">What else do you want to know about me?</h2>
      <SamplePrompts onPromptClick={handlePromptClick} />

      {/* Only show chat history area if there are messages, pendingAI, or typedAI */}
      {(messages.length > 0 || pendingAI || typedAI) && (
        <div className="max-w-2xl w-full mt-8 mb-6">
          <div className="flex flex-col max-h-[600px] overflow-y-auto border border-white/30 rounded-lg bg-[#1a1a1a] overflow-hidden relative font-minecraft">
            {/* Overlay for AI typing, allows scroll/select but blocks input */}
            {(pendingAI || typedAI) && (
              <div
                className="absolute inset-0 z-10 bg-transparent pointer-events-none"
                aria-hidden="true"
              />
            )}
            <div
              className="maflex-1 overflow-y-auto ai-chat-scroll"
              ref={chatContainerRef}
              style={{ scrollbarGutter: 'stable' }}
            >
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
            </div>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="p-0 relative z-20">
        <div className="max-w-2xl flex items-stretch gap-1 w-full">
          <input
            type="text"
            placeholder="Ask me anything"
            className="flex-grow min-w-0 pl-4 pr-4 py-2 px-2 rounded-lg border border-white/30 bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-0 focus:border-white/60 transition-all font-minecraft"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading || !!pendingAI || !!typedAI}
          />
          {isLoading || !!pendingAI || !!typedAI ? (
            <div className="h-full px-4 py-4 text-sm bg-white/10 text-white rounded-md flex items-center gap-2 flex-shrink-0 font-minecraft select-none cursor-default min-w-[110px] justify-center">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent inline-block"></span>
              <span>{!!pendingAI || !!typedAI ? 'Responding' : 'Thinking'}</span>
            </div>
          ) : (
            <button
              type="submit"
              className="h-full px-4 py-4 text-sm bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors flex items-center gap-2 flex-shrink-0 hover:scale-110 transition-transform duration-200 font-minecraft"
              disabled={isLoading || !!pendingAI || !!typedAI}
            >
              Send
            </button>
          )}
          <button
            type="button"
            className="h-full px-4 py-4 text-sm bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors flex items-center gap-2 flex-shrink-0 hover:scale-110 transition-transform duration-200 font-minecraft"
            onClick={() => {
              setMessages([]);
              setPendingAI(null);
              setTypedAI('');
              localStorage.removeItem('chat-messages');
              localStorage.removeItem('chat-pendingAI');
              localStorage.removeItem('chat-typedAI');
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
