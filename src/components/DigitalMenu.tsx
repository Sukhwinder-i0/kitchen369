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
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'nonveg' && item.isVeg) return false;

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
        <span className="text-xs font-bold uppercase tracking-widest text-[#E65100]">
          Farm-To-Table Freshness
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#2C1810]">
          Interactive <span className="gold-gradient-text font-serif italic">Digital Menu</span>
        </h2>
        <p className="text-sm sm:text-base text-[#6E5D53] font-medium">
          Select your favorite dishes to create a direct WhatsApp delivery order or preview items for your rooftop table dining experience.
        </p>
      </div>

      {/* Control Bar: Search & Diet Toggles */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl mb-8 border border-[#FFE4D6] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E8B80]" />
            <input
              type="text"
              placeholder="Search Paneer, Butter Chicken, Kebabs, Naan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FFF9F2] text-sm text-[#2C1810] border border-[#FFD8BE] focus:border-[#E65100] focus:outline-none placeholder-[#9E8B80] transition-all font-medium"
            />
          </div>

          {/* Veg / Non-Veg Toggle Pills */}
          <div className="flex items-center gap-2 bg-[#FFF9F2] p-1.5 rounded-2xl border border-[#FFD8BE] w-full md:w-auto justify-center">
            <button
              onClick={() => setVegFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                vegFilter === 'all'
                  ? 'bg-[#D9381E] text-white shadow-sm'
                  : 'text-[#6E5D53] hover:text-[#2C1810]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setVegFilter('veg')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                vegFilter === 'veg'
                  ? 'bg-[#2E7D32] text-white shadow-sm'
                  : 'text-[#6E5D53] hover:text-[#2C1810]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white inline-block" />
              Pure Veg
            </button>
            <button
              onClick={() => setVegFilter('nonveg')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                vegFilter === 'nonveg'
                  ? 'bg-[#C0392B] text-white shadow-sm'
                  : 'text-[#6E5D53] hover:text-[#2C1810]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white inline-block" />
              Non-Veg
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-[#FFE4D6]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'brand-gradient-bg text-white border border-orange-300 shadow-md'
                  : 'bg-[#FFF5EA] text-[#6E5D53] hover:bg-[#FFE8D6] hover:text-[#2C1810] border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dish Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#FFE4D6] shadow-sm">
          <p className="text-lg font-bold text-[#2C1810]">No dishes match your search.</p>
          <p className="text-xs text-[#6E5D53] mt-1">Try resetting the veg filter or search term.</p>
          <button
            onClick={() => { setSearchQuery(''); setVegFilter('all'); setSelectedCategory('all'); }}
            className="mt-4 px-5 py-2.5 rounded-full brand-gradient-bg text-xs font-bold text-white shadow-md"
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
                className="bg-white rounded-3xl overflow-hidden flex flex-col justify-between border border-[#FFE4D6] hover:border-[#E65100] transition-all group shadow-xs hover:shadow-lg"
              >
                {/* Item Image with Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-[#FFF5EA]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                  {/* Veg / Non-Veg Indicator */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40 flex items-center gap-1.5 text-[10px] font-extrabold text-[#2C1810] shadow-xs">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        item.isVeg ? 'bg-green-600' : 'bg-red-600'
                      }`}
                    />
                    <span>{item.isVeg ? 'VEG' : 'NON-VEG'}</span>
                  </div>

                  {/* Bestseller / Chef Special Badge */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    {item.isBestseller && (
                      <span className="px-2.5 py-1 rounded-full bg-[#E65100] text-white text-[10px] font-extrabold shadow-sm flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-white text-white" /> Bestseller
                      </span>
                    )}
                    {item.isChefSpecial && (
                      <span className="px-2.5 py-1 rounded-full bg-[#D9381E] text-white text-[10px] font-extrabold shadow-sm flex items-center gap-1">
                        <Star className="w-3 h-3 text-white fill-white" /> Chef Choice
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xl font-black text-white drop-shadow-md">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-[#2C1810] group-hover:text-[#D9381E] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6E5D53] mt-1.5 leading-relaxed line-clamp-2 font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Add / Quantity Controls */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#FFE4D6]">
                    <span className="text-[11px] text-[#9E8B80] font-medium">Taxes & packing extra</span>

                    {count === 0 ? (
                      <button
                        onClick={() => onAddToCart(item.id)}
                        className="px-4 py-2 rounded-xl brand-gradient-bg text-white text-xs font-extrabold flex items-center gap-1.5 hover:brightness-110 shadow-sm transition-all"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-3 bg-[#FFF0E5] px-3 py-1.5 rounded-xl border border-[#FFC8A8]">
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="p-1 rounded-md text-[#D9381E] hover:bg-[#FFE0CC] transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-extrabold text-[#2C1810] px-1">{count}</span>
                        <button
                          onClick={() => onAddToCart(item.id)}
                          className="p-1 rounded-md text-[#D9381E] hover:bg-[#FFE0CC] transition-colors"
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
            className="px-6 py-3.5 rounded-full brand-gradient-bg text-white font-extrabold text-sm shadow-2xl flex items-center gap-3 border-2 border-white hover:scale-105 transition-all"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            <span>View Order ({totalCartCount} items)</span>
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      )}
    </section>
  );
};
