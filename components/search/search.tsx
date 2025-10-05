'use client';

import { useState, useRef, useEffect } from 'react';
import ChatMessage from './chat-message';
import localFont from 'next/font/local';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t, language } = useLanguage();
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
  const stoppedRef = useRef(false);
  const [loadingSymbol, setLoadingSymbol] = useState('*');
  const [loadingText, setLoadingText] = useState('Orchestrating');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isLoading && !pendingAI && !typedAI) return;
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [isLoading, pendingAI, typedAI]);

  // Fun loading text animation - pick a random text when loading starts
  useEffect(() => {
    if (!isLoading && !pendingAI) return;

    const thinkingTexts = [
      'Pondering', 'Contemplating', 'Ruminating', 'Cogitating', 'Mulling over',
      'Brainstorming', 'Processing', 'Computing', 'Deliberating', 'Reflecting',
      'Calculating', 'Analyzing', 'Synthesizing', 'Percolating', 'Marinating',
      'Digesting', 'Churning', 'Stewing', 'Brewing thoughts', 'Mind-melding',
      'Brain-storming', 'Neural firing', 'Synapses snapping', 'Neurons dancing'
    ];
    const respondingTexts = [
      'Tomfoolering', 'Shenanigans', 'Crafting', 'Conjuring', 'Concocting',
      'Fabricating', 'Orchestrating', 'Brewing', 'Assembling', 'Materializing',
      'Bamboozling', 'Jiggery-pokery', 'Hullabaloo', 'Rigmarole', 'Balderdash',
      'Flibbertigibbet', 'Discombobulating', 'Hornswoggling', 'Poppycock', 'Fiddle-faddle',
      'Kerfuffle-ing', 'Brouhaha-ing', 'Hullaballoo', 'Gobbledygook', 'Lollygagging',
      'Dilly-dallying', 'Wishy-washing', 'Flip-flopping', 'Zig-zagging', 'Topsy-turvy-ing'
    ];

    const texts = !!pendingAI ? respondingTexts : thinkingTexts;
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setLoadingText(randomText);
  }, [isLoading, pendingAI]);

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

  // Scroll to bottom when new messages are added and user is near bottom
  useEffect(() => {
    if (!shouldAutoScroll) return;
    if (messages.length === 0 && !typedAI) return;
    const chatDiv = chatContainerRef.current;
    if (chatDiv) {
      chatDiv.scrollTop = chatDiv.scrollHeight;
    }
  }, [messages, typedAI, shouldAutoScroll]);

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

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [query]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    // Check for clear command
    if (trimmed.toLowerCase() === '/clear') {
      setMessages([]);
      setQuery('');
      localStorage.removeItem('chat-messages');
      return;
    }

    // Check for help command
    if (trimmed === '/help') {
      const helpMessage = `Available commands:
• /clear - clear chat history
• /help - show this help message`;
      setMessages(prev => [
        ...prev,
        { role: 'user', content: '/help' },
        { role: 'assistant', content: helpMessage }
      ]);
      setQuery('');
      return;
    }

    stoppedRef.current = false;
    // Interrupt current AI response if any
    if (pendingAI || typedAI) {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      setPendingAI(null);
      setTypedAI('');
      localStorage.removeItem('chat-pendingAI');
      localStorage.removeItem('chat-typedAI');
    }

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
        body: JSON.stringify({ query: trimmed, language: language }),
      });

      if (aiResult.ok) {
        const aiData = await aiResult.json();
        // Filter out personal website mentions and type out the response
        if (stoppedRef.current) return;
        setShouldAutoScroll(true); // Ensure auto-scroll is enabled for AI response
        setPendingAI(filterPersonalWebsite(aiData.response));
      }
    } catch (error) {
      console.error('Search error:', error);
      const errorMessage = language === 'zh'
        ? '抱歉，我处理时遇到了问题。你能再试一次吗？'
        : 'Sorry, I had trouble processing that. Could you try again?';
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: errorMessage }
      ]);
    } finally {
      setIsLoading(false);
      setDotCount(1);
    }
  };



  return (
    <div className={`px-0 ${minecraft.variable} font-minecraft`}>
      {/* Phrases block quote */}
      <div className="mb-6 mt-6">
        <blockquote className="border-l-2 sm:border-l-4 border-stone-600 pl-4 py-3 bg-stone-800 rounded-r-lg sm:mr-24">
          <p className="text-stone-400 text-sm">{t('phrases.phrase1')}</p>
        </blockquote>
      </div>

      <h2 className="text-lg text-stone-300 mb-4 mt-4 font-minecraft">{t('search.title')}</h2>


      {/* Combined terminal interface */}
      <div className="max-w-2xl w-full mt-4 mb-6">
        <div className="flex flex-col border border-stone-700 rounded-lg bg-[#1a1a1a] overflow-hidden font-mono">
          {/* Chat history */}
          {(messages.length > 0 || pendingAI || typedAI) && (
            <div className="flex flex-col max-h-[200px] overflow-y-auto">
              <div
                className="flex-1 overflow-y-auto ai-chat-scroll"
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
                <div ref={messagesEndRef} />
              </div>
            </div>
          )}

          {/* Input area - always visible at bottom */}
          <form ref={formRef} onSubmit={handleSubmit} className="">
            <div className="flex items-start gap-1 px-4 py-3 bg-stone-800/50">
              <span className="text-stone-300 text-sm w-3 font-minecraft">{'>'}</span>
              <textarea
                ref={inputRef}
                placeholder={t('search.placeholder')}
                className="flex-grow bg-transparent text-white placeholder-stone-400 focus:outline-none font-minecraft text-xs resize-none overflow-hidden min-h-[20px] max-h-[120px] leading-5 py-0"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (formRef.current) {
                      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                    }
                  }
                }}
                rows={1}
              />
              {(isLoading || !!pendingAI || !!typedAI) && (
                <div className="flex items-center gap-1 text-xs text-stone-400 font-minecraft">
                  <span className="animate-spin inline-block">
                    {loadingSymbol}
                  </span>
                  <span
                    className="relative inline-block"
                    style={{
                      background: 'linear-gradient(90deg, #a8a29e 0%, #ffffff 50%, #a8a29e 100%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmerText 2s ease-in-out infinite',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {loadingText}
                  </span>
                  <style>{`
                    @keyframes shimmerText {
                      0% { background-position: -200% 0; }
                      100% { background-position: 200% 0; }
                    }
                  `}</style>
                  <span className="animate-pulse">.</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>.</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>.</span>
                </div>
              )}
            </div>
          </form>
        </div>
        <p className="text-stone-500 text-xs mt-2 font-minecraft">Type /help for commands</p>
      </div>
    </div>
  );
}
