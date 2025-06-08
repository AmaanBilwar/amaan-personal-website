import { useState } from 'react';

interface SamplePromptsProps {
    onPromptClick: (prompt: string) => void;
}

const samplePrompts = [
    "Tell me about your experience at Ownr",
    "What projects have you worked on?"
];

export default function SamplePrompts({ onPromptClick }: SamplePromptsProps) {
    return (
        <div className="w-full max-w-6xl mx-auto mb-4 font-minecraft">
            <div className="flex flex-wrap gap-2">
                {samplePrompts.map((prompt, index) => (
                    <button
                        key={index}
                        onClick={() => onPromptClick(prompt)}
                        className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 text-stone-300 rounded-md transition-colors hover:scale-105 transition-transform duration-200 font-minecraft"
                    >
                        {prompt}
                    </button>
                ))}
            </div>
        </div>
    );
} 