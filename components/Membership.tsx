'use client';

import { Button } from '@/components/ui/button';
import { Check, Crown, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    price: '₹1,499',
    period: '/month',
    description: 'Perfect for beginners',
    icon: '🌱',
    features: [
      'Gym access during peak hours',
      'Basic equipment access',
      'Locker facility',
      'Bathroom & shower',
    ],
    highlighted: false
  },
  {
    name: 'Premium',
    price: '₹2,999',
    period: '/month',
    description: 'Most popular choice',
    icon: '👑',
    features: [
      'Gym access 24/7',
      'All equipment access',
      'Personal trainer sessions (4/month)',
      'Nutrition consultation',
      'Locker & towel facility',
      'Priority class booking',
      'Free guest passes (2/month)',
    ],
    highlighted: true
  },
  {
    name: 'Elite',
    price: '₹4,999',
    period: '/month',
    description: 'Complete transformation',
    icon: '⚡',
    features: [
      'Priority gym access',
      'Unlimited trainer sessions',
      'Custom meal plans',
      'Body composition analysis',
      'Premium locker facility',
      'Guest access (unlimited)',
      'Monthly progress report',
      'Recovery equipment access',
    ],
    highlighted: false
  },
];

export function Membership() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Matching Other Sections */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 mb-6">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Investment in Yourself
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Membership
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                plan.highlighted ? 'lg:-mt-4 lg:mb-4' : ''
              }`}
            >
              {/* Animated Border Gradient for Highlighted Plan */}
              {plan.highlighted && (
                <div className="absolute -inset-px bg-gradient-to-r from-black to-black-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl group-hover:blur-2xl" />
              )}
              
              {/* Main Card */}
              <div className={`relative h-full bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                plan.highlighted
                  ? 'border-primary/50 shadow-xl ring-2 ring-primary/30'
                  : 'border-gray-200 dark:border-white/10 hover:border-primary/50'
              }`}>
                
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {plan.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-200 dark:border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-500 text-sm">{plan.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/#contact">
                    <Button
                      className={`w-full mb-8 font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg shadow-primary/25'
                          : 'bg-gray-100 dark:bg-white/10 hover:bg-primary/20 dark:hover:bg-primary/20 text-gray-800 dark:text-white'
                      }`}
                    >
                      Get Started
                      <Zap className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/feature">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Annual Discount Note - Premium Style */}
        <div className="mt-16 p-8 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-gray-800 dark:text-white font-semibold">Save More with Annual Plans</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Get <span className="text-primary font-bold">20% discount</span> on annual memberships. Flexible payment options available.
            </p>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
          </div>
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-600 mt-6 uppercase font-medium">
            Flexible Payment Options Available
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}