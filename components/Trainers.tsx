'use client';

import { Mail, Instagram, Crown } from 'lucide-react';
import Link from 'next/link';

const trainers = [
  {
    name: 'Ansh Tripathi',
    specialty: 'Strength & Conditioning',
    certification: 'ACE, ISSN',
    experience: '4+ years',
    initials: 'AT',
    image: '🏋️'
  },
  {
    name: 'Ayushi Sharma',
    specialty: 'Weight Loss & Nutrition',
    certification: 'ISSA, CNSP',
    experience: '5+ years',
    initials: 'AS',
    image: '💪'
  },
  {
    name: 'Raghav Patel',
    specialty: 'CrossFit & HIIT',
    certification: 'Level 2 CrossFit',
    experience: '6+ years',
    initials: 'RP',
    image: '⚡'
  },
  {
    name: 'Prince Singh',
    specialty: 'Functional Fitness',
    certification: 'NASM, ACE',
    experience: '3+ years',
    initials: 'PS',
    image: '🔥'
  },
];

export function Trainers() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Matching Hero & Features */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 mb-6">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Elite Coaches
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Meet Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Expert Trainers
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expert guidance from certified professionals with years of experience
          </p>
        </div>

        {/* Trainers Grid - Same Style as Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50 cursor-pointer overflow-hidden"
            >
              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              {/* Avatar Section */}
              <div className="relative aspect-rectangle bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center border-b border-gray-200 dark:border-white/10 group-hover:from-primary/20 group-hover:to-purple-600/20 transition-all duration-500">
                {/* Animated Icon */}
                <div className="text-5xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                  {trainer.image}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                  {trainer.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {trainer.specialty}
                </p>

                {/* Trainer Details */}
                <div className="space-y-1.5 mb-4 pb-4 border-b border-gray-200 dark:border-white/10">
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Certified:</span> {trainer.certification}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Experience:</span> {trainer.experience}
                  </p>
                </div>

                {/* Contact Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg py-2 transition-all duration-300 text-sm font-medium hover:scale-105">
                    <Mail className="w-3.5 h-3.5" />
                    <span className="text-xs">Email</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 hover:bg-primary/20 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-300 rounded-lg py-2 transition-all duration-300 text-sm font-medium hover:scale-105">
                    <Instagram className="w-3.5 h-3.5" />
                    <span className="text-xs">Follow</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element - Matching Other Sections */}
        <div className="mt-9 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
          </div>
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-600 mt-6 uppercase font-medium">
            Book a Session • Limited Availability
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