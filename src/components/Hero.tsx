"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RESTAURANT_INFO } from '@/data/restaurantData';
import { Calendar, Utensils, Star, Clock, ShieldCheck, MapPin, ArrowRight, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

const HERO_SLIDES = [
  {
    image: "/images/pic4.png",
    title: "Starlight Rooftop Dining",
    location: "Beta 1, Greater Noida",
    tag: "Scenic Outdoor Terrace Ambient Lighting"
  },
  {
    image: "/images/pic7.png",
    title: "Artisan Culinary Feast",
    location: "Signature Tandoor & Curries",
    tag: "Farm-Fresh Handcrafted Ingredients"
  },
  {
    image: "/images/pic5.png",
    title: "Cane Lounge Fine Dining",
    location: "Beta 1 Dine-In Outlet",
    tag: "Warm Ambient Atmosphere & Private Tables"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8 bg-[#FFFBF5]">
      {/* Background Image Slider with Warm Appetizing Light Overlay */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
          } transition-transform duration-7000`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF5] via-[#FFFBF5]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF5] via-transparent to-[#FFFBF5]/80" />
        </div>
      ))}

      {/* Decorative Warm Saffron Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-orange-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Rating & Location Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <div className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2 border border-orange-200 text-xs font-bold text-[#D9381E] shadow-sm">
            <Star className="w-4 h-4 text-[#E67E22] fill-[#E67E22]" />
            <span>4.8 ★ Rated (1000+ Foodies)</span>
          </div>

          <div className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-200 text-xs font-bold text-[#2C1810] shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#E65100]" />
            <span>Beta 1 (Dine-in) & Alpha 1 (Delivery)</span>
          </div>
        </div>

        {/* Main Title Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#2C1810] leading-tight">
            Authentic Flavors, <br className="hidden sm:block" />
            <span className="gold-gradient-text font-serif italic">Fresh Saffron</span> & Tandoor Elegance
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5A453A] font-medium leading-relaxed">
            Experience the finest North Indian, Tandoori & Chinese delicacies in Greater Noida. Enjoy our romantic rooftop starlight terrace at Beta 1 or lightning-fast express delivery across Alpha 1.
          </p>
        </div>

        {/* Dual Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full brand-gradient-bg text-white text-sm font-extrabold shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 border border-orange-300/40 group"
          >
            <Utensils className="w-4 h-4 text-white" />
            <span>Explore Digital Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-[#E65100] text-[#D9381E] text-sm font-extrabold hover:bg-[#FFF0E5] transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#E65100]" />
            <span>Book Rooftop Table</span>
          </button>
        </div>

        {/* Highlight Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6">
          <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 text-left border border-orange-100 shadow-sm">
            <div className="p-2.5 rounded-xl bg-[#FFF0E5] text-[#D9381E]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#2C1810]">Fast Delivery</p>
              <p className="text-[10px] text-[#6E5D53] font-medium">Alpha 1 Outlet</p>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 text-left border border-orange-100 shadow-sm">
            <div className="p-2.5 rounded-xl bg-[#E8F5E9] text-[#2E7D32]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#2C1810]">100% Fresh</p>
              <p className="text-[10px] text-[#6E5D53] font-medium">Farm Ingredients</p>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 text-left border border-orange-100 shadow-sm">
            <div className="p-2.5 rounded-xl bg-[#FFF0E5] text-[#E65100]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#2C1810]">Rooftop Terrace</p>
              <p className="text-[10px] text-[#6E5D53] font-medium">Beta 1 Gr Noida</p>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-2xl flex items-center gap-3 text-left border border-orange-100 shadow-sm">
            <div className="p-2.5 rounded-xl bg-[#E8F5E9] text-[#2E7D32]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#2C1810]">WhatsApp Order</p>
              <p className="text-[10px] text-[#6E5D53] font-medium">Direct Dispatch</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
