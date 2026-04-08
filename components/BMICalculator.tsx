'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Calculator, Activity, Target, Scale, Ruler } from 'lucide-react';

type UnitType = 'cm' | 'feet';

export function BMICalculator() {
  const [unit, setUnit] = useState<UnitType>('cm');
  const [heightCm, setHeightCm] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight) return;

    let heightInMeters = 0;
    
    if (unit === 'cm') {
      if (!heightCm) return;
      heightInMeters = parseFloat(heightCm) / 100;
    } else {
      if (!heightFeet) return;
      const totalInches = parseFloat(heightFeet) * 12 + (parseFloat(heightInches) || 0);
      heightInMeters = totalInches * 0.0254;
    }

    const weightKg = parseFloat(weight);
    const bmiValue = weightKg / (heightInMeters * heightInMeters);
    setBMI(parseFloat(bmiValue.toFixed(1)));

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue < 25) {
      setCategory('Normal Weight');
    } else if (bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const resetForm = () => {
    setHeightCm('');
    setHeightFeet('');
    setHeightInches('');
    setWeight('');
    setBMI(null);
    setCategory('');
  };

  const getCategoryColor = () => {
    if (!category) return 'from-primary/5 to-purple-600/5';
    if (category === 'Normal Weight') return 'from-green-500/10 to-emerald-500/10';
    if (category === 'Underweight') return 'from-blue-500/10 to-cyan-500/10';
    if (category === 'Overweight') return 'from-yellow-500/10 to-orange-500/10';
    return 'from-red-500/10 to-rose-500/10';
  };

  const getCategoryTextColor = () => {
    if (!category) return 'text-primary';
    if (category === 'Normal Weight') return 'text-green-500';
    if (category === 'Underweight') return 'text-blue-500';
    if (category === 'Overweight') return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Matching Other Sections */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 mb-6">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Health Assessment
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              BMI
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Calculator
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Calculate your Body Mass Index and understand your fitness level
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Calculator Form - Premium Card */}
            <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 overflow-hidden">
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Your Measurements</h3>
                </div>
                
                {/* Unit Toggle */}
                <div className="flex gap-2 mb-6 p-1 bg-gray-100 dark:bg-white/5 rounded-xl">
                  <button
                    onClick={() => setUnit('cm')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      unit === 'cm'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                  >
                    cm
                  </button>
                  <button
                    onClick={() => setUnit('feet')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      unit === 'feet'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                  >
                    Feet & Inches
                  </button>
                </div>

                <div className="space-y-5">
                  {/* Height Input - Dynamic based on unit */}
                  {unit === 'cm' ? (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                          <Ruler className="w-3.5 h-3.5 text-primary" />
                          Height (cm)
                        </div>
                      </label>
                      <input
                        type="number"
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value)}
                        placeholder="Enter height in cm"
                        className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                          <Ruler className="w-3.5 h-3.5 text-primary" />
                          Height
                        </div>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="number"
                          value={heightFeet}
                          onChange={(e) => setHeightFeet(e.target.value)}
                          placeholder="Feet"
                          className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                        />
                        <input
                          type="number"
                          value={heightInches}
                          onChange={(e) => setHeightInches(e.target.value)}
                          placeholder="Inches"
                          className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                        />
                      </div>
                    </div>
                  )}

                  {/* Weight Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Scale className="w-3.5 h-3.5 text-primary" />
                        Weight (kg)
                      </div>
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Enter weight in kg"
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={calculateBMI}
                      className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
                    >
                      Calculate BMI
                    </Button>
                    {bmi && (
                      <Button
                        onClick={resetForm}
                        variant="outline"
                        className="px-6 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-all duration-300"
                      >
                        Reset
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card - Premium */}
            <div className={`group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden ${
              bmi ? `border-primary/30` : 'border-gray-200 dark:border-white/10 hover:border-primary/50'
            }`}>
              
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor()} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 flex flex-col justify-center min-h-[400px]">
                {bmi ? (
                  <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 mb-4">
                        <Activity className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs text-primary font-medium">Your Result</span>
                      </div>
                      <p className="text-6xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                        {bmi}
                      </p>
                      <p className={`text-xl font-semibold ${getCategoryTextColor()}`}>
                        {category}
                      </p>
                    </div>

                    {/* BMI Categories */}
                    <div className="bg-white/50 dark:bg-white/5 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">BMI Categories</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-500">Underweight:</span>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">&lt; 18.5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-500">Normal:</span>
                          <span className="text-green-600 dark:text-green-400 font-medium">18.5 - 24.9</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-500">Overweight:</span>
                          <span className="text-yellow-600 dark:text-yellow-400 font-medium">25 - 29.9</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 dark:text-gray-500">Obese:</span>
                          <span className="text-red-600 dark:text-red-400 font-medium">&gt; 30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-500">Enter your details and click calculate</p>
                    <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">Your BMI results will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recommendations - Premium Card */}
          {bmi && (
            <div className="mt-8 group relative bg-gradient-to-br from-primary/5 to-purple-600/5 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 animate-in fade-in slide-in-from-bottom duration-500 hover:scale-[1.01] transition-all duration-500">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Crown className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Personalized Recommendations</h3>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-5">
                  <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-white/5 rounded-xl">
                    <span className="text-2xl">🏋️</span>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white text-sm">Strength Training</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">3-4 times per week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-white/5 rounded-xl">
                    <span className="text-2xl">🏃</span>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white text-sm">Cardio</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">2-3 times per week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-white/5 rounded-xl">
                    <span className="text-2xl">🥗</span>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white text-sm">Nutrition</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">Consult our trainers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Decorative Element */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-gray-400 dark:to-gray-600" />
            </div>
            <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-600 mt-6 uppercase font-medium">
              Track Your Progress • Stay Healthy
            </p>
          </div>
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