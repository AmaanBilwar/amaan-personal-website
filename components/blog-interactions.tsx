'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface BlogInteractionsProps {
  blogId: string;
  blogTitle: string;
  blogUrl: string;
  className?: string;
}

export default function BlogInteractions({
  blogId,
  blogTitle,
  blogUrl,
  className = '',
}: BlogInteractionsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Generate a unique user ID for this device/browser
  const getUserId = () => {
    let userId = localStorage.getItem('user-id');
    if (!userId) {
      userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('user-id', userId);
    }
    return userId;
  };

  // Load like data from Supabase on mount
  useEffect(() => {
    loadLikeData();
  }, [blogId]);

  const loadLikeData = async () => {
    try {
      const userId = getUserId();

      // Check if current user has liked this blog
      const { data: userLike } = await supabase
        .from('blog_likes')
        .select('id')
        .eq('blog_id', blogId)
        .eq('user_id', userId)
        .single();

      setIsLiked(!!userLike);

      // Get total like count for this blog
      const { count } = await supabase
        .from('blog_likes')
        .select('*', { count: 'exact', head: true })
        .eq('blog_id', blogId);

      setLikeCount(count || 0);
    } catch (error) {
      console.error('Error loading likes:', error);
      // Fallback to localStorage for offline functionality
      const liked = localStorage.getItem(`blog-liked-${blogId}`) === 'true';
      const likes = parseInt(localStorage.getItem(`blog-likes-${blogId}`) || '0');
      setIsLiked(liked);
      setLikeCount(likes);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async () => {
    const userId = getUserId();
    const newLikedState = !isLiked;

    // Optimistic update
    setIsLiked(newLikedState);
    setLikeCount((prev) => (newLikedState ? prev + 1 : Math.max(0, prev - 1)));

    try {
      if (newLikedState) {
        // Add like
        const { error } = await supabase
          .from('blog_likes')
          .insert({ blog_id: blogId, user_id: userId });

        if (error) throw error;
      } else {
        // Remove like
        const { error } = await supabase
          .from('blog_likes')
          .delete()
          .eq('blog_id', blogId)
          .eq('user_id', userId);

        if (error) throw error;
      }

      // Update localStorage as backup
      localStorage.setItem(`blog-liked-${blogId}`, newLikedState.toString());

      // Refresh the count to ensure accuracy
      setTimeout(loadLikeData, 500);
    } catch (error) {
      console.error('Error updating like:', error);
      // Revert optimistic update on error
      setIsLiked(!newLikedState);
      setLikeCount((prev) => (newLikedState ? Math.max(0, prev - 1) : prev + 1));

      // Fallback to localStorage
      localStorage.setItem(`blog-liked-${blogId}`, (!newLikedState).toString());
      const localLikes = parseInt(localStorage.getItem(`blog-likes-${blogId}`) || '0');
      const newLocalCount = newLikedState ? localLikes + 1 : Math.max(0, localLikes - 1);
      localStorage.setItem(`blog-likes-${blogId}`, newLocalCount.toString());
      setLikeCount(newLocalCount);
    }
  };

  return (
    <div
      className={`flex items-center justify-start mt-4 pt-3 border-t border-stone-700 -mx-4 px-4 ${className}`}
    >
      {/* Like Button - Left aligned */}
      <button
        onClick={handleLike}
        disabled={isLoading}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
          isLiked
            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
            : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-red-400'
        }`}
      >
        <Heart
          className={`w-4 h-4 ${isLiked ? 'fill-current' : ''} ${isLoading ? 'animate-pulse' : ''}`}
        />
        <span>{isLoading ? '...' : likeCount}</span>
      </button>
    </div>
  );
}
