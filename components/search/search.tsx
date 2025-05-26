'use client';

import { useState, useRef, useEffect } from 'react';
import SamplePrompts from './sample-prompts';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [typedResponse, setTypedResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [dotCount, setDotCount] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [isLoading]);

  // Typing effect for AI response
  useEffect(() => {
    if (!aiResponse) {
      setTypedResponse('');
      return;
    }
    setTypedResponse('');
    let idx = 0;
    const typeChar = () => {
      if (!aiResponse) return;
      // If HTML, type as text, then set as HTML at the end
      // We'll type out the text content, then set the HTML at the end for formatting
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = aiResponse;
      const textContent = tempDiv.textContent || '';
      if (idx < textContent.length) {
        setTypedResponse(textContent.slice(0, idx + 1));
        idx++;
        typingTimeout.current = setTimeout(typeChar, 50); // speed of typing
      } else {
        // After typing, set the full HTML for formatting
        setTypedResponse(aiResponse);
      }
    };
    typeChar();
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [aiResponse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setAiResponse(null);
      setTypedResponse('');
      return;
    }

    setIsLoading(true);
    setTypedResponse('');
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
        setAiResponse(aiData.response);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
      setDotCount(1);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setQuery(prompt);
    setAiResponse(null);
    setTypedResponse('');
    setIsLoading(false);
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

      <form ref={formRef} onSubmit={handleSubmit} className="relative group">
        <input
          type="text"
          placeholder="Ask me anything"
          className="w-full pl-4 pr-4 py-3 rounded-lg border border-white/30 bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-0 focus:border-white/60 transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {isLoading && (
        <div className="mt-4 flex items-center gap-2 text-stone-400 pl-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-stone-400 border-t-transparent"></div>
          <span className="font-medium animate-pulse">Thinking{'...'.slice(0, dotCount + 1)}</span>
        </div>
      )}

      {typedResponse && (
        <div className="mt-4 p-4 border border-white/30 rounded-lg">
          {/* If not done typing, show as plain text. If done, show as HTML. */}
          {typedResponse === aiResponse ? (
            <p className="text-stone-300" dangerouslySetInnerHTML={{ __html: aiResponse || '' }} />
          ) : (
            <p className="text-stone-300 whitespace-pre-line">{typedResponse}<span className="animate-pulse">|</span></p>
          )}
        </div>
      )}
    </div>
  );
}
