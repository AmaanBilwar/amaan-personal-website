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
                transform: `scale(${config.scale})`,
                opacity: config.opacity,
                animationDelay: `${baseDelay}s`,
                transformOrigin: 'bottom center'
            }}
        >
            <img
                src="/Allium.webp"
                alt="Purple flower"
                className="w-12 h-12 object-contain"
                style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
            />
        </div>
    );
};

const ScrollBottomAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
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

            // Show animation if we're within 50px of the bottom (more generous)
            const shouldShow = distanceFromBottom <= 50;

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
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-0 left-0 w-full h-32 pointer-events-none z-50 transition-all duration-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            {/* Animated flower garden */}
            <div className="relative w-full h-full overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />

                {/* Beautiful Allium Flowers Across the Screen! 🌸✨ */}
                
                {/* Main row of flowers */}
                {renderFlowerImage(flowerConfigs[0], 0, { x: 80, y: 15 }, 0, isAnimating)}
                {renderFlowerImage(flowerConfigs[1], 1, { x: 160, y: 20 }, 0.2, isAnimating)}
                {renderFlowerImage(flowerConfigs[2], 2, { x: 240, y: 15 }, 0.4, isAnimating)}
                {renderFlowerImage(flowerConfigs[3], 3, { x: 320, y: 18 }, 0.6, isAnimating)}
                {renderFlowerImage(flowerConfigs[4], 4, { x: 400, y: 22 }, 0.8, isAnimating)}
                {renderFlowerImage(flowerConfigs[5], 5, { x: 480, y: 15 }, 1.0, isAnimating)}
                {renderFlowerImage(flowerConfigs[6], 6, { x: 560, y: 20 }, 1.2, isAnimating)}
                {renderFlowerImage(flowerConfigs[0], 7, { x: 640, y: 15 }, 1.4, isAnimating)}
                {renderFlowerImage(flowerConfigs[1], 8, { x: 720, y: 18 }, 1.6, isAnimating)}
                {renderFlowerImage(flowerConfigs[2], 9, { x: 800, y: 22 }, 1.8, isAnimating)}
                {renderFlowerImage(flowerConfigs[3], 10, { x: 880, y: 15 }, 2.0, isAnimating)}
                {renderFlowerImage(flowerConfigs[4], 11, { x: 960, y: 20 }, 2.2, isAnimating)}
                {renderFlowerImage(flowerConfigs[5], 12, { x: 1040, y: 15 }, 2.4, isAnimating)}
                {renderFlowerImage(flowerConfigs[6], 13, { x: 1120, y: 18 }, 2.6, isAnimating)}
                {renderFlowerImage(flowerConfigs[0], 14, { x: 1200, y: 22 }, 2.8, isAnimating)}
                {renderFlowerImage(flowerConfigs[1], 15, { x: 1280, y: 15 }, 3.0, isAnimating)}
                {renderFlowerImage(flowerConfigs[2], 16, { x: 1360, y: 20 }, 3.2, isAnimating)}
                {renderFlowerImage(flowerConfigs[3], 17, { x: 1440, y: 15 }, 3.4, isAnimating)}

                {/* Secondary scattered flowers */}
                {renderFlowerImage({ ...flowerConfigs[5], scale: 0.6 }, 18, { x: 40, y: 8 }, 0.1, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[0], scale: 0.7 }, 19, { x: 120, y: 5 }, 0.3, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[2], scale: 0.6 }, 20, { x: 200, y: 10 }, 0.5, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[1], scale: 0.8 }, 21, { x: 280, y: 3 }, 0.7, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[3], scale: 0.6 }, 22, { x: 360, y: 8 }, 0.9, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[4], scale: 0.7 }, 23, { x: 440, y: 5 }, 1.1, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[6], scale: 0.6 }, 24, { x: 520, y: 10 }, 1.3, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[0], scale: 0.8 }, 25, { x: 600, y: 3 }, 1.5, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[2], scale: 0.6 }, 26, { x: 680, y: 8 }, 1.7, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[1], scale: 0.7 }, 27, { x: 760, y: 5 }, 1.9, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[3], scale: 0.6 }, 28, { x: 840, y: 10 }, 2.1, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[4], scale: 0.8 }, 29, { x: 920, y: 3 }, 2.3, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[5], scale: 0.6 }, 30, { x: 1000, y: 8 }, 2.5, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[6], scale: 0.7 }, 31, { x: 1080, y: 5 }, 2.7, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[0], scale: 0.6 }, 32, { x: 1160, y: 10 }, 2.9, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[1], scale: 0.8 }, 33, { x: 1240, y: 3 }, 3.1, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[2], scale: 0.6 }, 34, { x: 1320, y: 8 }, 3.3, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[3], scale: 0.7 }, 35, { x: 1400, y: 5 }, 3.5, isAnimating)}
                {renderFlowerImage({ ...flowerConfigs[4], scale: 0.6 }, 36, { x: 1480, y: 10 }, 3.7, isAnimating)}

                {/* Floating flower particles */}
                <div className={`absolute inset-0 transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-bounce opacity-20"
                            style={{
                                left: `${10 + (i * 12)}%`,
                                bottom: `${20 + (i % 3) * 15}px`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: '6s',
                            }}
                        >
                            <img
                                src="/Allium.webp"
                                alt="Small flower"
                                className="w-4 h-4 object-contain"
                                style={{
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