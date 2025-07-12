import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Menu, X, LogIn, UserPlus } from 'lucide-react';

const PublicHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 safe-area-inset-top">
      <div className="px-4 sm:px-6 py-3 sm:py-4">
        <nav className="max-w-7xl mx-auto">
          <div className="glass-panel px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover-scale">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white/30 to-white/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-white font-bold text-lg sm:text-xl">SocialSched</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-pill px-3 xl:px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive(item.href) ? 'nav-pill-active' : ''
                    }`}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Auth Buttons - Desktop */}
              <div className="hidden md:flex items-center space-x-2 sm:space-x-3">
                <Link
                  to="/login"
                  className="nav-pill flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-full"
                >
                  <LogIn className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="glass-button flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-full bg-white/25"
                >
                  <UserPlus className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">Get Started</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden nav-pill p-2 rounded-full"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block nav-pill px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.href) ? 'nav-pill-active' : ''
                      }`}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="nav-pill flex items-center space-x-2 px-4 py-3 rounded-lg"
                    >
                      <LogIn className="w-4 h-4" />
                      <span className="text-sm font-medium">Sign In</span>
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="glass-button flex items-center space-x-2 px-4 py-3 rounded-lg bg-white/25"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span className="text-sm font-medium">Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;