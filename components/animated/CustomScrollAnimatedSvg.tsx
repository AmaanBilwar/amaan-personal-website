'use client';
import React, { useRef, useEffect, useState } from 'react';

interface CustomScrollAnimatedSvgProps {
    svgCode: string;
    className?: string;
}

const CustomScrollAnimatedSvg: React.FC<CustomScrollAnimatedSvgProps> = ({
    svgCode,
    className = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('🎬 Scroll Animation:', {
                    isIntersecting: entry.isIntersecting,
                    intersectionRatio: entry.intersectionRatio,
                    hasAnimated: hasAnimated
                });

                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                    console.log('✨ Animation triggered!');
                } else if (!entry.isIntersecting && hasAnimated) {
                    setIsVisible(false);
                    // Reset animation when scrolling away
                    setTimeout(() => setHasAnimated(false), 500);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px',
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
            console.log('🔍 Observer attached to element');
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={containerRef} className={`w-full min-h-[200px] ${className}`}>
            <div
                className={`transition-all duration-1500 ease-out transform ${isVisible
                        ? 'opacity-100 scale-100 translate-y-0 rotate-0'
                        : 'opacity-0 scale-75 translate-y-8 -rotate-2'
                    }`}
                style={{
                    transformOrigin: 'center center',
                }}
                dangerouslySetInnerHTML={{ __html: svgCode }}
            />
        </div>
    );
};

export default CustomScrollAnimatedSvg;