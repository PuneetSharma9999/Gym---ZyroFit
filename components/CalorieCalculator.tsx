'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Flame, Apple, Activity, Target, TrendingUp, Scale, Ruler, Calendar, Dumbbell } from 'lucide-react';

export function CalorieCalculator() {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: '1.375',
  });

  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    deficit: number;
    surplus: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();

    const age = parseFloat(formData.age);
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const activity = parseFloat(formData.activity);

    if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
      alert('Please enter valid values');
      return;
    }

    // Harris-Benedict Formula for BMR
    let bmr: number;
    if (formData.gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    // TDEE = BMR × Activity Level
    const tdee = Math.round(bmr * activity);
    const deficit = Math.round(tdee - 300); // 300 cal deficit for weight loss
    const surplus = Math.round(tdee + 300); // 300 cal surplus for muscle gain

    setResult({ bmr: Math.round(bmr), tdee, deficit, surplus });
  };

  const resetForm = () => {
    setFormData({
      age: '',
      gender: 'male',
      weight: '',
      height: '',
      activity: '1.375',
    });
    setResult(null);
  };

  const activityLevels = [
    { value: '1.2', label: 'Sedentary (little or no exercise)', icon: '🛋️' },
    { value: '1.375', label: 'Lightly active (1-3 days/week)', icon: '🚶' },
    { value: '1.55', label: 'Moderately active (3-5 days/week)', icon: '🏃' },
    { value: '1.725', label: 'Very active (6-7 days/week)', icon: '💪' },
    { value: '1.9', label: 'Extremely active (intense training)', icon: '⚡' },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Matching Other Sections */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10 mb-6">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Nutrition Guide
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Calorie
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Calculator
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Calculate your daily calorie needs based on your metabolic rate and activity level
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Calculator Form - Premium Card */}
          <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 overflow-hidden">
            
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Flame className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Your Details</h3>
              </div>
              
              <form onSubmit={calculateCalories} className="space-y-5">
                {/* Gender Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-primary" />
                      Gender
                    </div>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group/gender">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700 dark:text-gray-300 group-hover/gender:text-primary transition-colors">Male</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group/gender">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700 dark:text-gray-300 group-hover/gender:text-primary transition-colors">Female</span>
                    </label>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      Age (years)
                    </div>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="25"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Scale className="w-3.5 h-3.5 text-primary" />
                      Weight (kg)
                    </div>
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="70"
                  />
                </div>

                {/* Height */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-3.5 h-3.5 text-primary" />
                      Height (cm)
                    </div>
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="175"
                  />
                </div>

                {/* Activity Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Dumbbell className="w-3.5 h-3.5 text-primary" />
                      Activity Level
                    </div>
                  </label>
                  <select
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-800 dark:text-white cursor-pointer"
                  >
                    {activityLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.icon} {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
                  >
                    Calculate Calories
                  </Button>
                  {result && (
                    <Button
                      type="button"
                      onClick={resetForm}
                      variant="outline"
                      className="px-6 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      Reset
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Results Section - Premium Cards */}
          <div>
            {result ? (
              <div className="space-y-4 animate-in fade-in zoom-in duration-500">
                {/* BMR Card */}
                <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mb-1">Basal Metabolic Rate</p>
                      <p className="text-3xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {result.bmr}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Calories burned at rest</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* TDEE Card */}
                <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mb-1">Daily Calorie Needs (TDEE)</p>
                      <p className="text-3xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {result.tdee}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Maintenance calories</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Weight Loss & Muscle Gain Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-red-500/50 overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="relative">
                      <p className="text-gray-500 dark:text-gray-500 text-xs mb-1 uppercase tracking-wide">Weight Loss</p>
                      <p className="text-2xl font-bold text-red-500">{result.deficit}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">-300 cal/day</p>
                    </div>
                  </div>

                  <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-green-500/50 overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="relative">
                      <p className="text-gray-500 dark:text-gray-500 text-xs mb-1 uppercase tracking-wide">Muscle Gain</p>
                      <p className="text-2xl font-bold text-green-500">+{result.surplus}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">+300 cal/day</p>
                    </div>
                  </div>
                </div>

                {/* Pro Tip Card */}
                <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Apple className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">Pro Tip</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        For sustainable weight loss, consume <strong className="text-primary">{result.deficit} calories</strong> daily. 
                        For muscle gain, consume <strong className="text-primary">{result.surplus} calories</strong> daily with adequate protein.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-12 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-500">Fill in your details and click calculate</p>
                  <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">Your calorie recommendations will appear here</p>
                </div>
              </div>
            )}
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
            Track Your Nutrition • Achieve Your Goals
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