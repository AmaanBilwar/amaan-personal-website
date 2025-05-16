'use client';

import { useState } from 'react';

interface InfoCardProps {
    title: string;
    description: string;
    details: React.ReactNode;
}

export default function InfoCard({ title, description, details }: InfoCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="bg-stone-700/50 p-4 rounded-lg cursor-pointer hover:bg-stone-800/50 transition-colors"
                onClick={() => setIsOpen(true)}
            >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-stone-400">{description}</p>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="relative bg-stone-900 p-6 rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-stone-800/50 [&::-webkit-scrollbar-thumb]:bg-stone-600/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-stone-500/50">
                        <button
                            className="absolute top-4 right-4 text-stone-400 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                        <p className="text-stone-400 mb-4">{description}</p>
                        <div className="text-stone-300">{details}</div>
                    </div>
                </div>
            )}
        </>
    );
} 