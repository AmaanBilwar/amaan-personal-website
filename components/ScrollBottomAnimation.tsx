import { useState, useEffect, useCallback } from 'react';

const StaticFlowers = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Calculate scroll percentage
        const scrollPercentage = scrollTop / (documentHeight - windowHeight);

        // Use a more generous threshold and add some hysteresis to prevent flickering
        const threshold = 0.3; // Trigger at 30% down
        const hysteresis = 0.02; // 2% buffer zone (smaller for faster response)

        if (!isAtBottom && scrollPercentage > threshold) {
            setIsAtBottom(true);
        } else if (isAtBottom && scrollPercentage < (threshold - hysteresis)) {
            setIsAtBottom(false);
        }

        // Debug logging
        console.log('Scroll %:', Math.round(scrollPercentage * 100), 'isAtBottom:', isAtBottom);
    }, [isAtBottom]);

    useEffect(() => {
        // Throttle scroll events to reduce glitchiness
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });
        handleScroll(); // Check initial position

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [handleScroll]);

    return (
        <div className={`${isAtBottom ? 'fixed bottom-0 left-0 w-full flex justify-center' : 'relative w-full max-w-2xl flex justify-start mx-auto -ml-3'} items-center pb-4 pointer-events-none z-50`}>
            <div className="flex justify-start items-center gap-8">
                {[...Array(12)].map((_, i) => (
                    <img
                        key={i}
                        src="/Allium.webp"
                        alt="Purple flower"
                        className="object-contain"
                        style={{
                            width: '28px',
                            height: '32px',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default StaticFlowers;