import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BarChart3, Users, Clock, Zap, Shield, ArrowRight, CheckCircle, Instagram, Twitter, Facebook, Linkedin, Youtube, BookText as TikTok, Smartphone, Globe, Bot, Image as ImageIcon } from 'lucide-react';

const Features: React.FC = () => {
  const mainFeatures = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Schedule posts across multiple platforms with AI-powered optimal timing suggestions.',
      features: [
        'Bulk scheduling for hundreds of posts',
        'Best time recommendations',
        'Time zone optimization',
        'Content calendar view',
        'Recurring post templates'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your social media performance with comprehensive reporting.',
      features: [
        'Real-time engagement metrics',
        'Audience growth tracking',
        'Competitor analysis',
        'Custom report generation',
        'ROI measurement tools'
      ]
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team using role-based permissions and approval workflows.',
      features: [
        'Role-based access control',
        'Content approval workflows',
        'Team activity tracking',
        'Comment and feedback system',
        'Client collaboration tools'
      ]
    },
    {
      icon: Bot,
      title: 'AI Content Assistant',
      description: 'Leverage AI to create engaging content and optimize your social media strategy.',
      features: [
        'AI-powered content suggestions',
        'Hashtag recommendations',
        'Caption optimization',
        'Image enhancement',
        'Trend analysis'
      ]
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: '#E4405F' },
    { name: 'Twitter', icon: Twitter, color: '#1DA1F2' },
    { name: 'Facebook', icon: Facebook, color: '#4267B2' },
    { name: 'LinkedIn', icon: Linkedin, color: '#0077B5' },
    { name: 'YouTube', icon: Youtube, color: '#FF0000' },
    { name: 'TikTok', icon: TikTok, color: '#000000' }
  ];

  const additionalFeatures = [
    {
      icon: ImageIcon,
      title: 'Visual Content Studio',
      description: 'Create stunning visuals with built-in design tools and templates.'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Manage content in multiple languages for global audiences.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Manage your social media on-the-go with native mobile apps.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and data encryption.'
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Connect with your favorite tools using our robust API.'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Never miss important mentions or messages with real-time alerts.'
    }
  ];

  return (
    <div className="space-y-20 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Powerful Features for
          <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Social Media Success
          </span>
        </h1>
        <p className="text-xl text-white/80 leading-relaxed mb-8">
          Everything you need to create, schedule, analyze, and optimize your social media 
          presence across all major platforms.
        </p>
        <Link
          to="/signup"
          className="glass-button bg-white/25 px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center space-x-2 hover:scale-105 transition-all duration-300"
        >
          <span>Start Free Trial</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Supported Platforms */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Connect All Your Social Platforms
          </h2>
          <p className="text-white/70">
            Manage all your social media accounts from one unified dashboard
          </p>
        </div>
        <div className="glass-card p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-all duration-300">
                  <platform.icon 
                    className="w-8 h-8" 
                    style={{ color: platform.color }} 
                  />
                </div>
                <span className="text-white/80 text-sm font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Core Features
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive tools designed to streamline your social media workflow
          </p>
        </div>
        
        <div className="space-y-16">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="glass-card p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <img
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '267350' : 
                      index === 1 ? '590020' : 
                      index === 2 ? '3184360' : '3861958'
                    }/pexels-photo-${
                      index === 0 ? '267350' : 
                      index === 1 ? '590020' : 
                      index === 2 ? '3184360' : '3861958'
                    }.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`}
                    alt={feature.title}
                    className="rounded-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Additional Features
          </h2>
          <p className="text-xl text-white/70">
            Even more tools to enhance your social media management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:glass-card-hover transition-all duration-300 card-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose SocialSched?
          </h2>
          <p className="text-xl text-white/70">
            See how we compare to other social media management tools
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                <th className="text-center py-4 px-4 text-white font-semibold">SocialSched</th>
                <th className="text-center py-4 px-4 text-white/60 font-semibold">Competitor A</th>
                <th className="text-center py-4 px-4 text-white/60 font-semibold">Competitor B</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ['Unlimited Posts', true, false, true],
                ['AI Content Assistant', true, false, false],
                ['Advanced Analytics', true, true, false],
                ['Team Collaboration', true, true, true],
                ['Mobile Apps', true, true, false],
                ['24/7 Support', true, false, true],
                ['API Access', true, false, true],
                ['White Label', true, false, false]
              ].map(([feature, us, compA, compB], index) => (
                <tr key={index} className="border-b border-white/10">
                  <td className="py-4 px-4 text-white/80">{feature}</td>
                  <td className="py-4 px-4 text-center">
                    {us ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-red-400 rounded-full mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {compA ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-red-400 rounded-full mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {compB ? (
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-red-400 rounded-full mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start your free trial today and see how SocialSched can transform 
            your social media management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="glass-button bg-white/25 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="nav-pill px-8 py-4 rounded-xl font-semibold text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;