import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Calendar, BarChart3, Settings, Bell, User, Plus, Instagram, Twitter, Facebook, Linkedin, Eye, Clock, TrendingUp, Heart, MessageCircle, Share2, Filter, LogOut } from 'lucide-react';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import ProtectedRoute from './components/ProtectedRoute';
import LogoutModal from './components/LogoutModal';
import PostModal from './components/PostModal';
import PublicLayout from './components/PublicLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SettingsPage from './pages/Settings';
import Homepage from './pages/public/Homepage';
import AboutUs from './pages/public/AboutUs';
import Contact from './pages/public/Contact';
import Features from './pages/public/Features';
import Pricing from './pages/public/Pricing';
import FAQ from './pages/public/FAQ';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  
  const { user, logout } = useAuth();
  const { posts, getPostsByPlatform, getAnalytics, refreshPosts } = useLocalStorage();

  const platforms = [
    { id: 'all', name: 'All Platforms', icon: null, color: '#FFFFFF' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: '#E4405F' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: '#1DA1F2' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: '#4267B2' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: '#0077B5' }
  ];

  const analytics = getAnalytics();
  const analyticsData = [
    { metric: 'Total Reach', value: analytics.totalReach, change: '+12%', trend: 'up' },
    { metric: 'Engagement Rate', value: analytics.engagementRate, change: '+0.8%', trend: 'up' },
    { metric: 'Followers', value: analytics.followers, change: '+156', trend: 'up' },
    { metric: 'Scheduled Posts', value: analytics.scheduledPosts, change: '+3', trend: 'up' }
  ];

  const filteredPosts = getPostsByPlatform(selectedPlatform);

  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowPostModal(true);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setShowPostModal(true);
  };

  const handlePostSaved = () => {
    refreshPosts();
  };

  const Navigation = () => (
    <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4 sm:px-6">
      <div className="glass-panel px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-white/30 to-white/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-white font-semibold text-sm sm:text-lg">SocialSched</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'schedule', label: 'Schedule', icon: Calendar },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`nav-pill flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === id ? 'nav-pill-active' : ''
                }`}
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center space-x-1">
            {[
              { id: 'dashboard', icon: BarChart3 },
              { id: 'schedule', icon: Calendar },
              { id: 'analytics', icon: TrendingUp }
            ].map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`nav-pill p-2 rounded-full transition-all duration-300 ${
                  activeTab === id ? 'nav-pill-active' : ''
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button className="nav-pill p-2 rounded-full">
              <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`nav-pill p-2 rounded-full ${activeTab === 'settings' ? 'nav-pill-active' : ''}`}
            >
              <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 glass-panel rounded-full">
              <User className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
              <span className="text-xs sm:text-sm text-white/90 hidden sm:inline">{user?.username}</span>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="nav-pill p-1 rounded-full hover:bg-red-500/20"
              >
                <LogOut className="w-2 h-2 sm:w-3 sm:h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  const PlatformSwitcher = () => (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-0">
      {platforms.map(({ id, name, icon: Icon, color }) => (
        <button
          key={id}
          onClick={() => setSelectedPlatform(id)}
          className={`platform-pill flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
            selectedPlatform === id ? 'platform-pill-active' : ''
          }`}
        >
          {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4" style={{ color }} />}
          <span className="text-xs sm:text-sm font-medium text-white/90">{name}</span>
        </button>
      ))}
    </div>
  );

  const AnalyticsCard = ({ metric, value, change, trend }) => (
    <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:glass-card-hover transition-all duration-300 card-float">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-white/90 text-xs sm:text-sm font-medium">{metric}</h3>
        <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs font-medium">{change}</span>
        </div>
      </div>
      <div className="responsive-text-lg sm:text-2xl font-bold text-white mb-2">{value}</div>
      <div className="w-full bg-white/10 rounded-full h-1 sm:h-2">
        <div 
          className="bg-gradient-to-r from-white/30 to-white/60 h-1 sm:h-2 rounded-full transition-all duration-1000"
          style={{ width: `${Math.random() * 100}%` }}
        />
      </div>
    </div>
  );

  const PostCard = ({ post }) => {
    const platform = platforms.find(p => p.id === post.platform);
    const Icon = platform?.icon;
    
    return (
      <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:glass-card-hover transition-all duration-300 card-float">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {Icon && (
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: platform.color }} />
              </div>
            )}
            <span className="text-white/90 text-xs sm:text-sm font-medium">{platform?.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              post.status === 'published' ? 'bg-green-500/20 text-green-400' :
              post.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {post.status}
            </span>
            <button 
              onClick={() => handleEditPost(post)}
              className="glass-button p-1 rounded-lg"
            >
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
            </button>
          </div>
        </div>
        
        <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {post.content}
        </p>
        
        <div className="flex items-center justify-between text-xs text-white/60 mb-3 sm:mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{new Date(post.scheduledTime).toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-4 text-white/60">
          <div className="flex items-center space-x-1">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{post.engagement.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{post.engagement.comments}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{post.engagement.shares}</span>
          </div>
        </div>
      </div>
    );
  };

  const CalendarView = () => (
    <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl card-float">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <h2 className="responsive-text-lg sm:text-xl font-semibold text-white">Content Calendar</h2>
        <div className="flex items-center space-x-2">
          <button className="glass-button flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm">
            <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Filter</span>
          </button>
          <button 
            onClick={handleCreatePost}
            className="glass-button flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
          >
            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Add Post</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 sm:gap-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-white/60 text-xs sm:text-sm font-medium mb-2">
            {day}
          </div>
        ))}
        
        {Array.from({ length: 35 }, (_, i) => (
          <div key={i} className="aspect-square glass-panel rounded-lg p-1 sm:p-2 hover:glass-card-hover transition-all duration-300">
            <div className="text-white/70 text-xs sm:text-sm mb-1">{((i % 31) + 1)}</div>
            {Math.random() > 0.7 && (
              <div className="w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-white/40 to-white/20 rounded-full mb-1" />
            )}
            {Math.random() > 0.8 && (
              <div className="w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400/40 to-blue-400/20 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6 sm:space-y-8">
            <div className="responsive-grid-auto gap-3 sm:gap-6">
              {analyticsData.map((item, index) => (
                <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <AnalyticsCard {...item} />
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="responsive-text-lg sm:text-xl font-semibold text-white">Recent Posts</h2>
                  <button 
                    onClick={handleCreatePost}
                    className="glass-button flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
                  >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>New Post</span>
                  </button>
                </div>
                {filteredPosts.length > 0 ? (
                  filteredPosts.slice(0, 3).map((post, index) => (
                    <div key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
                      <PostCard post={post} />
                    </div>
                  ))
                ) : (
                  <div className="glass-card p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
                    <Calendar className="w-8 h-8 sm:w-12 sm:h-12 text-white/30 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-white/70 text-base sm:text-lg mb-2">No posts yet</h3>
                    <p className="text-white/50 text-xs sm:text-sm mb-4">Create your first post to get started</p>
                    <button 
                      onClick={handleCreatePost}
                      className="glass-button px-4 py-2 rounded-lg text-sm"
                    >
                      Create Post
                    </button>
                  </div>
                )}
              </div>
              
              <div>
                <h2 className="responsive-text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {[
                    { title: 'Schedule Post', description: 'Create and schedule new content', icon: Calendar, action: handleCreatePost },
                    { title: 'View Analytics', description: 'Check your performance metrics', icon: BarChart3, action: () => setActiveTab('analytics') },
                    { title: 'Manage Settings', description: 'Update your account preferences', icon: Settings, action: () => setActiveTab('settings') }
                  ].map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="glass-card p-3 sm:p-4 rounded-lg sm:rounded-xl hover:glass-card-hover transition-all duration-300 card-float cursor-pointer text-left"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                          <action.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium text-sm sm:text-base">{action.title}</h3>
                          <p className="text-white/60 text-xs sm:text-sm">{action.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'schedule':
        return (
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
              <h1 className="responsive-text-2xl sm:text-3xl font-bold text-white">Content Scheduler</h1>
              <button 
                onClick={handleCreatePost}
                className="glass-button flex items-center space-x-1 sm:space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">New Post</span>
              </button>
            </div>
            
            <CalendarView />
            
            {filteredPosts.length > 0 && (
              <div>
                <h2 className="responsive-text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Scheduled Posts</h2>
                <div className="responsive-grid-auto gap-4 sm:gap-6">
                  {filteredPosts.map((post, index) => (
                    <div key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-6 sm:space-y-8">
            <h1 className="responsive-text-2xl sm:text-3xl font-bold text-white">Analytics Overview</h1>
            
            <div className="responsive-grid-auto gap-3 sm:gap-6">
              {analyticsData.map((item, index) => (
                <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <AnalyticsCard {...item} />
                </div>
              ))}
            </div>
            
            <div className="glass-card p-6 sm:p-8 rounded-xl sm:rounded-2xl card-float">
              <h2 className="responsive-text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Performance Trends</h2>
              <div className="h-48 sm:h-64 bg-gradient-to-br from-white/5 to-white/2 rounded-xl flex items-center justify-center">
                <div className="text-white/60 text-center">
                  <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-30" />
                  <p className="text-sm sm:text-base">Interactive charts coming soon</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return <SettingsPage />;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-auth relative overflow-hidden safe-area-inset-top safe-area-inset-bottom">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl" />
        <div className="floating-orb absolute top-1/2 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-2xl" />
        <div className="floating-orb absolute bottom-1/4 left-1/3 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-br from-white/15 to-white/5 rounded-full blur-lg" />
      </div>
      
      <Navigation />
      
      <div className="pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {activeTab !== 'settings' && <PlatformSwitcher />}
          {renderContent()}
        </div>
      </div>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />

      <PostModal
        isOpen={showPostModal}
        onClose={() => setShowPostModal(false)}
        post={editingPost}
        onSave={handlePostSaved}
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <PublicLayout 
                title="SocialSched - Social Media Management Made Simple"
                description="Streamline your social media presence with intelligent scheduling, analytics, and content management tools designed for modern businesses."
              >
                <Homepage />
              </PublicLayout>
            } />
            <Route path="/about" element={
              <PublicLayout 
                title="About Us - SocialSched"
                description="Learn about SocialSched's mission to democratize social media success and meet the team behind the platform."
              >
                <AboutUs />
              </PublicLayout>
            } />
            <Route path="/features" element={
              <PublicLayout 
                title="Features - SocialSched"
                description="Discover powerful features for social media scheduling, analytics, team collaboration, and content management."
              >
                <Features />
              </PublicLayout>
            } />
            <Route path="/pricing" element={
              <PublicLayout 
                title="Pricing - SocialSched"
                description="Choose the perfect plan for your social media management needs. Start with a 14-day free trial."
              >
                <Pricing />
              </PublicLayout>
            } />
            <Route path="/contact" element={
              <PublicLayout 
                title="Contact Us - SocialSched"
                description="Get in touch with our support team. We're here to help you succeed with your social media management."
              >
                <Contact />
              </PublicLayout>
            } />
            <Route path="/faq" element={
              <PublicLayout 
                title="FAQ - SocialSched"
                description="Find answers to common questions about SocialSched features, billing, integrations, and technical support."
              >
                <FAQ />
              </PublicLayout>
            } />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Dashboard Routes */}
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            
            {/* Redirect old dashboard routes */}
            <Route path="/app" element={<Navigate to="/dashboard" replace />} />
            <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
          </Routes>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                borderRadius: '12px',
              },
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;