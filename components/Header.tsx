'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun, Dumbbell, Crown } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    const idMap: { [key: string]: string } = {
      'hero': 'hero',
      'programs': 'programs',
      'trainers': 'trainers',
      'membership': 'membership',
      'bmi': 'bmi',
      'calorie': 'calorie',
      'more-features': 'more-features',
      'contact': 'contact'
    };
    
    const actualId = idMap[sectionId] || sectionId;
    
    if (actualId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(actualId);
    
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      setTimeout(() => {
        const retryElement = document.getElementById(actualId);
        if (retryElement) {
          const offset = 70;
          const elementPosition = retryElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Programs', id: 'programs' },
    { label: 'Trainers', id: 'trainers' },
    { label: 'Membership', id: 'membership' },
    { label: 'BMI', id: 'bmi' },
    { label: 'Calories', id: 'calorie' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-lg' 
          : 'bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-white/5'
      }`}
    >
      {/* Premium Top Accent Line */}
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`} />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Text always visible on all screens */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
            </div>
            {/* ZYROFIT text - Always visible on all screens (removed hidden sm:inline) */}
            <span className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-primary group-hover:to-purple-600 transition-all duration-300">
              ZYROFIT
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="flex items-center space-x-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative p-2 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-700 group-hover:rotate-12 transition-transform duration-300" />
                )}
              </button>
            )}

            {/* CTA Button - Desktop */}
            <button 
              onClick={() => scrollToSection('membership')}
              className="hidden md:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
            >
              <Crown className="w-3.5 h-3.5" />
              Join Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-1 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-600/10 hover:text-primary rounded-xl transition-all duration-300"
              >
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
            
            {/* Mobile CTA Button */}
            <button 
              onClick={() => scrollToSection('membership')}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              <Crown className="w-3.5 h-3.5" />
              Join Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}