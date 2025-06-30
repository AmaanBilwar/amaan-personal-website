'use client';

import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Copy, Twitter, Linkedin, Send, Trash2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Comment {
    id: string;
    author: string;
    content: string;
    timestamp: number;
}

interface BlogInteractionsProps {
    blogId: string;
    blogTitle: string;
    blogUrl: string;
    className?: string;
}

export default function BlogInteractions({ blogId, blogTitle, blogUrl, className = '' }: BlogInteractionsProps) {
    const { t } = useLanguage();
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [viewCount, setViewCount] = useState(0);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [shareCount, setShareCount] = useState(0);

    // Load data from localStorage on mount
    useEffect(() => {
        const liked = localStorage.getItem(`blog-liked-${blogId}`) === 'true';
        const likes = parseInt(localStorage.getItem(`blog-likes-${blogId}`) || '0');
        const views = parseInt(localStorage.getItem(`blog-views-${blogId}`) || '0');
        const shares = parseInt(localStorage.getItem(`blog-shares-${blogId}`) || '0');
        const storedComments = localStorage.getItem(`blog-comments-${blogId}`);
        const savedAuthor = localStorage.getItem('blog-author-name') || '';

        setIsLiked(liked);
        setLikeCount(likes);
        setViewCount(views + 1); // Increment view count
        setShareCount(shares);
        setComments(storedComments ? JSON.parse(storedComments) : []);
        setAuthorName(savedAuthor);

        // Save updated view count
        localStorage.setItem(`blog-views-${blogId}`, (views + 1).toString());
    }, [blogId]);

    const handleLike = () => {
        const newLikedState = !isLiked;
        const newLikeCount = newLikedState ? likeCount + 1 : Math.max(0, likeCount - 1);

        setIsLiked(newLikedState);
        setLikeCount(newLikeCount);

        localStorage.setItem(`blog-liked-${blogId}`, newLikedState.toString());
        localStorage.setItem(`blog-likes-${blogId}`, newLikeCount.toString());
    };

    const handleShare = async (platform: string) => {
        const url = encodeURIComponent(blogUrl);
        const text = encodeURIComponent(`Check out "${blogTitle}" by Nicholas Chen`);

        let shareUrl = '';

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            case 'copy':
                try {
                    await navigator.clipboard.writeText(blogUrl);
                    setCopySuccess(true);
                    setTimeout(() => setCopySuccess(false), 2000);
                    setShowShareMenu(false);

                    // Increment share count for copy
                    const newShareCount = shareCount + 1;
                    setShareCount(newShareCount);
                    localStorage.setItem(`blog-shares-${blogId}`, newShareCount.toString());
                    return;
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'noopener,noreferrer');
            setShowShareMenu(false);

            // Increment share count
            const newShareCount = shareCount + 1;
            setShareCount(newShareCount);
            localStorage.setItem(`blog-shares-${blogId}`, newShareCount.toString());
        }
    };

    const handleAddComment = () => {
        if (!newComment.trim() || !authorName.trim()) return;

        const comment: Comment = {
            id: Date.now().toString(),
            author: authorName.trim(),
            content: newComment.trim(),
            timestamp: Date.now()
        };

        const updatedComments = [...comments, comment];
        setComments(updatedComments);
        setNewComment('');

        // Save to localStorage
        localStorage.setItem(`blog-comments-${blogId}`, JSON.stringify(updatedComments));
        localStorage.setItem('blog-author-name', authorName);
    };

    const handleDeleteComment = (commentId: string) => {
        const updatedComments = comments.filter(c => c.id !== commentId);
        setComments(updatedComments);
        localStorage.setItem(`blog-comments-${blogId}`, JSON.stringify(updatedComments));
    };

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div className={`flex items-center justify-center mt-4 pt-3 border-t border-stone-700 ${className}`}>
            {/* Actions - Centered */}
            <div className="flex items-center gap-6">
                {/* Like Button */}
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

                {/* Comment Button */}
                <button
                    onClick={toggleComments}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm bg-white/5 text-stone-400 hover:bg-white/10 hover:text-blue-400 transition-all duration-200 hover:scale-105"
                >
                    <MessageCircle className="w-4 h-4" />
                    <span>{comments.length}</span>
                </button>

                {/* Share Button with Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm bg-white/5 text-stone-400 hover:bg-white/10 hover:text-green-400 transition-all duration-200 hover:scale-105"
                    >
                        <Share2 className="w-4 h-4" />
                        <span>{shareCount}</span>
                    </button>

                    {/* Share Dropdown */}
                    {showShareMenu && (
                        <div className="absolute right-0 top-full mt-1 bg-[#2a2a2a] border border-stone-600 rounded-lg shadow-lg z-10 min-w-[140px]">
                            <button
                                onClick={() => handleShare('twitter')}
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-stone-300 hover:bg-white/10 transition-colors first:rounded-t-lg"
                            >
                                <Twitter className="w-3.5 h-3.5" />
                                Twitter/X
                            </button>
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-stone-300 hover:bg-white/10 transition-colors"
                            >
                                <Linkedin className="w-3.5 h-3.5" />
                                LinkedIn
                            </button>
                            <button
                                onClick={() => handleShare('copy')}
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-stone-300 hover:bg-white/10 transition-colors last:rounded-b-lg"
                            >
                                <Copy className="w-3.5 h-3.5" />
                                {copySuccess ? t('blog.copied') || 'Copied!' : t('blog.copyLink') || 'Copy Link'}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Click outside to close share menu */}
            {showShareMenu && (
                <div
                    className="fixed inset-0 z-5"
                    onClick={() => setShowShareMenu(false)}
                />
            )}

            {/* Comments Section */}
            {showComments && (
                <div className="mt-6 pt-4 border-t border-stone-700">
                    {/* Add Comment Form */}
                    <div className="mb-4 space-y-3">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder={t('blog.yourName') || 'Your name'}
                                value={authorName}
                                onChange={(e) => setAuthorName(e.target.value)}
                                className="flex-1 px-3 py-2 text-sm bg-white/5 border border-stone-600 rounded-md text-white placeholder-stone-500 focus:outline-none focus:border-stone-400 transition-colors"
                            />
                        </div>
                        <div className="flex gap-2">
                            <textarea
                                placeholder={t('blog.writeComment') || 'Write a comment...'}
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="flex-1 px-3 py-2 text-sm bg-white/5 border border-stone-600 rounded-md text-white placeholder-stone-500 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                                rows={3}
                            />
                            <button
                                onClick={handleAddComment}
                                disabled={!newComment.trim() || !authorName.trim()}
                                className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-md hover:bg-blue-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                <span className="hidden sm:inline">{t('blog.post') || 'Post'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-3">
                        {comments.length === 0 ? (
                            <p className="text-stone-500 text-sm text-center py-4">
                                {t('blog.noComments') || 'No comments yet. Be the first to comment!'}
                            </p>
                        ) : (
                            comments.map((comment) => (
                                <div key={comment.id} className="bg-white/5 rounded-lg p-3 border border-stone-700">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-stone-300">{comment.author}</span>
                                            <span className="text-xs text-stone-500">
                                                {new Date(comment.timestamp).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteComment(comment.id)}
                                            className="text-stone-500 hover:text-red-400 transition-colors p-1"
                                            title={t('blog.deleteComment') || 'Delete comment'}
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                    <p className="text-sm text-stone-400 leading-relaxed">{comment.content}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
} 