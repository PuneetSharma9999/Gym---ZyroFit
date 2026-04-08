'use client';

import Link from 'next/link';
import { Crown, Dumbbell, ArrowRight, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'hover:bg-[#1877f2]' },
    { icon: Instagram, name: 'Instagram', color: 'hover:bg-gradient-to-r from-[#833ab4] to-[#fd1d1d]' },
    { icon: Twitter, name: 'Twitter', color: 'hover:bg-[#1da1f2]' },
    { icon: Youtube, name: 'YouTube', color: 'hover:bg-[#ff0000]' },
  ];

  return (
    <footer className="relative bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      
      {/* Premium Gradient Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                ZYROFIT
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Premium fitness gym in India with world-class equipment and expert trainers. Transform your body, transform your life.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className={`w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 flex items-center justify-center hover:scale-110 hover:text-white`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Programs', 'Trainers', 'Membership', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {['Personal Training', 'Group Classes', 'Nutrition Plans', 'Rehabilitation'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">📍</span>
                <span>Gurugram, Haryana 122102</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <a href="tel:+919162780802" className="hover:text-primary transition-colors">+91 9162780802</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✉️</span>
                <a href="mailto:zyrofit1@gmail.com" className="hover:text-primary transition-colors">zyrofit1@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">⏰</span>
                <span>Mon - Sun: 5:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Decorative Divider */}
        <div className="relative my-1">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-white dark:bg-black">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-gray-400 dark:text-gray-600 text-xs">
            &copy; {currentYear} ZYROFIT Gym. All rights reserved.
          </p>

                      <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/puneetsharma999/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-10 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 hover:from-primary/10 hover:to-purple-500/10 transition-all duration-500 hover:scale-105"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <Linkedin className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium">Created by</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                  Puneet Kumar Sharma
                </span>
              </div>
              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </a>
          </div>
          
          <div className="flex gap-6 text-xs">
            <Link href="/privacy-policy" className="text-gray-400 dark:text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 dark:text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>



          </div>

          

        </div>

       

        

        {/* Premium Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
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
    </footer>
  );
}