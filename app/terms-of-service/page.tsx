'use client';

import Link from 'next/link';
import { ArrowLeft, Crown, FileText, AlertCircle, CheckCircle, Scale, Clock, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-black pt-24 pb-16 transition-colors duration-300">
      <div className="absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-500 hover:text-primary transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 mb-6">
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Legal Agreement
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Terms of
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:border-primary/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  By accessing or using ZYROFIT Gym's website, facilities, and services, you agree to be bound by these Terms of Service. 
                  If you do not agree with any part of these terms, you may not use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Membership Terms */}
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:border-primary/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">2. Membership Terms</h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    All memberships require a valid ID and signed waiver
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Membership fees are billed according to your selected plan
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Members must be at least 16 years old (under 18 requires guardian consent)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Membership is non-transferable unless specified
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    We reserve the right to refuse service to anyone
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payments and Cancellations */}
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:border-primary/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">3. Payments and Cancellations</h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Membership fees are non-refundable
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Cancellation requires 30 days written notice
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Freeze options available for medical reasons (documentation required)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Late payments may result in membership suspension
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Facility Rules */}
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:border-primary/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">4. Facility Rules</h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Proper athletic attire and closed-toe shoes required
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Wipe down equipment after each use
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    No photography or video recording without permission
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    No harassment or inappropriate behavior
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Follow all safety guidelines and instructions from staff
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Liability Waiver */}
          <div className="group relative bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-2xl border border-primary/20 p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">5. Liability Waiver</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Exercise involves inherent risks. By using our facilities, you acknowledge that you are physically capable 
                  of participating in exercise programs. You agree to release ZYROFIT Gym, its employees, and affiliates from 
                  any liability for injuries or damages sustained during your use of our facilities or participation in our programs.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:border-primary/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">6. Contact Information</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-gray-600 dark:text-gray-400">Gurugram, Haryana 122102</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+919162780802" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      +91 9162780802
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:zyrofit1@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      zyrofit1@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
          </div>
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-600 mt-6 uppercase font-medium">
            Thank You for Choosing ZYROFIT
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
    </main>
  );
}