import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  BarChart3, 
  Users, 
  Clock, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Instagram,
  Twitter,
  Facebook,
  Linkedin
} from 'lucide-react';

const Homepage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Schedule posts across multiple platforms with intelligent timing optimization for maximum engagement.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance with detailed insights, engagement metrics, and growth analytics.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with role-based permissions and approval workflows.'
    },
    {
      icon: Clock,
      title: 'Time Zone Support',
      description: 'Reach global audiences with automatic time zone detection and scheduling.'
    },
    {
      icon: Zap,
      title: 'Bulk Operations',
      description: 'Save time with bulk upload, editing, and scheduling capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced data protection.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'SocialSched has transformed our social media strategy. We\'ve seen a 300% increase in engagement since switching.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'The analytics features are incredible. I can finally prove ROI to our clients with detailed performance reports.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      company: 'Lifestyle Brand',
      content: 'As a solo creator, SocialSched helps me maintain consistent posting across all platforms. It\'s a game-changer!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: '#E4405F' },
    { name: 'Twitter', icon: Twitter, color: '#1DA1F2' },
    { name: 'Facebook', icon: Facebook, color: '#4267B2' },
    { name: 'LinkedIn', icon: Linkedin, color: '#0077B5' }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '2M+', label: 'Posts Scheduled' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="space-y-12 sm:space-y-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 safe-area-inset-top">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="responsive-text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Social Media Management
              <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="responsive-text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed px-4">
              Streamline your social media presence with intelligent scheduling, 
              powerful analytics, and seamless team collaboration. Grow your audience 
              and engagement across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto glass-button bg-white/25 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/features"
                className="w-full sm:w-auto nav-pill px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg"
              >
                View Features
              </Link>
            </div>
            <p className="text-white/60 text-xs sm:text-sm px-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-xl sm:rounded-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="responsive-text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="responsive-text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
            Connect All Your Social Platforms
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4 lg:gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="glass-panel p-3 sm:p-4 rounded-lg sm:rounded-xl hover:glass-card-hover transition-all duration-300"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <platform.icon 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    style={{ color: platform.color }} 
                  />
                  <span className="text-white font-medium text-sm sm:text-base">{platform.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="responsive-text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="responsive-text-lg sm:text-xl text-white/70 max-w-2xl mx-auto px-4">
              Powerful features designed to help you create, schedule, and analyze 
              your social media content with ease.
            </p>
          </div>
          
          <div className="responsive-grid-auto gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:glass-card-hover transition-all duration-300 card-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="responsive-text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="responsive-text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Loved by Marketing Teams Worldwide
            </h2>
            <p className="responsive-text-lg sm:text-xl text-white/70">
              See what our customers have to say about SocialSched
            </p>
          </div>
          
          <div className="responsive-grid-auto gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:glass-card-hover transition-all duration-300 card-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-medium text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-white/60 text-xs sm:text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 safe-area-inset-bottom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl">
            <h2 className="responsive-text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="responsive-text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 px-4">
              Join thousands of businesses already using SocialSched to grow their online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6 px-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto glass-button bg-white/25 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto nav-pill px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg"
              >
                Talk to Sales
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/60 text-xs sm:text-sm">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;