'use client';

import { useState, useEffect } from 'react';

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
        <div className={`fixed bottom-0 left-0 w-full h-40 pointer-events-none z-50 transition-all duration-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            {/* Animated flower garden */}
            <div className="relative w-full h-full overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />

                {/* Blossom flower patterns */}
                <svg
                    className="absolute bottom-8 w-full h-full"
                    viewBox="0 0 1600 100"
                    preserveAspectRatio="none"
                >
                    {/* Cherry Blossom 1 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '0ms' }}>
                        <g transform="translate(100, 50)">
                            {/* 5 petals */}
                            <path d="M0,-15 Q-8,-10 -6,-3 Q0,-5 0,0" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.3" className="animate-pulse" />
                            <path d="M0,0 Q5,-5 6,-3 Q8,-10 0,-15" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q10,-2 12,3 Q8,8 0,6" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,6 Q-8,8 -12,3 Q-10,-2 0,0" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-5,5 -6,3 Q-8,10 0,15" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="3" r="2" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Cherry Blossom 2 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                        <g transform="translate(250, 50)">
                            {/* 5 petals - slightly different shape */}
                            <path d="M0,-12 Q-6,-8 -5,-2 Q0,-3 0,0" stroke="#FFC0CB" strokeWidth="2" fill="#FFC0CB" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q3,-3 5,-2 Q6,-8 0,-12" stroke="#FFC0CB" strokeWidth="2" fill="#FFC0CB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q8,-1 10,2 Q6,6 0,5" stroke="#FFC0CB" strokeWidth="2" fill="#FFC0CB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,5 Q-6,6 -10,2 Q-8,-1 0,0" stroke="#FFC0CB" strokeWidth="2" fill="#FFC0CB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-3,3 -5,2 Q-6,8 0,12" stroke="#FFC0CB" strokeWidth="2" fill="#FFC0CB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="2.5" r="1.5" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Apple Blossom 3 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                        <g transform="translate(400, 50)">
                            {/* 5 petals - rounder */}
                            <path d="M0,-14 Q-7,-9 -4,-2 Q0,-4 0,0" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" />
                            <path d="M0,0 Q4,-4 4,-2 Q7,-9 0,-14" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q9,-1 11,3 Q7,7 0,5" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,5 Q-7,7 -11,3 Q-9,-1 0,0" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-4,4 -4,2 Q-7,9 0,14" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center with pink tint */}
                            <circle cx="0" cy="2.5" r="2" fill="#FFB6C1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Cherry Blossom 4 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
                        <g transform="translate(550, 50)">
                            {/* 5 petals - heart-shaped */}
                            <path d="M0,-16 Q-9,-11 -5,-3 Q0,-5 0,0" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q5,-5 5,-3 Q9,-11 0,-16" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q11,-2 13,4 Q9,9 0,7" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,7 Q-9,9 -13,4 Q-11,-2 0,0" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-5,5 -5,3 Q-9,11 0,16" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="3.5" r="2.5" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Plum Blossom 5 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                        <g transform="translate(700, 50)">
                            {/* 5 petals - more pointed */}
                            <path d="M0,-13 Q-6,-8 -4,-1 Q0,-3 0,0" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q3,-3 4,-1 Q6,-8 0,-13" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q8,0 10,3 Q6,6 0,4" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,4 Q-6,6 -10,3 Q-8,0 0,0" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-3,3 -4,1 Q-6,8 0,13" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="2" r="1.8" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Cherry Blossom 6 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1500ms' }}>
                        <g transform="translate(850, 50)">
                            {/* 5 petals - delicate */}
                            <path d="M0,-11 Q-5,-7 -3,-1 Q0,-2 0,0" stroke="#FFCCCB" strokeWidth="2" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" />
                            <path d="M0,0 Q2,-2 3,-1 Q5,-7 0,-11" stroke="#FFCCCB" strokeWidth="2" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q7,0 9,2 Q5,5 0,3" stroke="#FFCCCB" strokeWidth="2" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,3 Q-5,5 -9,2 Q-7,0 0,0" stroke="#FFCCCB" strokeWidth="2" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-2,2 -3,1 Q-5,7 0,11" stroke="#FFCCCB" strokeWidth="2" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1.5" r="1.2" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Apple Blossom 7 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1800ms' }}>
                        <g transform="translate(1000, 50)">
                            {/* 5 petals - large */}
                            <path d="M0,-17 Q-8,-12 -6,-3 Q0,-6 0,0" stroke="#F8F8FF" strokeWidth="2" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" />
                            <path d="M0,0 Q6,-6 6,-3 Q8,-12 0,-17" stroke="#F8F8FF" strokeWidth="2" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q12,-2 14,5 Q8,10 0,8" stroke="#F8F8FF" strokeWidth="2" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,8 Q-8,10 -14,5 Q-12,-2 0,0" stroke="#F8F8FF" strokeWidth="2" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-6,6 -6,3 Q-8,12 0,17" stroke="#F8F8FF" strokeWidth="2" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center with pink center */}
                            <circle cx="0" cy="4" r="3" fill="#FFB6C1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Cherry Blossom 8 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '2100ms' }}>
                        <g transform="translate(1150, 50)">
                            {/* 5 petals */}
                            <path d="M0,-13 Q-7,-9 -5,-2 Q0,-4 0,0" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q4,-4 5,-2 Q7,-9 0,-13" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q9,-1 11,3 Q7,7 0,5" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,5 Q-7,7 -11,3 Q-9,-1 0,0" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-4,4 -5,2 Q-7,9 0,13" stroke="#FFB6C1" strokeWidth="2" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="2.5" r="2" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Plum Blossom 9 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '2400ms' }}>
                        <g transform="translate(1300, 50)">
                            {/* 5 petals */}
                            <path d="M0,-14 Q-6,-9 -4,-2 Q0,-3 0,0" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q3,-3 4,-2 Q6,-9 0,-14" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q8,0 10,3 Q6,6 0,4" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,4 Q-6,6 -10,3 Q-8,0 0,0" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-3,3 -4,2 Q-6,9 0,14" stroke="#DDA0DD" strokeWidth="2" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="2" r="1.8" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Apple Blossom 10 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '2700ms' }}>
                        <g transform="translate(1450, 50)">
                            {/* 5 petals */}
                            <path d="M0,-16 Q-8,-11 -6,-3 Q0,-5 0,0" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" />
                            <path d="M0,0 Q5,-5 6,-3 Q8,-11 0,-16" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q11,-2 13,4 Q8,8 0,6" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,6 Q-8,8 -13,4 Q-11,-2 0,0" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-5,5 -6,3 Q-8,11 0,16" stroke="#F0F8FF" strokeWidth="2" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="3" r="2.2" fill="#FFB6C1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small blossoms for gaps */}
                    {/* Small Cherry Blossom 11 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                        <g transform="translate(175, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-8 Q-4,-6 -3,-1 Q0,-2 0,0" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q2,-2 3,-1 Q4,-6 0,-8" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q5,0 6,2 Q4,4 0,3" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,3 Q-4,4 -6,2 Q-5,0 0,0" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-2,2 -3,1 Q-4,6 0,8" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1.5" r="1" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small Cherry Blossom 12 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                        <g transform="translate(325, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-9 Q-5,-6 -4,-1 Q0,-2 0,0" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" />
                            <path d="M0,0 Q2,-2 4,-1 Q5,-6 0,-9" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q6,0 7,2 Q5,5 0,3" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,3 Q-5,5 -7,2 Q-6,0 0,0" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-2,2 -4,1 Q-5,6 0,9" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1.5" r="1.2" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small Cherry Blossom 13 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
                        <g transform="translate(475, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-7 Q-3,-5 -2,-1 Q0,-1 0,0" stroke="#F0F8FF" strokeWidth="1.5" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" />
                            <path d="M0,0 Q1,-1 2,-1 Q3,-5 0,-7" stroke="#F0F8FF" strokeWidth="1.5" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q4,0 5,1 Q3,3 0,2" stroke="#F0F8FF" strokeWidth="1.5" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,2 Q-3,3 -5,1 Q-4,0 0,0" stroke="#F0F8FF" strokeWidth="1.5" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-1,1 -2,1 Q-3,5 0,7" stroke="#F0F8FF" strokeWidth="1.5" fill="#F0F8FF" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1" r="0.8" fill="#FFB6C1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small Cherry Blossom 14 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
                        <g transform="translate(625, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-8 Q-4,-5 -3,-1 Q0,-2 0,0" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q2,-2 3,-1 Q4,-5 0,-8" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q5,0 6,2 Q4,4 0,3" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,3 Q-4,4 -6,2 Q-5,0 0,0" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-2,2 -3,1 Q-4,5 0,8" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1.5" r="1" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small Cherry Blossom 15 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1700ms' }}>
                        <g transform="translate(775, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-9 Q-4,-6 -3,-1 Q0,-2 0,0" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" />
                            <path d="M0,0 Q2,-2 3,-1 Q4,-6 0,-9" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q6,0 7,2 Q5,5 0,3" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,3 Q-5,5 -7,2 Q-6,0 0,0" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-2,2 -3,1 Q-4,6 0,9" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.5" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1.5" r="1.1" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small Cherry Blossom 16 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '2000ms' }}>
                        <g transform="translate(925, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-8 Q-3,-5 -2,-1 Q0,-1 0,0" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" />
                            <path d="M0,0 Q1,-1 2,-1 Q3,-5 0,-8" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q5,0 6,2 Q4,4 0,3" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,3 Q-4,4 -6,2 Q-5,0 0,0" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-1,1 -2,1 Q-3,5 0,8" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1.5" r="0.9" fill="#FFB6C1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small Cherry Blossom 17 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '2300ms' }}>
                        <g transform="translate(1075, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-7 Q-4,-4 -3,-1 Q0,-1 0,0" stroke="#FFB6C1" strokeWidth="1.5" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q1,-1 3,-1 Q4,-4 0,-7" stroke="#FFB6C1" strokeWidth="1.5" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q4,0 5,1 Q3,3 0,2" stroke="#FFB6C1" strokeWidth="1.5" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,2 Q-3,3 -5,1 Q-4,0 0,0" stroke="#FFB6C1" strokeWidth="1.5" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-1,1 -3,1 Q-4,4 0,7" stroke="#FFB6C1" strokeWidth="1.5" fill="#FFB6C1" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1" r="0.8" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small Cherry Blossom 18 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '2600ms' }}>
                        <g transform="translate(1225, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-8 Q-3,-5 -2,-1 Q0,-2 0,0" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" />
                            <path d="M0,0 Q2,-2 2,-1 Q3,-5 0,-8" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q5,0 6,2 Q4,4 0,3" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,3 Q-4,4 -6,2 Q-5,0 0,0" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-2,2 -2,1 Q-3,5 0,8" stroke="#FFC0CB" strokeWidth="1.5" fill="#FFC0CB" fillOpacity="0.3" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1.5" r="1" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Small Cherry Blossom 19 */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '2900ms' }}>
                        <g transform="translate(1375, 65)">
                            {/* 5 small petals */}
                            <path d="M0,-7 Q-3,-4 -2,-1 Q0,-1 0,0" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q1,-1 2,-1 Q3,-4 0,-7" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q4,0 5,1 Q3,3 0,2" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,2 Q-3,3 -5,1 Q-4,0 0,0" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-1,1 -2,1 Q-3,4 0,7" stroke="#DDA0DD" strokeWidth="1.5" fill="#DDA0DD" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1" r="0.8" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Very edge flowers */}
                    {/* Far left edge blossom */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                        <g transform="translate(30, 55)">
                            {/* 5 small petals */}
                            <path d="M0,-6 Q-3,-4 -2,-1 Q0,-1 0,0" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" />
                            <path d="M0,0 Q1,-1 2,-1 Q3,-4 0,-6" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q4,0 5,1 Q3,3 0,2" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,2 Q-3,3 -5,1 Q-4,0 0,0" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-1,1 -2,1 Q-3,4 0,6" stroke="#FFCCCB" strokeWidth="1.5" fill="#FFCCCB" fillOpacity="0.4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1" r="0.7" fill="#FFD700" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>

                    {/* Far right edge blossom */}
                    <g className={`transition-all duration-1000 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '3000ms' }}>
                        <g transform="translate(1570, 55)">
                            {/* 5 small petals */}
                            <path d="M0,-6 Q-3,-4 -2,-1 Q0,-1 0,0" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" />
                            <path d="M0,0 Q1,-1 2,-1 Q3,-4 0,-6" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <path d="M0,0 Q4,0 5,1 Q3,3 0,2" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <path d="M0,2 Q-3,3 -5,1 Q-4,0 0,0" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                            <path d="M0,0 Q-1,1 -2,1 Q-3,4 0,6" stroke="#F8F8FF" strokeWidth="1.5" fill="#F8F8FF" fillOpacity="0.6" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                            {/* Center */}
                            <circle cx="0" cy="1" r="0.7" fill="#FFB6C1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </g>
                    </g>
                </svg>

                {/* Floating petal particles */}
                <div className={`absolute inset-0 transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
                    {[...Array(15)].map((_, i) => {
                        const colors = ['#FFB6C1', '#FFC0CB', '#FFCCCB', '#F0F8FF', '#DDA0DD'];
                        const color = colors[i % colors.length];
                        return (
                            <div
                                key={i}
                                className="absolute animate-bounce opacity-25"
                                style={{
                                    left: `${5 + (i * 6.5)}%`,
                                    bottom: `${18 + (i % 5) * 10}px`,
                                    animationDelay: `${i * 0.3}s`,
                                    animationDuration: '4s',
                                }}
                            >
                                <svg width="5" height="7" viewBox="0 0 5 7">
                                    <path d="M2.5,0 Q1,1.5 0,3.5 Q1,5.5 2.5,7 Q4,5.5 5,3.5 Q4,1.5 2.5,0 Z" fill={color} />
                                </svg>
                            </div>
                        );
                    })}
                </div>


            </div>
        </div>
    );
};

export default ScrollBottomAnimation;