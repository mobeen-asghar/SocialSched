import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  ArrowRight, 
  Star, 
  Users, 
  Calendar, 
  BarChart3,
  Zap,
  Shield,
  Headphones
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small businesses',
      monthlyPrice: 19,
      yearlyPrice: 15,
      features: [
        '5 social accounts',
        '100 scheduled posts/month',
        'Basic analytics',
        'Content calendar',
        'Mobile app access',
        'Email support'
      ],
      limitations: [
        'No team collaboration',
        'No advanced analytics',
        'No API access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and agencies',
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        '25 social accounts',
        'Unlimited scheduled posts',
        'Advanced analytics',
        'Team collaboration (5 users)',
        'Content approval workflow',
        'Priority support',
        'Custom branding',
        'Bulk scheduling'
      ],
      limitations: [
        'Limited API calls',
        'No white-label options'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      monthlyPrice: 149,
      yearlyPrice: 119,
      features: [
        'Unlimited social accounts',
        'Unlimited scheduled posts',
        'Advanced analytics & reporting',
        'Unlimited team members',
        'Advanced approval workflows',
        '24/7 phone support',
        'White-label options',
        'API access',
        'Custom integrations',
        'Dedicated account manager'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Additional Team Member',
      price: 10,
      description: 'Add more users to your Professional plan'
    },
    {
      name: 'Extra Social Accounts',
      price: 5,
      description: 'Connect more social media accounts'
    },
    {
      name: 'Advanced Reporting',
      price: 25,
      description: 'Custom reports and data exports'
    },
    {
      name: 'Priority Support',
      price: 15,
      description: '24/7 priority customer support'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      plan: 'Professional',
      content: 'SocialSched has saved us 15+ hours per week. The ROI is incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Brand',
      plan: 'Enterprise',
      content: 'The analytics features helped us increase engagement by 300%.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 30 days after cancellation. You can export it anytime.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees or hidden costs. You only pay the monthly/yearly subscription.'
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice * 12;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <div className="space-y-20 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-white/80 leading-relaxed mb-8">
          Choose the perfect plan for your social media management needs. 
          Start with a 14-day free trial, no credit card required.
        </p>
        
        {/* Billing Toggle */}
        <div className="glass-panel p-2 rounded-xl inline-flex items-center space-x-1 mb-12">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              billingCycle === 'monthly' 
                ? 'bg-white/25 text-white' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 relative ${
              billingCycle === 'yearly' 
                ? 'bg-white/25 text-white' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Yearly
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl relative transition-all duration-300 card-float ${
                plan.popular ? 'ring-2 ring-white/30 scale-105' : 'hover:glass-card-hover'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-white/30 to-white/20 px-4 py-2 rounded-full">
                    <span className="text-white font-medium text-sm flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 mb-6">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    ${getPrice(plan)}
                  </span>
                  <span className="text-white/60 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'month'}
                  </span>
                </div>
                
                {billingCycle === 'yearly' && (
                  <p className="text-green-400 text-sm font-medium">
                    Save {getSavings(plan)}% with yearly billing
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-white/60">{limitation}</span>
                  </div>
                ))}
              </div>

              <Link
                to={plan.cta === 'Contact Sales' ? '/contact' : '/signup'}
                className={`w-full py-3 rounded-xl font-semibold text-center block transition-all duration-300 ${
                  plan.popular
                    ? 'glass-button bg-white/25 hover:scale-105'
                    : 'nav-pill hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Add-ons & Extras</h2>
          <p className="text-xl text-white/70">
            Customize your plan with additional features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addon, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:glass-card-hover transition-all duration-300"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {addon.name}
                </h3>
                <p className="text-2xl font-bold text-white mb-3">
                  ${addon.price}<span className="text-sm text-white/60">/month</span>
                </p>
                <p className="text-white/70 text-sm">
                  {addon.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Compare Plans</h2>
          <p className="text-xl text-white/70">
            See what's included in each plan
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 text-white font-semibold">Features</th>
                <th className="text-center py-4 px-4 text-white font-semibold">Starter</th>
                <th className="text-center py-4 px-4 text-white font-semibold">Professional</th>
                <th className="text-center py-4 px-4 text-white font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ['Social Accounts', '5', '25', 'Unlimited'],
                ['Scheduled Posts', '100/month', 'Unlimited', 'Unlimited'],
                ['Team Members', '1', '5', 'Unlimited'],
                ['Analytics', 'Basic', 'Advanced', 'Advanced'],
                ['API Access', '✗', 'Limited', 'Full'],
                ['Priority Support', '✗', '✓', '✓'],
                ['White Label', '✗', '✗', '✓'],
                ['Custom Integrations', '✗', '✗', '✓']
              ].map(([feature, starter, pro, enterprise], index) => (
                <tr key={index} className="border-b border-white/10">
                  <td className="py-4 px-4 text-white/80">{feature}</td>
                  <td className="py-4 px-4 text-center text-white/70">{starter}</td>
                  <td className="py-4 px-4 text-center text-white/70">{pro}</td>
                  <td className="py-4 px-4 text-center text-white/70">{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:glass-card-hover transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.company}</div>
                </div>
                <div className="text-white/60 text-sm">
                  {testimonial.plan} Plan
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of businesses already using SocialSched to grow their social media presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="glass-button bg-white/25 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="nav-pill px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-6">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;