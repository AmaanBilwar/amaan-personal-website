'use client';

import { useState, useEffect } from 'react';

// Simple flower configurations using your image! 🌸
const flowerConfigs = [
    { scale: 1.0, opacity: 1.0 },
    { scale: 0.8, opacity: 0.9 },
    { scale: 1.2, opacity: 1.0 },
    { scale: 0.9, opacity: 0.8 },
    { scale: 1.1, opacity: 0.95 },
    { scale: 0.7, opacity: 0.85 },
    { scale: 1.3, opacity: 1.0 }
];

// Helper function to render a flower using your image
const renderFlowerImage = (config: typeof flowerConfigs[0], index: number, position: { x: number, y: number }, baseDelay: number, isAnimating: boolean) => {
    return (
        <div
            key={`flower-${index}`}
            className={`absolute transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-8'}`}
            style={{
                left: `${position.x}px`,
                bottom: `${position.y}px`,
                transform: `scale(1.0)`, // Force consistent scale for all flowers
                opacity: 1.0, // Force consistent opacity for all flowers
                animationDelay: `${baseDelay}s`,
                transformOrigin: 'bottom center'
            }}
        >
            <img
                src="/Allium.webp"
                alt="Purple flower"
                className="object-contain"
                style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    minHeight: '48px',
                    maxWidth: '48px',
                    maxHeight: '48px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
            />
        </div>
    );
};

const ScrollBottomAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            // Get scroll position using multiple methods for compatibility
            const scrollHeight = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight
            );
            const scrollTop = Math.max(
                document.documentElement.scrollTop,
                document.body.scrollTop,
                window.pageYOffset
            );
            const clientHeight = window.innerHeight || document.documentElement.clientHeight;

            // Calculate how close to the bottom we are
            const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

            // Show animation if we're within 200px of the bottom (much more generous)
            const shouldShow = distanceFromBottom <= 200;

            if (shouldShow && !isVisible) {
                setIsVisible(true);
                setIsAnimating(true);
            } else if (!shouldShow && isVisible) {
                setIsAnimating(false);
                // Delay hiding to allow exit animation
                setTimeout(() => setIsVisible(false), 300);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        // Also check on initial load
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [mounted, isVisible]);

    if (!mounted || !isVisible) return null;

    return (
        <div className={`fixed bottom-0 left-0 w-full h-48 pointer-events-none z-50 transition-all duration-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            {/* Animated flower garden */}
            <div className="relative w-full h-full overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />

                {/* Beautiful Allium Flowers Across the Screen! 🌸✨ */}

                {/* Main row of flowers - all same size filling entire bottom */}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 0, { x: 40, y: 35 }, 0, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 1, { x: 110, y: 35 }, 0.1, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 2, { x: 180, y: 35 }, 0.2, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 3, { x: 250, y: 35 }, 0.3, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 4, { x: 320, y: 35 }, 0.4, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 5, { x: 390, y: 35 }, 0.5, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 6, { x: 460, y: 35 }, 0.6, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 7, { x: 530, y: 35 }, 0.7, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 8, { x: 600, y: 35 }, 0.8, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 9, { x: 670, y: 35 }, 0.9, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 10, { x: 740, y: 35 }, 1.0, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 11, { x: 810, y: 35 }, 1.1, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 12, { x: 880, y: 35 }, 1.2, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 13, { x: 950, y: 35 }, 1.3, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 14, { x: 1020, y: 35 }, 1.4, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 15, { x: 1090, y: 35 }, 1.5, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 16, { x: 1160, y: 35 }, 1.6, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 17, { x: 1230, y: 35 }, 1.7, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 18, { x: 1300, y: 35 }, 1.8, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 19, { x: 1370, y: 35 }, 1.9, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 20, { x: 1440, y: 35 }, 2.0, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 21, { x: 1510, y: 35 }, 2.1, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 22, { x: 1580, y: 35 }, 2.2, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 23, { x: 1650, y: 35 }, 2.3, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 24, { x: 1720, y: 35 }, 2.4, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 25, { x: 1790, y: 35 }, 2.5, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 26, { x: 1860, y: 35 }, 2.6, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 27, { x: 1930, y: 35 }, 2.7, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 28, { x: 2000, y: 35 }, 2.8, isAnimating)}
                {renderFlowerImage({ scale: 1.0, opacity: 1.0 }, 29, { x: 2070, y: 35 }, 2.9, isAnimating)}



                {/* Floating flower particles */}
                <div className={`absolute inset-0 transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-bounce opacity-20"
                            style={{
                                left: `${10 + (i * 12)}%`,
                                bottom: `${50 + (i % 3) * 20}px`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: '6s',
                            }}
                        >
                            <img
                                src="/Allium.webp"
                                alt="Small flower"
                                className="object-contain"
                                style={{
                                    width: '16px',
                                    height: '16px',
                                    minWidth: '16px',
                                    minHeight: '16px',
                                    maxWidth: '16px',
                                    maxHeight: '16px',
                                    filter: 'blur(1px) brightness(1.2)'
                                }}
                            />
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default ScrollBottomAnimation;