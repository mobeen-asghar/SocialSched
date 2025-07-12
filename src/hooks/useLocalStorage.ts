import { useState, useEffect } from 'react';
import { Post } from '../types';
import { getStoredPosts, storePosts, addPost, updatePost, deletePost, validatePostData } from '../utils/storage';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export const useLocalStorage = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadPosts();
    } else {
      setPosts([]);
      setIsLoading(false);
    }
  }, [user]);

  const loadPosts = () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      const userPosts = getStoredPosts(user.id);
      setPosts(userPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
      toast.error('Failed to load posts');
    } finally {
      setIsLoading(false);
    }
  };

  const createPost = (postData: Omit<Post, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
    if (!user) return false;

    const validation = validatePostData(postData);
    if (!validation.isValid) {
      toast.error(validation.errors[0]);
      return false;
    }

    try {
      const newPost: Post = {
        ...postData,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        userId: user.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      addPost(newPost);
      setPosts(prev => [...prev, newPost]);
      toast.success('Post created successfully');
      return true;
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Failed to create post');
      return false;
    }
  };

  const editPost = (postId: string, updates: Partial<Post>) => {
    if (!user) return false;

    const validation = validatePostData(updates);
    if (!validation.isValid) {
      toast.error(validation.errors[0]);
      return false;
    }

    try {
      updatePost(postId, updates);
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { ...post, ...updates, updatedAt: new Date().toISOString() }
          : post
      ));
      toast.success('Post updated successfully');
      return true;
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error('Failed to update post');
      return false;
    }
  };

  const removePost = (postId: string) => {
    if (!user) return false;

    try {
      deletePost(postId);
      setPosts(prev => prev.filter(post => post.id !== postId));
      toast.success('Post deleted successfully');
      return true;
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Failed to delete post');
      return false;
    }
  };

  const getPostsByPlatform = (platform: string) => {
    if (platform === 'all') return posts;
    return posts.filter(post => post.platform === platform);
  };

  const getPostsByStatus = (status: Post['status']) => {
    return posts.filter(post => post.status === status);
  };

  const getAnalytics = () => {
    const totalPosts = posts.length;
    const publishedPosts = posts.filter(post => post.status === 'published');
    const scheduledPosts = posts.filter(post => post.status === 'scheduled');
    
    const totalEngagement = publishedPosts.reduce((acc, post) => ({
      likes: acc.likes + post.engagement.likes,
      comments: acc.comments + post.engagement.comments,
      shares: acc.shares + post.engagement.shares
    }), { likes: 0, comments: 0, shares: 0 });

    const totalReach = totalEngagement.likes + totalEngagement.comments + totalEngagement.shares;
    const engagementRate = publishedPosts.length > 0 
      ? ((totalReach / publishedPosts.length) / 100).toFixed(1)
      : '0.0';

    // Generate some realistic demo data
    const baseFollowers = 1200;
    const followerGrowth = Math.floor(Math.random() * 500) + 100;
    
    return {
      totalReach: totalReach > 0 ? totalReach.toLocaleString() : (Math.floor(Math.random() * 50000) + 10000).toLocaleString(),
      engagementRate: totalReach > 0 ? `${engagementRate}%` : `${(Math.random() * 5 + 2).toFixed(1)}%`,
      followers: `${(baseFollowers + followerGrowth).toLocaleString()}`,
      scheduledPosts: scheduledPosts.length.toString()
    };
  };

  // Generate sample posts for demo purposes
  const generateSamplePosts = () => {
    if (!user || posts.length > 0) return;

    const samplePosts = [
      {
        content: "🚀 Excited to share our latest product update! New features that will revolutionize your workflow. What do you think? #ProductUpdate #Innovation",
        platform: "instagram",
        scheduledTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        status: "scheduled" as const,
        engagement: { likes: 45, comments: 12, shares: 8 }
      },
      {
        content: "Just finished an amazing team meeting! Our Q4 goals are ambitious but achievable. Ready to make it happen! 💪 #TeamWork #Goals",
        platform: "linkedin",
        scheduledTime: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
        status: "scheduled" as const,
        engagement: { likes: 23, comments: 5, shares: 3 }
      },
      {
        content: "Coffee break thoughts: The best ideas often come when you least expect them. What's your creative process? ☕️ #Creativity #Inspiration",
        platform: "twitter",
        scheduledTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        status: "published" as const,
        engagement: { likes: 67, comments: 18, shares: 12 }
      }
    ];

    samplePosts.forEach(postData => {
      createPost(postData);
    });
  };

  // Auto-generate sample posts on first load
  useEffect(() => {
    if (user && posts.length === 0 && !isLoading) {
      const timer = setTimeout(() => {
        generateSamplePosts();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [user, posts.length, isLoading]);

  return {
    posts,
    isLoading,
    createPost,
    editPost,
    removePost,
    getPostsByPlatform,
    getPostsByStatus,
    getAnalytics,
    refreshPosts: loadPosts,
    generateSamplePosts
  };
};