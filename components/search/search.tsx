'use client';

import { useState, useRef } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import SamplePrompts from './sample-prompts';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      setAiResponse(null);
      return;
    }

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
        setAiResponse(aiData.response);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setQuery(prompt);
    setAiResponse(null);
    setIsLoading(false);
    // Focus the input after setting the query
    const input = formRef.current?.querySelector('input');
    if (input) {
      input.focus();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-xl text-stone-300 mb-4">What do you want to know about me?</h2>
      <SamplePrompts onPromptClick={handlePromptClick} />

      <form ref={formRef} onSubmit={handleSubmit} className="relative group">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-white transition-colors" />
        <input
          type="text"
          placeholder="Ask me anything"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/30 bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-0 focus:border-white/60 transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {isLoading && (
        <div className="mt-4 flex items-center gap-2 text-stone-400 pl-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-stone-400 border-t-transparent"></div>
          <span>Thinking...</span>
        </div>
      )}

      {aiResponse && (
        <div className="mt-4 p-4 border border-white/30 rounded-lg">
          <p className="text-stone-300" dangerouslySetInnerHTML={{ __html: aiResponse }} />
        </div>
      )}
    </div>
  );
}
