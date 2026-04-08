'use client';

import { Star, Crown, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ansh Tripathi',
    transformation: 'Built lean muscle & confidence',
    quote: 'Started with zero gym experience, but the trainers made me feel comfortable and confident. Amazing results in 6 months!',
    rating: 5,
    initials: 'AT',
    image: '💪'
  },
  {
    name: 'Neha Gupta',
    transformation: 'Lost 20kg in 4 months',
    quote: 'The trainers at ZYROFIT changed my life. Professional guidance and a supportive community kept me motivated throughout my journey.',
    rating: 5,
    initials: 'NG',
    image: '🏋️'
  },
  {
    name: 'Rohit Sharma',
    transformation: 'Improved strength by 40%',
    quote: 'Best gym in Gurugram. State-of-the-art equipment and trainers who actually care about your progress. Highly recommended!',
    rating: 5,
    initials: 'RS',
    image: '⚡'
  },
  {
    name: 'Aman Patel',
    transformation: 'Complete body transformation',
    quote: 'The personalized nutrition plan and training made all the difference. ZYROFIT is more than a gym, its a family.',
    rating: 5,
    initials: 'AP',
    image: '🔥'
  },
];

export function Testimonials() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Matching Other Sections */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 mb-6">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Real Stories
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real transformations from our dedicated members
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50 overflow-hidden cursor-pointer"
            >
              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="relative p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Avatar & Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar - Premium Style */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-primary/30">
                      <span className="text-2xl">{testimonial.image}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-base group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-primary font-medium mt-0.5">
                      {testimonial.transformation}
                    </p>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Social Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50">
            <div className="text-3xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">500+</div>
            <p className="text-xs text-gray-500 dark:text-gray-500">Happy Members</p>
          </div>
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50">
            <div className="text-3xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">98%</div>
            <p className="text-xs text-gray-500 dark:text-gray-500">Success Rate</p>
          </div>
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50">
            <div className="text-3xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">4.9</div>
            <p className="text-xs text-gray-500 dark:text-gray-500">Average Rating</p>
          </div>
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50">
            <div className="text-3xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">1000+</div>
            <p className="text-xs text-gray-500 dark:text-gray-500">Transformations</p>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
          </div>
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-600 mt-6 uppercase font-medium">
            Join Our Family • Start Your Transformation
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