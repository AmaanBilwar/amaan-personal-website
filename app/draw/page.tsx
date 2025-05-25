'use client';

import { useEffect, useState } from 'react';

const nouns = [
    'cat', 'dog', 'house', 'tree', 'sun', 'moon', 'star', 'book', 'phone', 'computer',
    'pizza', 'hamburger', 'ice cream', 'coffee', 'tea', 'water', 'mountain', 'ocean',
    'beach', 'forest', 'flower', 'cloud', 'rain', 'snow', 'wind', 'fire', 'earth',
    'air', 'space', 'rocket', 'car', 'bike', 'train', 'plane', 'boat', 'ship',
    'castle', 'bridge', 'tower', 'statue', 'monument', 'pyramid', 'volcano', 'cave',
    'river', 'lake', 'desert', 'island', 'jungle', 'garden', 'park', 'zoo', 'museum',
    'school', 'hospital', 'restaurant', 'hotel', 'shop', 'market', 'factory', 'farm'
];

export default function DrawPage() {
    const [selectedWord, setSelectedWord] = useState('');
    const [showWord, setShowWord] = useState(false);

    useEffect(() => {
        // Select a random word when the page loads
        const randomWord = nouns[Math.floor(Math.random() * nouns.length)];
        setSelectedWord(randomWord);
    }, []);

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Draw Something!</h1>

                <div className="mb-8">
                    <button
                        onClick={() => setShowWord(!showWord)}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                    >
                        {showWord ? 'Hide Word' : 'Show Word'}
                    </button>

                    {showWord && (
                        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                            <p className="text-xl">Draw this: <span className="font-bold">{selectedWord}</span></p>
                        </div>
                    )}
                </div>

                <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
                    <iframe
                        src="https://skribbl.io/"
                        className="w-full h-full"
                        allow="fullscreen"
                    />
                </div>
            </div>
        </div>
    );
} 