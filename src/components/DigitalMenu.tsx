"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { MENU_ITEMS, MenuItem, RESTAURANT_INFO } from '@/data/restaurantData';
import { Search, Plus, Minus, Flame, Star, ShoppingBag, Send, Filter, CheckCircle2 } from 'lucide-react';

interface DigitalMenuProps {
  cart: { [key: string]: number };
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
  onOpenCartDrawer: () => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters & Kebabs' },
  { id: 'mains', label: 'North Indian Curries' },
  { id: 'chinese', label: 'Chinese Wok' },
  { id: 'pizza', label: 'Artisan Pizza & Pasta' },
  { id: 'breads', label: 'Tandoori Breads' }
];

export const DigitalMenu: React.FC<DigitalMenuProps> = ({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onOpenCartDrawer
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Veg/Nonveg filter
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'nonveg' && item.isVeg) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, vegFilter]);

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
          Farm-To-Table Excellence
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#faf6f0]">
          Interactive <span className="gold-gradient-text font-serif italic">Digital Menu</span>
        </h2>
        <p className="text-sm sm:text-base text-[#c4b5a5]">
          Select your favorite dishes to create a direct WhatsApp delivery order or preview items for your rooftop table dining experience.
        </p>
      </div>

      {/* Control Bar: Search & Diet Toggles */}
      <div className="glass-panel p-4 sm:p-6 rounded-3xl mb-8 border border-[#5c1600]/60 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c4b5a5]" />
            <input
              type="text"
              placeholder="Search Paneer, Butter Chicken, Kebabs, Naan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#1c110d] text-sm text-[#faf6f0] border border-[#5c1600] focus:border-[#d4af37] focus:outline-none placeholder-[#8c7b6c] transition-all"
            />
          </div>

          {/* Veg / Non-Veg Toggle Pills */}
          <div className="flex items-center gap-2 bg-[#1c110d] p-1.5 rounded-2xl border border-[#5c1600] w-full md:w-auto justify-center">
            <button
              onClick={() => setVegFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                vegFilter === 'all'
                  ? 'bg-[#5c1600] text-white shadow-md'
                  : 'text-[#c4b5a5] hover:text-white'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setVegFilter('veg')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                vegFilter === 'veg'
                  ? 'bg-[#3e6b48] text-white shadow-md'
                  : 'text-[#c4b5a5] hover:text-white'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white inline-block" />
              Pure Veg
            </button>
            <button
              onClick={() => setVegFilter('nonveg')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                vegFilter === 'nonveg'
                  ? 'bg-[#802000] text-white shadow-md'
                  : 'text-[#c4b5a5] hover:text-white'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white inline-block" />
              Non-Veg
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-[#5c1600]/40">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'brand-gradient-bg text-white border border-[#d4af37]/40 shadow-lg'
                  : 'bg-[#1c110d] text-[#c4b5a5] hover:bg-[#2a1610] hover:text-[#faf6f0] border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dish Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 glass-card rounded-3xl border border-[#5c1600]">
          <p className="text-lg font-semibold text-[#faf6f0]">No dishes match your search.</p>
          <p className="text-xs text-[#c4b5a5] mt-1">Try resetting the veg filter or search term.</p>
          <button
            onClick={() => { setSearchQuery(''); setVegFilter('all'); setSelectedCategory('all'); }}
            className="mt-4 px-4 py-2 rounded-full brand-gradient-bg text-xs font-semibold text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const count = cart[item.id] || 0;

            return (
              <div
                key={item.id}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all group"
              >
                {/* Item Image with Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-[#1c110d]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0806] via-transparent to-transparent opacity-80" />

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass-panel border border-white/20 flex items-center gap-1.5 text-[10px] font-bold text-white shadow-md">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        item.isVeg ? 'bg-green-500' : 'bg-red-600'
                      }`}
                    />
                    <span>{item.isVeg ? 'VEG' : 'NON-VEG'}</span>
                  </div>

                  {/* Bestseller / Chef Special Badge */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    {item.isBestseller && (
                      <span className="px-2.5 py-1 rounded-full bg-[#5c1600] text-[#f3e5ab] text-[10px] font-bold border border-[#d4af37]/40 shadow-md flex items-center gap-1">
                        <Flame className="w-3 h-3 text-[#d4af37]" /> Bestseller
                      </span>
                    )}
                    {item.isChefSpecial && (
                      <span className="px-2.5 py-1 rounded-full bg-[#2a1610] text-[#d4af37] text-[10px] font-bold border border-[#d4af37]/40 shadow-md flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" /> Chef Choice
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xl font-black text-white gold-gradient-text">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#faf6f0] group-hover:text-[#d4af37] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#c4b5a5] mt-1.5 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Add / Quantity Controls */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#5c1600]/30">
                    <span className="text-[11px] text-[#c4b5a5]">Taxes & packing extra</span>

                    {count === 0 ? (
                      <button
                        onClick={() => onAddToCart(item.id)}
                        className="px-4 py-2 rounded-xl brand-gradient-bg text-white text-xs font-bold flex items-center gap-1.5 hover:brightness-110 shadow-md border border-[#d4af37]/30 transition-all"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-3 bg-[#1c110d] px-3 py-1.5 rounded-xl border border-[#d4af37]/40">
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="p-1 rounded-md text-[#d4af37] hover:bg-[#5c1600] transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-white px-1">{count}</span>
                        <button
                          onClick={() => onAddToCart(item.id)}
                          className="p-1 rounded-md text-[#d4af37] hover:bg-[#5c1600] transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Floating Order Cart Trigger Pill when items added */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-40 animate-bounce">
          <button
            onClick={onOpenCartDrawer}
            className="px-6 py-3.5 rounded-full brand-gradient-bg text-white font-bold text-sm shadow-2xl flex items-center gap-3 border-2 border-[#d4af37] hover:scale-105 transition-all"
          >
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <span>View Order ({totalCartCount} items)</span>
            <Send className="w-4 h-4 text-[#d4af37]" />
          </button>
        </div>
      )}
    </section>
  );
};
