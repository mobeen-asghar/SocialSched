import { Post, User } from '../types';

const POSTS_KEY = 'socialsched_posts';
const ANALYTICS_KEY = 'socialsched_analytics';

// Posts Management
export const getStoredPosts = (userId: string): Post[] => {
  try {
    const posts = localStorage.getItem(POSTS_KEY);
    const allPosts: Post[] = posts ? JSON.parse(posts) : [];
    return allPosts.filter(post => post.userId === userId);
  } catch (error) {
    console.error('Error reading posts from localStorage:', error);
    return [];
  }
};

export const storePosts = (posts: Post[]): void => {
  try {
    const existingPosts = getAllPosts();
    const otherUsersPosts = existingPosts.filter(post => 
      !posts.some(newPost => newPost.userId === post.userId)
    );
    const allPosts = [...otherUsersPosts, ...posts];
    localStorage.setItem(POSTS_KEY, JSON.stringify(allPosts));
  } catch (error) {
    console.error('Error storing posts to localStorage:', error);
  }
};

export const getAllPosts = (): Post[] => {
  try {
    const posts = localStorage.getItem(POSTS_KEY);
    return posts ? JSON.parse(posts) : [];
  } catch (error) {
    console.error('Error reading all posts from localStorage:', error);
    return [];
  }
};

export const addPost = (post: Post): void => {
  try {
    const allPosts = getAllPosts();
    allPosts.push(post);
    localStorage.setItem(POSTS_KEY, JSON.stringify(allPosts));
  } catch (error) {
    console.error('Error adding post to localStorage:', error);
  }
};

export const updatePost = (postId: string, updates: Partial<Post>): void => {
  try {
    const allPosts = getAllPosts();
    const postIndex = allPosts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
      allPosts[postIndex] = { ...allPosts[postIndex], ...updates, updatedAt: new Date().toISOString() };
      localStorage.setItem(POSTS_KEY, JSON.stringify(allPosts));
    }
  } catch (error) {
    console.error('Error updating post in localStorage:', error);
  }
};

export const deletePost = (postId: string): void => {
  try {
    const allPosts = getAllPosts();
    const filteredPosts = allPosts.filter(post => post.id !== postId);
    localStorage.setItem(POSTS_KEY, JSON.stringify(filteredPosts));
  } catch (error) {
    console.error('Error deleting post from localStorage:', error);
  }
};

// Analytics Management
export const getAnalytics = (userId: string) => {
  try {
    const analytics = localStorage.getItem(`${ANALYTICS_KEY}_${userId}`);
    return analytics ? JSON.parse(analytics) : {
      totalReach: 0,
      engagementRate: 0,
      followers: 0,
      scheduledPosts: 0
    };
  } catch (error) {
    console.error('Error reading analytics from localStorage:', error);
    return {
      totalReach: 0,
      engagementRate: 0,
      followers: 0,
      scheduledPosts: 0
    };
  }
};

export const updateAnalytics = (userId: string, analytics: any): void => {
  try {
    localStorage.setItem(`${ANALYTICS_KEY}_${userId}`, JSON.stringify(analytics));
  } catch (error) {
    console.error('Error storing analytics to localStorage:', error);
  }
};

// Data validation
export const validatePostData = (post: Partial<Post>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!post.content || post.content.trim().length === 0) {
    errors.push('Post content is required');
  }
  
  if (post.content && post.content.length > 2200) {
    errors.push('Post content must be less than 2200 characters');
  }
  
  if (!post.platform) {
    errors.push('Platform selection is required');
  }
  
  if (!post.scheduledTime) {
    errors.push('Scheduled time is required');
  }
  
  if (post.scheduledTime && new Date(post.scheduledTime) < new Date()) {
    errors.push('Scheduled time must be in the future');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Clear all user data
export const clearUserData = (userId: string): void => {
  try {
    // Remove user's posts
    const allPosts = getAllPosts();
    const otherUsersPosts = allPosts.filter(post => post.userId !== userId);
    localStorage.setItem(POSTS_KEY, JSON.stringify(otherUsersPosts));
    
    // Remove user's analytics
    localStorage.removeItem(`${ANALYTICS_KEY}_${userId}`);
  } catch (error) {
    console.error('Error clearing user data from localStorage:', error);
  }
};