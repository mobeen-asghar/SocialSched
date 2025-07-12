import React from 'react';
import { Helmet } from 'react-helmet-async';
import PublicHeader from './PublicHeader';
import PublicFooter from './PublicFooter';

interface PublicLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ 
  children, 
  title = 'SocialSched - Social Media Management Made Simple',
  description = 'Streamline your social media presence with intelligent scheduling, analytics, and content management tools designed for modern businesses.',
  keywords = 'social media, scheduling, analytics, content management, social media tools'
}) => {
  return (
    <div className="min-h-screen bg-gradient-auth relative overflow-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl" />
        <div className="floating-orb absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-2xl" />
        <div className="floating-orb absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-white/15 to-white/5 rounded-full blur-lg" />
        <div className="floating-orb absolute top-3/4 right-1/3 w-72 h-72 bg-gradient-to-br from-white/8 to-white/3 rounded-full blur-2xl" />
      </div>

      <PublicHeader />
      
      <main className="relative z-10 pt-20">
        {children}
      </main>
      
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;