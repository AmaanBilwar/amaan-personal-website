'use client';

import { useEffect, useState, useRef } from 'react';

const paragraphs = [
    "nicholas enjoys playing the piano and making music in his free time.",
    "he used to make art as a kid and still loves to doodle and design.",
    "nicholas is passionate about building things that help people build things.",
    "he's curious about ai agents, data, and creative technology.",
    "he loves learning, exploring new ideas, and collaborating with others.",
    "when he's not coding, nicholas enjoys hiking, reading, and playing basketball."
];

export default function DrawPage() {
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const paraIndex = useRef(0);
    const charIndex = useRef(0);
    const animationFrame = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '24px JetBrains Mono';
        ctx.fillStyle = '#ffffff';

        const typeParagraph = () => {
            if (paraIndex.current >= paragraphs.length) {
                paraIndex.current = 0;
            }
            const para = paragraphs[paraIndex.current];
            if (charIndex.current < para.length) {
                setCurrentText(para.slice(0, charIndex.current + 1));
                charIndex.current++;
                animationFrame.current = requestAnimationFrame(typeParagraph);
            } else {
                setIsTyping(false);
                drawParagraph(para);
            }
        };

        const drawParagraph = (para: string) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(
                canvas.width / 2,
                canvas.height / 2,
                Math.min(canvas.width, canvas.height) / 3,
                0,
                Math.PI * 2
            );
            ctx.stroke();
            ctx.fillStyle = '#ffffff';
            ctx.font = '32px JetBrains Mono';
            const lines = wrapText(ctx, para, canvas.width * 0.7);
            lines.forEach((line, i) => {
                ctx.fillText(
                    line,
                    (canvas.width - ctx.measureText(line).width) / 2,
                    canvas.height / 2 - (lines.length * 24) / 2 + i * 36
                );
            });
            setTimeout(() => {
                charIndex.current = 0;
                paraIndex.current++;
                setIsTyping(true);
                animationFrame.current = requestAnimationFrame(typeParagraph);
            }, 2500);
        };

        // Helper to wrap text
        function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number) {
            const words = text.split(' ');
            let lines: string[] = [];
            let line = '';
            for (let n = 0; n < words.length; n++) {
                const testLine = line + words[n] + ' ';
                const metrics = ctx.measureText(testLine);
                if (metrics.width > maxWidth && n > 0) {
                    lines.push(line.trim());
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
            }
            lines.push(line.trim());
            return lines;
        }

        setIsTyping(true);
        animationFrame.current = requestAnimationFrame(typeParagraph);
        return () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">auto-typing nicholas's story</h1>
                <div className="mb-8">
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <p className="text-xl">
                            {isTyping ? (
                                <span className="font-mono">{currentText}<span className="animate-pulse">|</span></span>
                            ) : (
                                <span className="font-mono">{currentText}</span>
                            )}
                        </p>
                    </div>
                </div>
                <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
} 