'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface BlogInteractionsProps {
    blogId: string;
    blogTitle: string;
    blogUrl: string;
    className?: string;
}

export default function BlogInteractions({ blogId, blogTitle, blogUrl, className = '' }: BlogInteractionsProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    // Load data from localStorage on mount
    useEffect(() => {
        const liked = localStorage.getItem(`blog-liked-${blogId}`) === 'true';
        const likes = parseInt(localStorage.getItem(`blog-likes-${blogId}`) || '0');

        setIsLiked(liked);
        setLikeCount(likes);
    }, [blogId]);

    const handleLike = () => {
        const newLikedState = !isLiked;
        const newLikeCount = newLikedState ? likeCount + 1 : Math.max(0, likeCount - 1);

        setIsLiked(newLikedState);
        setLikeCount(newLikeCount);

        localStorage.setItem(`blog-liked-${blogId}`, newLikedState.toString());
        localStorage.setItem(`blog-likes-${blogId}`, newLikeCount.toString());
    };

    return (
        <div className={`flex items-center justify-start mt-4 pt-3 border-t border-stone-700 -mx-4 px-4 ${className}`}>
            {/* Like Button - Centered */}
            <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all duration-200 hover:scale-105 ${isLiked
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                    : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-red-400'
                    }`}
            >
                <Heart
                    className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`}
                />
                <span>{likeCount}</span>
            </button>
        </div>
    );
} 