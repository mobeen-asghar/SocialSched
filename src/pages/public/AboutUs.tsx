import React from 'react';
import { Target, Users, Award, Globe, Heart, Lightbulb } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe in empowering businesses to build authentic connections with their audiences through strategic social media management.'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Every feature we build starts with understanding our customers\' needs and challenges in the ever-evolving social media landscape.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product development to customer support and user experience.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our platform serves businesses worldwide, helping them connect with diverse audiences across different cultures and time zones.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about social media and its power to transform businesses and create meaningful connections.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to stay ahead of social media trends and provide cutting-edge solutions for our users.'
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Marketing at TechCorp with 10+ years in social media strategy.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Sarah Kim',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in scalable systems and machine learning.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Product',
      bio: 'Product leader with experience at Facebook and Twitter, passionate about user experience.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Lisa Chen',
      role: 'Head of Design',
      bio: 'Award-winning designer focused on creating intuitive and beautiful user interfaces.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const milestones = [
    { year: '2020', event: 'SocialSched founded with a vision to simplify social media management' },
    { year: '2021', event: 'Reached 1,000 active users and launched team collaboration features' },
    { year: '2022', event: 'Expanded to support 10+ social platforms and raised Series A funding' },
    { year: '2023', event: 'Launched AI-powered content optimization and reached 25,000 users' },
    { year: '2024', event: 'Introduced advanced analytics and achieved 50,000+ active users' }
  ];

  return (
    <div className="space-y-20 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About SocialSched
        </h1>
        <p className="text-xl text-white/80 leading-relaxed">
          We're on a mission to democratize social media success by providing powerful, 
          intuitive tools that help businesses of all sizes build meaningful connections 
          with their audiences.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  SocialSched was born out of frustration with existing social media management tools 
                  that were either too complex for small businesses or too limited for growing companies. 
                  Our founders, Alex and Sarah, experienced this pain firsthand while managing social 
                  media for their previous companies.
                </p>
                <p>
                  In 2020, they decided to build the solution they wished existed: a platform that 
                  combines powerful features with intuitive design, making professional social media 
                  management accessible to everyone.
                </p>
                <p>
                  Today, SocialSched serves over 50,000 users worldwide, from solo entrepreneurs to 
                  Fortune 500 companies, helping them save time, increase engagement, and grow their 
                  online presence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To empower businesses and creators with intelligent social media management tools 
              that save time, increase engagement, and drive meaningful growth across all platforms.
            </p>
          </div>
          <div className="glass-card p-8 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To become the world's most trusted social media management platform, enabling 
              authentic connections between brands and their communities at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            These principles guide everything we do, from product development to customer relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:glass-card-hover transition-all duration-300 card-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-white/70">
            The passionate people behind SocialSched
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:glass-card-hover transition-all duration-300 text-center card-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-white/60 text-sm mb-3">
                {member.role}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-white/70">
            Key milestones in our company's growth
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{milestone.year}</span>
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-white/90 leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Ready to transform your social media presence? Join thousands of businesses 
            already using SocialSched to grow their online communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="glass-button bg-white/25 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              Start Your Free Trial
            </a>
            <a
              href="/contact"
              className="nav-pill px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;