import { useState, useEffect } from 'react';

const StaticFlowers = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const clientHeight = window.innerHeight;

            // Check if we're near the bottom (within 100px)
            const nearBottom = scrollHeight - (scrollTop + clientHeight) <= 100;
            setIsAtBottom(nearBottom);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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