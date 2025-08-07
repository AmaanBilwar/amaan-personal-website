
'use client';

import React, { useState, useEffect } from 'react';

interface AsciiArtProps {
    art: string;
    className?: string;
    animate?: boolean;
    animationSpeed?: number;
}

const AsciiArt: React.FC<AsciiArtProps> = ({
    art,
    className = '',
    animate = false,
    animationSpeed = 50
}) => {
    const [displayedArt, setDisplayedArt] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!animate) {
            setDisplayedArt(art);
            return;
        }

        if (currentIndex < art.length) {
            const timeout = setTimeout(() => {
                setDisplayedArt(art.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, animationSpeed);

            return () => clearTimeout(timeout);
        }
    }, [art, animate, animationSpeed, currentIndex]);

    return (
        <div className={`ascii-art-container ${className}`}>
            <pre
                className="font-mono text-xs leading-tight whitespace-pre overflow-x-auto text-stone-300 select-none"
                style={{
                    fontFamily: 'monospace',
                    letterSpacing: '0',
                    lineHeight: '1.1'
                }}
            >
                {displayedArt}
            </pre>
        </div>
    );
};

export default AsciiArt;