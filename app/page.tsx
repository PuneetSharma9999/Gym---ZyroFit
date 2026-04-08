import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Programs } from '@/components/Programs';
import { Trainers } from '@/components/Trainers';
import { Membership } from '@/components/Membership';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { BMICalculator } from '@/components/BMICalculator';
import { CalorieCalculator } from '@/components/CalorieCalculator';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full pt-16">
      <Header />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Features Section */}
      <section id="features">
        <Features />
      </section>
      
      {/* Programs Section */}
      <section id="programs">
        <Programs />
      </section>
      
      {/* Trainers Section */}
      <section id="trainers">
        <Trainers />
      </section>
      
      {/* Membership Section */}
      <section id="membership">
        <Membership />
      </section>
      
      {/* BMI Calculator Section */}
      <section id="bmi">
        <BMICalculator />
      </section>
      
      {/* Calorie Calculator Section */}
      <section id="calorie">
        <CalorieCalculator />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}