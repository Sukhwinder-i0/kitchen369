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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border border-[#FFE4D6] shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FFF5EA] text-[#6E5D53] hover:text-[#2C1810] border border-[#FFD8BE]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D9381E] text-[10px] font-extrabold border border-[#FFC8A8] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#E65100]" /> Smart Concierge
            </span>
          </div>
          <h3 className="text-2xl font-black text-[#2C1810]">Dish Recommender</h3>
          <p className="text-xs text-[#6E5D53] font-medium">
            Not sure what to eat? Tell us your taste & mood for instant chef suggestions.
          </p>
        </div>

        {recommendations === null ? (
          <div className="space-y-5">
            {/* Step 1: Diet */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-[#2C1810]">1. Dietary Preference</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setDiet('veg')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    diet === 'veg'
                      ? 'bg-[#2E7D32] text-white border-[#2E7D32]'
                      : 'bg-[#FFF5EA] text-[#6E5D53] border-[#FFD8BE]'
                  }`}
                >
                  Pure Veg
                </button>
                <button
                  onClick={() => setDiet('nonveg')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    diet === 'nonveg'
                      ? 'bg-[#C0392B] text-white border-[#C0392B]'
                      : 'bg-[#FFF5EA] text-[#6E5D53] border-[#FFD8BE]'
                  }`}
                >
                  Non-Veg
                </button>
                <button
                  onClick={() => setDiet('any')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    diet === 'any'
                      ? 'brand-gradient-bg text-white border-orange-300'
                      : 'bg-[#FFF5EA] text-[#6E5D53] border-[#FFD8BE]'
                  }`}
                >
                  Anything
                </button>
              </div>
            </div>

            {/* Step 2: Spice Level */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-[#2C1810]">2. Spice Tolerance</label>
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
                        ? 'brand-gradient-bg text-white border-orange-300'
                        : 'bg-[#FFF5EA] text-[#6E5D53] border-[#FFD8BE]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Course */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-[#2C1810]">3. Course Preference</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setMood('starters')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    mood === 'starters'
                      ? 'brand-gradient-bg text-white border-orange-300'
                      : 'bg-[#FFF5EA] text-[#6E5D53] border-[#FFD8BE]'
                  }`}
                >
                  Starter / Kebab
                </button>
                <button
                  onClick={() => setMood('mains')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    mood === 'mains'
                      ? 'brand-gradient-bg text-white border-orange-300'
                      : 'bg-[#FFF5EA] text-[#6E5D53] border-[#FFD8BE]'
                  }`}
                >
                  Main Curry
                </button>
                <button
                  onClick={() => setMood('pizza')}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    mood === 'pizza'
                      ? 'brand-gradient-bg text-white border-orange-300'
                      : 'bg-[#FFF5EA] text-[#6E5D53] border-[#FFD8BE]'
                  }`}
                >
                  Pizza & Pasta
                </button>
              </div>
            </div>

            <button
              onClick={handleRecommend}
              className="w-full py-3.5 rounded-2xl brand-gradient-bg text-white text-xs font-extrabold shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Chef Recommendations</span>
            </button>
          </div>
        ) : (
          /* Recommended Results */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#E65100]">Top Recommendations For You:</span>
              <button
                onClick={() => setRecommendations(null)}
                className="text-xs text-[#6E5D53] underline font-bold hover:text-[#2C1810]"
              >
                Change Preferences
              </button>
            </div>

            <div className="space-y-3">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-[#FFF9F2] border border-[#FFD8BE] flex items-center justify-between gap-3"
                >
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-[#FFF5EA]">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-extrabold text-[#2C1810] truncate">{item.name}</h4>
                    <p className="text-[10px] text-[#6E5D53] truncate font-medium">{item.description}</p>
                    <span className="text-xs font-black text-[#D9381E]">₹{item.price}</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(item.id)}
                    className="p-2 rounded-xl brand-gradient-bg text-white hover:scale-105 transition-transform shadow-xs"
                    title="Add to Order"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-[#FFF5EA] text-[#2C1810] text-xs font-extrabold hover:bg-[#FFE8D6] border border-[#FFD8BE]"
            >
              Close & View Order
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
