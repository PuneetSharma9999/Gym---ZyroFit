'use client';

import { ArrowRight, Crown } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    title: 'Strength Training',
    description: 'Build muscle and increase your lifting power with progressive overload techniques.',
    duration: '12 weeks',
    icon: '🏋️',
    slug: 'strength-training'
  },
  {
    title: 'Weight Loss',
    description: 'Achieve your ideal body weight with cardio, strength, and nutrition guidance.',
    duration: '16 weeks',
    icon: '⚡',
    slug: 'weight-loss'
  },
  {
    title: 'Body Transformation',
    description: 'Complete body reshaping with personalized diet and workout plans.',
    duration: '12-16 weeks',
    icon: '✨',
    slug: 'body-transformation'
  },
  {
    title: 'Athletic Performance',
    description: 'Sport-specific training to enhance agility, speed, and endurance.',
    duration: '8-12 weeks',
    icon: '🏃',
    slug: 'athletic-performance'
  },
  {
    title: 'Functional Fitness',
    description: 'Improve mobility, balance, and everyday functional strength.',
    duration: '10 weeks',
    icon: '🧘',
    slug: 'functional-fitness'
  },
  {
    title: 'CrossFit & HIIT',
    description: 'High-intensity workouts combining strength, cardio, and agility.',
    duration: '8 weeks',
    icon: '🔥',
    slug: 'crossfit-hiit'
  },
];

export function Programs() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Matching Hero & Features */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 mb-6">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Our Programs
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Training
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized programs designed for every fitness goal and level
          </p>
        </div>

        {/* Programs Grid - Same Style as Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Link
              key={index}
              href={`/programs/${program.slug}`}
              className="group relative p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50 cursor-pointer overflow-hidden"
            >
              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="relative z-10">
                {/* Icon - Large Emoji with Scale Effect */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Duration Badge & Arrow */}
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200 dark:border-white/10">
                  <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-lg">
                    {program.duration}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Decorative Element - Matching Features */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
          </div>
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-600 mt-6 uppercase font-medium">
            Join Today • Limited Slots Available
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