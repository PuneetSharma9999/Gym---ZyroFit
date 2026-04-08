'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Dumbbell, 
  Flame, 
  Heart, 
  Star,
  Play,
  Crown,
  Sparkles,
} from 'lucide-react';

export function Hero() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const testimonials = [
    { name: "Ayushi Sharma", transformation: "Lost 15kg in 4 months", rating: 5, achievement: "Body Transformation Champion" },
    { name: "Ansh Tripathi", transformation: "Gained 8kg muscle mass", rating: 5, achievement: "Most Improved Athlete" },
    { name: "Priya S.", transformation: "Body fat 28% → 12%", rating: 5, achievement: "Elite Performer" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden transition-colors duration-300 bg-white dark:bg-black">
      
      {/* Cinematic Background - Light & Dark Mode Support */}
      <div className="absolute inset-0">
        {/* Light Mode Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:opacity-0 transition-opacity duration-300" />
        
        {/* Dark Mode Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black opacity-0 dark:opacity-100 transition-opacity duration-300" />
        
        {/* Light Mode Gradient Orbs */}
        <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-[120px] animate-pulse-slow dark:opacity-0 transition-opacity duration-300" />
        <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-gradient-to-l from-amber-400/10 to-orange-400/10 rounded-full blur-[120px] animate-pulse-slower dark:opacity-0 transition-opacity duration-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 via-transparent to-purple-600/5 rounded-full blur-[100px] dark:opacity-0 transition-opacity duration-300" />
        
        {/* Dark Mode Gradient Orbs */}
        <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-full blur-[120px] animate-pulse-slow opacity-0 dark:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-gradient-to-l from-amber-500/20 to-orange-500/20 rounded-full blur-[120px] animate-pulse-slower opacity-0 dark:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 via-transparent to-purple-600/5 rounded-full blur-[100px] opacity-0 dark:opacity-100 transition-opacity duration-300" />
        
        {/* Light Mode Dynamic Grid */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-0 transition-opacity duration-300" style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Dark Mode Dynamic Grid */}
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.02] transition-opacity duration-300" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Radial Gradient Overlay - Light Mode */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(255,255,255,0.8)_100%)] dark:opacity-0 transition-opacity duration-300" />
        
        {/* Radial Gradient Overlay - Dark Mode */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_100%)] opacity-0 dark:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Premium Top Accent Line - Light & Dark Mode */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-4">
          
          {/* Left Column - Main Content */}
          <div className="space-y-10">
            {/* Premium Badge - Light & Dark Mode */}
            <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-full px-5 py-2.5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                India's Most Premium Gym
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            {/* Main Heading - Light & Dark Mode */}
            <div className="space-y-7">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                  RISE
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute -inset-4 bg-primary/10 dark:bg-primary/20 blur-3xl"></span>
                  <span className="relative bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient">
                    ABOVE
                  </span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                Experience elite fitness at India's most luxurious gym. 
                Where dedication meets world-class infrastructure and expert guidance.
              </p>
            </div>

            {/* Premium CTA Section */}
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <Link href="/membership">
                <Button 
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-10 py-7 text-lg rounded-2xl shadow-2xl shadow-primary/25 transition-all duration-500 hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Premium Stats & Interactive Cards */}
          <div className="space-y-8">
            {/* Main Stats Card - Premium with glassmorphism */}
            <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-primary uppercase tracking-wider font-semibold">Premium Stats</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Elite Facility Metrics</p>
                  </div>
                  <Crown className="w-8 h-8 text-primary/60" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">5K+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">Sq. Ft.</div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-600 mt-1">Luxury Space</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">24/7</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">Access</div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-600 mt-1">Smart Keycard</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">15+</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">Coaches</div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-600 mt-1">World-Class</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Testimonials Carousel */}
            <div className="relative overflow-hidden bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 dark:border-white/10 hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-2 mb-5">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                <p className="text-sm font-semibold text-gray-800 dark:text-white">Member Transformations</p>
              </div>
              
              <div className="relative h-28">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-500 ${
                      idx === activeTestimonial 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-800 dark:text-white font-semibold text-lg">{testimonial.name}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-primary font-medium">{testimonial.transformation}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-1">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeTestimonial 
                        ? 'w-8 bg-primary' 
                        : 'w-1.5 bg-gray-300 dark:bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element - Light & Dark Mode */}
        <div className="mt-0 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-18 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-18 h-px bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
          </div>
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-600 mt-4 uppercase font-medium">
            Limited Memberships Available
          </p>
        </div>
      </div>

      {/* Floating Premium Elements - Light & Dark Mode */}
      <div className="absolute bottom-20 left-10 animate-float-slow opacity-30 dark:opacity-20">
        <Dumbbell className="w-12 h-12 text-gray-400 dark:text-white/40" />
      </div>
      <div className="absolute top-1/3 right-10 animate-float-slow-delayed opacity-20 dark:opacity-10">
        <Flame className="w-16 h-16 text-orange-400 dark:text-orange-500/40" />
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-10px); }
        }
        
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-slow-delayed {
          animation: float-slow-delayed 8s ease-in-out infinite 4s;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </section>
  );
}