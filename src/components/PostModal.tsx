import React, { useState, useEffect } from 'react';
import { X, Calendar, Type, Image, Hash, Send, Clock, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Post } from '../types';
import toast from 'react-hot-toast';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post?: Post | null;
  onSave?: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, post, onSave }) => {
  const { createPost, editPost } = useLocalStorage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    content: '',
    platform: 'instagram',
    scheduledTime: '',
    status: 'scheduled' as const
  });

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: '#E4405F' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: '#1DA1F2' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: '#4267B2' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: '#0077B5' }
  ];

  useEffect(() => {
    if (post) {
      setFormData({
        content: post.content,
        platform: post.platform,
        scheduledTime: post.scheduledTime,
        status: post.status
      });
    } else {
      // Set default time to 1 hour from now
      const defaultTime = new Date();
      defaultTime.setHours(defaultTime.getHours() + 1);
      setFormData({
        content: '',
        platform: 'instagram',
        scheduledTime: defaultTime.toISOString().slice(0, 16),
        status: 'scheduled'
      });
    }
  }, [post, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.content.trim()) {
      toast.error('Please enter post content');
      return;
    }

    if (!formData.scheduledTime) {
      toast.error('Please select a scheduled time');
      return;
    }

    if (new Date(formData.scheduledTime) <= new Date()) {
      toast.error('Scheduled time must be in the future');
      return;
    }

    setIsSubmitting(true);

    try {
      const postData = {
        ...formData,
        engagement: post?.engagement || { likes: 0, comments: 0, shares: 0 }
      };

      let success;
      if (post) {
        success = editPost(post.id, postData);
      } else {
        success = createPost(postData);
      }

      if (success) {
        onSave?.();
        onClose();
        setFormData({
          content: '',
          platform: 'instagram',
          scheduledTime: '',
          status: 'scheduled'
        });
      }
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Failed to save post');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  const selectedPlatform = platforms.find(p => p.id === formData.platform);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 safe-area-inset-top safe-area-inset-bottom">
      <div className="modal-responsive glass-card rounded-xl sm:rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white/30 to-white/10 rounded-lg flex items-center justify-center">
              <Type className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              {post ? 'Edit Post' : 'Create New Post'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="glass-button p-2 rounded-lg hover:bg-white/20 transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Platform Selection */}
          <div>
            <label className="block text-sm font-medium text-white/90 mb-3">
              Select Platform
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, platform: platform.id }))}
                  className={`platform-pill flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                    formData.platform === platform.id ? 'platform-pill-active' : ''
                  }`}
                >
                  <platform.icon 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    style={{ color: platform.color }} 
                  />
                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    {platform.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-white/90 mb-2">
              Post Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={6}
              className="auth-input w-full px-4 py-3 rounded-lg resize-none text-sm sm:text-base"
              placeholder={`Write your ${selectedPlatform?.name} post...`}
              required
              disabled={isSubmitting}
              maxLength={2200}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-white/60">
                {formData.content.length}/2200 characters
              </span>
              {selectedPlatform && (
                <div className="flex items-center space-x-1 text-xs text-white/60">
                  <selectedPlatform.icon className="w-3 h-3" style={{ color: selectedPlatform.color }} />
                  <span>{selectedPlatform.name}</span>
                </div>
              )}
            </div>
          </div>

          {/* Scheduled Time */}
          <div>
            <label htmlFor="scheduledTime" className="block text-sm font-medium text-white/90 mb-2">
              Schedule Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/50" />
              <input
                id="scheduledTime"
                name="scheduledTime"
                type="datetime-local"
                value={formData.scheduledTime}
                onChange={handleChange}
                className="auth-input w-full pl-10 sm:pl-12 pr-4 py-3 rounded-lg text-sm sm:text-base"
                required
                disabled={isSubmitting}
                min={new Date().toISOString().slice(0, 16)}
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-white/90 mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="auth-input w-full px-4 py-3 rounded-lg text-sm sm:text-base"
              disabled={isSubmitting}
            >
              <option value="draft" className="bg-gray-800">Draft</option>
              <option value="scheduled" className="bg-gray-800">Scheduled</option>
              <option value="published" className="bg-gray-800">Published</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4 border-t border-white/20">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 glass-button px-4 py-3 rounded-lg text-white/90 hover:bg-white/20 transition-all duration-200 text-sm sm:text-base"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 auth-button px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{post ? 'Updating...' : 'Creating...'}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{post ? 'Update Post' : 'Create Post'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;