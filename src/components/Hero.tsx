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
    location: "Surajpur, Greater Noida",
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
    location: "Surajpur Dine-In Outlet",
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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Image Slider with Ambient Gradient Overlay */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
          } transition-transform duration-7000`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0806] via-[#0d0806]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0806] via-transparent to-[#0d0806]/80" />
        </div>
      ))}

      {/* Decorative Brand Color Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#5c1600]/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Rating & Location Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <div className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#d4af37]/30 text-xs font-medium text-[#f3e5ab]">
            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <span>4.8 ★ Rated (1000+ Foodies)</span>
          </div>

          <div className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2 border border-[#5c1600] text-xs font-medium text-[#faf6f0]">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Surajpur (Dine-in) & Sector 73 (Delivery)</span>
          </div>
        </div>

        {/* Main Title Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#faf6f0] leading-tight">
            Authentic Flavors, <br className="hidden sm:block" />
            <span className="gold-gradient-text font-serif italic">Farm-Fresh</span> Culinary Elegance
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#c4b5a5] font-normal leading-relaxed">
            Experience the finest North Indian, Tandoori & Chinese delicacies in Noida. Enjoy our romantic rooftop starlight terrace at Surajpur or lightning-fast express delivery across Sector 73.
          </p>
        </div>

        {/* Dual Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full brand-gradient-bg text-white text-sm font-bold shadow-xl hover:shadow-[#5c1600]/50 transition-all flex items-center justify-center gap-3 border border-[#d4af37]/40 group"
          >
            <Utensils className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Digital Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-[#d4af37]/50 text-[#faf6f0] text-sm font-bold hover:bg-[#5c1600]/50 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>Book Rooftop Table</span>
          </button>
        </div>

        {/* Highlight Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6">
          <div className="glass-card p-3 rounded-2xl flex items-center gap-3 text-left">
            <div className="p-2 rounded-xl bg-[#5c1600]/40 text-[#d4af37]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#faf6f0]">Fast Delivery</p>
              <p className="text-[10px] text-[#c4b5a5]">Sector 73 Outlet</p>
            </div>
          </div>

          <div className="glass-card p-3 rounded-2xl flex items-center gap-3 text-left">
            <div className="p-2 rounded-xl bg-[#5c1600]/40 text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#faf6f0]">100% Fresh</p>
              <p className="text-[10px] text-[#c4b5a5]">Farm Ingredients</p>
            </div>
          </div>

          <div className="glass-card p-3 rounded-2xl flex items-center gap-3 text-left">
            <div className="p-2 rounded-xl bg-[#5c1600]/40 text-[#d4af37]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#faf6f0]">Rooftop Terrace</p>
              <p className="text-[10px] text-[#c4b5a5]">Surajpur Gr Noida</p>
            </div>
          </div>

          <div className="glass-card p-3 rounded-2xl flex items-center gap-3 text-left">
            <div className="p-2 rounded-xl bg-[#5c1600]/40 text-[#d4af37]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#faf6f0]">WhatsApp Order</p>
              <p className="text-[10px] text-[#c4b5a5]">Direct Dispatch</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
