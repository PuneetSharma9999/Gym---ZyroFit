'use client';

import { Dumbbell, Clock, Crown, Sparkles, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Elite Equipment',
    description: 'Latest gym equipment and machinery for all fitness levels'
  },
  {
    icon: Heart,
    title: 'Expert Trainers',
    description: 'Certified professionals with years of experience'
  },
  {
    icon: Crown,
    title: 'Premium Experience',
    description: 'Luxurious environment with world-class amenities'
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train anytime with smart keycard entry system'
  },
  {
    icon: Zap,
    title: 'Personalized Plans',
    description: 'Custom workout and nutrition plans tailored to you'
  },
  {
    icon: Sparkles,
    title: 'Proven Results',
    description: 'Transform your body with our science-based approach'
  },
];

export function Features() {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Premium & Clean */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 mb-6">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              The ZYROFIT
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals and transform your body
          </p>
        </div>

        {/* Features Grid - Smaller Premium Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50 cursor-pointer overflow-hidden"
              >
                {/* Animated Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div className="relative z-10">
                  {/* Icon Container - Smaller */}
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Title - Smaller */}
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description - Compact */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
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