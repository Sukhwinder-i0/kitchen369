"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MENU_ITEMS, MenuItem } from '@/data/restaurantData';
import { X, Sparkles, Flame, Plus, Check } from 'lucide-react';

interface AiDishConciergeProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (id: string) => void;
}

export const AiDishConcierge: React.FC<AiDishConciergeProps> = ({
  isOpen,
  onClose,
  onAddToCart
}) => {
  const [diet, setDiet] = useState<'veg' | 'nonveg' | 'any'>('veg');
  const [spice, setSpice] = useState<number>(1);
  const [mood, setMood] = useState<'starters' | 'mains' | 'pizza'>('mains');
  const [recommendations, setRecommendations] = useState<MenuItem[] | null>(null);

  if (!isOpen) return null;

  const handleRecommend = () => {
    const matched = MENU_ITEMS.filter((item) => {
      if (diet === 'veg' && !item.isVeg) return false;
      if (diet === 'nonveg' && item.isVeg) return false;
      if (item.category !== mood && mood !== 'mains') return false;
      return true;
    });

    setRecommendations(matched.length > 0 ? matched.slice(0, 3) : MENU_ITEMS.slice(0, 3));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-[#d4af37]/40 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1c110d] text-[#c4b5a5] hover:text-white border border-[#5c1600]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#5c1600] text-[#f3e5ab] text-[10px] font-bold border border-[#d4af37]/40 flex items-center gap-1">
              Smart Concierge
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#faf6f0]">Dish Recommender</h3>
          <p className="text-xs text-[#c4b5a5]">
            Not sure what to eat? Tell us your taste & mood for instant chef suggestions.
          </p>
        </div>

        {recommendations === null ? (
          <div className="space-y-5">
            {/* Step 1: Diet */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#faf6f0]">1. Dietary Preference</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setDiet('veg')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    diet === 'veg'
                      ? 'bg-[#3e6b48] text-white border-green-400'
                      : 'bg-[#1c110d] text-[#c4b5a5] border-[#5c1600]'
                  }`}
                >
                  Pure Veg
                </button>
                <button
                  onClick={() => setDiet('nonveg')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    diet === 'nonveg'
                      ? 'bg-[#802000] text-white border-red-500'
                      : 'bg-[#1c110d] text-[#c4b5a5] border-[#5c1600]'
                  }`}
                >
                  Non-Veg
                </button>
                <button
                  onClick={() => setDiet('any')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    diet === 'any'
                      ? 'bg-[#5c1600] text-white border-[#d4af37]'
                      : 'bg-[#1c110d] text-[#c4b5a5] border-[#5c1600]'
                  }`}
                >
                  Anything
                </button>
              </div>
            </div>

            {/* Step 2: Spice Level */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#faf6f0]">2. Spice Tolerance</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { level: 1, label: 'Mild & Creamy' },
                  { level: 2, label: 'Medium Spice' },
                  { level: 3, label: 'Fiery Hot' }
                ].map((s) => (
                  <button
                    key={s.level}
                    onClick={() => setSpice(s.level)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                      spice === s.level
                        ? 'bg-[#5c1600] text-[#f3e5ab] border-[#d4af37]'
                        : 'bg-[#1c110d] text-[#c4b5a5] border-[#5c1600]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Course */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#faf6f0]">3. Course Preference</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setMood('starters')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    mood === 'starters'
                      ? 'bg-[#5c1600] text-white border-[#d4af37]'
                      : 'bg-[#1c110d] text-[#c4b5a5] border-[#5c1600]'
                  }`}
                >
                  Starter / Kebab
                </button>
                <button
                  onClick={() => setMood('mains')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    mood === 'mains'
                      ? 'bg-[#5c1600] text-white border-[#d4af37]'
                      : 'bg-[#1c110d] text-[#c4b5a5] border-[#5c1600]'
                  }`}
                >
                  Main Curry
                </button>
                <button
                  onClick={() => setMood('pizza')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    mood === 'pizza'
                      ? 'bg-[#5c1600] text-white border-[#d4af37]'
                      : 'bg-[#1c110d] text-[#c4b5a5] border-[#5c1600]'
                  }`}
                >
                  Pizza & Pasta
                </button>
              </div>
            </div>

            <button
              onClick={handleRecommend}
              className="w-full py-3.5 rounded-2xl brand-gradient-bg text-white text-xs font-bold shadow-lg border border-[#d4af37]/40 hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Chef Recommendations</span>
            </button>
          </div>
        ) : (
          /* Recommended Results */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#d4af37]">Top Recommendations For You:</span>
              <button
                onClick={() => setRecommendations(null)}
                className="text-xs text-[#c4b5a5] underline hover:text-white"
              >
                Change Preferences
              </button>
            </div>

            <div className="space-y-3">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-[#1c110d] border border-[#d4af37]/20 flex items-center justify-between gap-3"
                >
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                    <p className="text-[10px] text-[#c4b5a5] truncate">{item.description}</p>
                    <span className="text-xs font-extrabold text-[#d4af37]">₹{item.price}</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(item.id)}
                    className="p-2 rounded-xl brand-gradient-bg text-white hover:scale-105 transition-transform"
                    title="Add to Order"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-[#1c110d] text-[#c4b5a5] text-xs font-bold hover:text-white border border-[#5c1600]"
            >
              Close & View Order
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
