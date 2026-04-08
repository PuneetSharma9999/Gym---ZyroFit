import { ArrowLeft, Clock, Target, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const programDetails: Record<string, any> = {
  'strength-training': {
    title: 'Strength Training',
    duration: '12 weeks',
    icon: '🏋️',
    description: 'Build muscle and increase your lifting power with progressive overload techniques.',
    overview: 'Our comprehensive strength training program is designed to help you build lean muscle mass, increase bone density, and boost your metabolism. Through progressive resistance training and proper nutrition guidance, you\'ll transform your physique.',
    benefits: [
      'Increased muscle mass and definition',
      'Enhanced strength and power',
      'Improved bone density',
      'Boosted metabolism',
      'Better posture and joint health',
      'Increased confidence and self-esteem',
    ],
    features: [
      'Personalized workout plans',
      'Progressive overload techniques',
      'Proper form and technique guidance',
      'Nutrition guidance for muscle gain',
      'Monthly progress tracking',
      'Access to certified trainers',
    ],
    schedule: [
      'Week 1-4: Foundation Building',
      'Week 5-8: Strength Development',
      'Week 9-12: Peak Performance',
    ],
    price: '₹3,999/month',
    difficulty: 'Intermediate to Advanced',
    sessions: '4-5 sessions per week',
  },
  'weight-loss': {
    title: 'Weight Loss',
    duration: '16 weeks',
    icon: '⚡',
    description: 'Achieve your ideal body weight with cardio, strength, and nutrition guidance.',
    overview: 'Sustainable weight loss requires a combination of cardio training, strength workouts, and proper nutrition. Our program combines all three elements with expert coaching to help you lose fat while preserving muscle.',
    benefits: [
      'Sustainable fat loss (0.5-1kg per week)',
      'Increased cardiovascular health',
      'Enhanced energy levels',
      'Better metabolic health',
      'Improved body composition',
      'Long-term lifestyle changes',
    ],
    features: [
      'Custom workout routines',
      'High-intensity interval training (HIIT)',
      'Strength training for muscle preservation',
      'Calorie-tracked meal plans',
      'Weekly progress monitoring',
      'Behavioral coaching',
    ],
    schedule: [
      'Week 1-4: Assessment and Baseline',
      'Week 5-12: Active Fat Loss Phase',
      'Week 13-16: Maintenance and Habits',
    ],
    price: '₹4,499/month',
    difficulty: 'Beginner to Intermediate',
    sessions: '5-6 sessions per week',
  },
  'body-transformation': {
    title: 'Body Transformation',
    duration: '12-16 weeks',
    icon: '✨',
    description: 'Complete body reshaping with personalized diet and workout plans.',
    overview: 'A complete body transformation program that combines strength training, cardio, and comprehensive nutrition planning. This is our most popular program for those looking for dramatic results.',
    benefits: [
      'Complete physique change',
      'Increased muscle definition',
      'Improved athletic performance',
      'Enhanced metabolic rate',
      'Better health markers',
      'Confidence transformation',
    ],
    features: [
      'Comprehensive body assessment',
      'Personalized training split',
      'Custom macro-counting meal plans',
      'Weekly training adjustments',
      'Body composition analysis',
      'Progress photos and measurements',
    ],
    schedule: [
      'Phase 1: Foundation (Weeks 1-4)',
      'Phase 2: Acceleration (Weeks 5-12)',
      'Phase 3: Definition (Weeks 13-16)',
    ],
    price: '₹5,499/month',
    difficulty: 'Advanced',
    sessions: '5-6 sessions per week',
  },
  'athletic-performance': {
    title: 'Athletic Performance',
    duration: '8-12 weeks',
    icon: '🏃',
    description: 'Sport-specific training to enhance agility, speed, and endurance.',
    overview: 'Designed for athletes looking to improve performance in their specific sport. We focus on sport-specific movements, explosive power, and endurance.',
    benefits: [
      'Improved speed and agility',
      'Enhanced explosive power',
      'Better endurance and stamina',
      'Reduced injury risk',
      'Sport-specific skill development',
      'Competitive edge',
    ],
    features: [
      'Sport-specific training protocols',
      'Plyometric and explosive training',
      'Agility ladder and cone drills',
      'Speed and acceleration work',
      'Sport-specific nutrition',
      'Performance testing and tracking',
    ],
    schedule: [
      'Week 1-3: Assessment Phase',
      'Week 4-8: Development Phase',
      'Week 9-12: Competition Prep',
    ],
    price: '₹4,999/month',
    difficulty: 'Advanced',
    sessions: '4-5 sessions per week',
  },
  'functional-fitness': {
    title: 'Functional Fitness',
    duration: '10 weeks',
    icon: '🧘',
    description: 'Improve mobility, balance, and everyday functional strength.',
    overview: 'Functional fitness focuses on building strength and endurance in the muscles you use every day. Perfect for improving quality of life and injury prevention.',
    benefits: [
      'Improved daily movement quality',
      'Enhanced balance and stability',
      'Better posture and spinal health',
      'Injury prevention',
      'Increased flexibility and mobility',
      'Better overall fitness',
    ],
    features: [
      'Movement assessment',
      'Core stability training',
      'Balance and proprioception work',
      'Mobility and flexibility routines',
      'Functional compound movements',
      'Personalized exercise modifications',
    ],
    schedule: [
      'Week 1-3: Movement Assessment',
      'Week 4-7: Foundation Building',
      'Week 8-10: Integration and Progression',
    ],
    price: '₹2,999/month',
    difficulty: 'Beginner to Intermediate',
    sessions: '3-4 sessions per week',
  },
  'crossfit-hiit': {
    title: 'CrossFit & HIIT',
    duration: '8 weeks',
    icon: '🔥',
    description: 'High-intensity workouts combining strength, cardio, and agility.',
    overview: 'High-Intensity Interval Training combined with functional movements for maximum results in minimal time. This program is intense but highly effective.',
    benefits: [
      'Maximum calorie burn',
      'Improved cardiovascular fitness',
      'Functional strength development',
      'Time-efficient training',
      'Enhanced mental toughness',
      'Community and motivation',
    ],
    features: [
      'HIIT workout protocols',
      'Functional movement training',
      'Group class atmosphere',
      'Progressive workout scaling',
      'Community challenges',
      'Nutrition and recovery guidance',
    ],
    schedule: [
      'Week 1-2: Baseline Training',
      'Week 3-6: Intense Training Phase',
      'Week 7-8: Peak Performance Testing',
    ],
    price: '₹3,499/month',
    difficulty: 'Advanced',
    sessions: '4-5 sessions per week',
  },
};

export default function ProgramDetail({ params }: { params: { slug: string } }) {
  const program = programDetails[params.slug];

  if (!program) {
    return (
      <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Program Not Found</h1>
          <Link href="/#programs">
            <Button className="bg-primary hover:bg-primary/90">Back to Programs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#programs" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
          <div className="flex items-start justify-between gap-8">
            <div className="space-y-4">
              <div className="text-6xl">{program.icon}</div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">{program.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">{program.overview}</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-8 w-full sm:w-auto">
              <p className="text-sm text-muted-foreground mb-2">Starting from</p>
              <p className="text-3xl font-bold text-primary mb-6">{program.price}</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Join Program</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">Duration</p>
              </div>
              <p className="text-2xl font-bold text-foreground">{program.duration}</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">Frequency</p>
              </div>
              <p className="text-lg font-bold text-foreground">{program.sessions}</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">Level</p>
              </div>
              <p className="text-lg font-bold text-foreground">{program.difficulty}</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">Certification</p>
              </div>
              <p className="text-lg font-bold text-foreground">Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Benefits</h2>
            <div className="space-y-4">
              {program.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="flex gap-4 items-start bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-primary">✓</span>
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
            <div className="space-y-4">
              {program.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex gap-4 items-start bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-secondary">★</span>
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Program Schedule</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {program.schedule.map((phase: string, idx: number) => (
              <div key={idx} className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{idx + 1}</span>
                </div>
                <p className="text-lg font-semibold text-foreground">{phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Transform?</h2>
            <p className="text-lg text-muted-foreground mb-8">Start your {program.title.toLowerCase()} journey today and achieve your fitness goals.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base">
              Enroll Now - {program.price}
            </Button>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="w-full">
                Have Questions? Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
