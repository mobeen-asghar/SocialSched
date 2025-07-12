import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'getting-started', name: 'Getting Started', icon: Book },
    { id: 'billing', name: 'Billing & Plans', icon: MessageCircle },
    { id: 'features', name: 'Features', icon: MessageCircle },
    { id: 'technical', name: 'Technical Support', icon: MessageCircle },
    { id: 'integrations', name: 'Integrations', icon: MessageCircle }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with SocialSched?',
      answer: 'Getting started is easy! Sign up for a free 14-day trial, connect your social media accounts, and start scheduling your first posts. Our onboarding guide will walk you through each step.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'Which social media platforms does SocialSched support?',
      answer: 'We support all major social media platforms including Instagram, Twitter, Facebook, LinkedIn, YouTube, TikTok, and Pinterest. We\'re constantly adding support for new platforms.'
    },
    {
      id: 3,
      category: 'billing',
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      id: 4,
      category: 'billing',
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund.'
    },
    {
      id: 5,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers.'
    },
    {
      id: 6,
      category: 'features',
      question: 'How many posts can I schedule in advance?',
      answer: 'This depends on your plan. Starter plans include 100 posts per month, while Professional and Enterprise plans offer unlimited scheduling.'
    },
    {
      id: 7,
      category: 'features',
      question: 'Can I collaborate with my team?',
      answer: 'Yes! Professional and Enterprise plans include team collaboration features with role-based permissions, approval workflows, and activity tracking.'
    },
    {
      id: 8,
      category: 'features',
      question: 'Does SocialSched provide analytics?',
      answer: 'Absolutely! We provide comprehensive analytics including engagement metrics, audience insights, growth tracking, and custom reporting capabilities.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'Is my data secure with SocialSched?',
      answer: 'Yes, we take security seriously. We use bank-level encryption, are SOC 2 compliant, and follow industry best practices to protect your data.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'What happens if SocialSched is down?',
      answer: 'We maintain 99.9% uptime. In the rare event of downtime, your scheduled posts are queued and will be published once service is restored.'
    },
    {
      id: 11,
      category: 'technical',
      question: 'Can I export my data?',
      answer: 'Yes, you can export all your data including posts, analytics, and account information at any time from your dashboard.'
    },
    {
      id: 12,
      category: 'integrations',
      question: 'Does SocialSched have an API?',
      answer: 'Yes, we offer a comprehensive REST API for Professional and Enterprise customers. Full documentation is available in our developer portal.'
    },
    {
      id: 13,
      category: 'integrations',
      question: 'Can I integrate with other tools?',
      answer: 'We integrate with popular tools like Canva, Google Drive, Dropbox, Slack, and many others. Check our integrations page for the full list.'
    },
    {
      id: 14,
      category: 'integrations',
      question: 'Do you support Zapier?',
      answer: 'Yes! Our Zapier integration allows you to connect SocialSched with over 3,000 apps to automate your workflows.'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete walkthrough for new users',
      link: '/docs/getting-started',
      icon: Book
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials',
      icon: MessageCircle
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers',
      link: '/api-docs',
      icon: Book
    },
    {
      title: 'Best Practices',
      description: 'Tips for social media success',
      link: '/best-practices',
      icon: Book
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: '24/7',
      icon: MessageCircle,
      action: 'Start Chat'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 4 hours',
      icon: Mail,
      action: 'Send Email'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri, 9AM-6PM PST',
      icon: Phone,
      action: 'Call Now'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-20 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How Can We Help?
        </h1>
        <p className="text-xl text-white/80 leading-relaxed mb-8">
          Find answers to common questions about SocialSched, or get in touch with our support team.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="auth-input w-full pl-12 pr-4 py-4 rounded-xl text-lg"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`platform-pill flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id ? 'platform-pill-active' : ''
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ List */}
      <section className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:glass-card-hover"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-white/70 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/70 flex-shrink-0" />
                  )}
                </button>
                
                {expandedItems.includes(faq.id) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="glass-card p-12 rounded-2xl text-center">
              <HelpCircle className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No results found
              </h3>
              <p className="text-white/70">
                Try adjusting your search terms or browse different categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Support Channels */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-white/70">
            Our support team is here to help you succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:glass-card-hover transition-all duration-300 text-center card-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <channel.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {channel.title}
              </h3>
              <p className="text-white/70 mb-4">
                {channel.description}
              </p>
              <p className="text-white/60 text-sm mb-6">
                {channel.availability}
              </p>
              <button className="glass-button px-6 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-300">
                {channel.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Helpful Resources
          </h2>
          <p className="text-xl text-white/70">
            Guides, tutorials, and documentation to help you get the most out of SocialSched
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="glass-card p-6 rounded-2xl hover:glass-card-hover transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <resource.icon className="w-8 h-8 text-white/80" />
                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-white/70 text-sm">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our support team is always ready to help. Get in touch and we'll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="glass-button bg-white/25 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@socialsched.com"
              className="nav-pill px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;