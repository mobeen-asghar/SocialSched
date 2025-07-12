import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const PublicFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'API', href: '/api' },
      { name: 'Integrations', href: '/integrations' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' }
    ],
    support: [
      { name: 'Help Center', href: '/faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Status', href: '/status' },
      { name: 'Documentation', href: '/docs' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/socialsched' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/socialsched' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/socialsched' }
  ];

  return (
    <footer className="relative mt-12 sm:mt-20 safe-area-inset-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="glass-card p-6 sm:p-8 rounded-xl sm:rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white/30 to-white/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-white font-bold text-lg sm:text-xl">SocialSched</span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
                Streamline your social media presence with intelligent scheduling, 
                analytics, and content management tools designed for modern businesses.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-pill p-2 rounded-lg hover:scale-110 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div className="min-w-0">
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="min-w-0">
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="min-w-0">
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="min-w-0">
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 text-white/70">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm truncate">hello@socialsched.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} SocialSched. All rights reserved.
            </p>
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-right">
              Made with ❤️ for social media professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;