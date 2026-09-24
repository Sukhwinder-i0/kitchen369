"use client";

import React from 'react';
import Image from 'next/image';
import { RESTAURANT_INFO } from '@/data/restaurantData';
import { MapPin, Phone, Instagram, Clock, ExternalLink, Heart, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080504] border-t border-[#5c1600]/40 text-[#c4b5a5] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#5c1600]/30">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4af37]">
              <Image src="/images/logo.jpg" alt="Farmers Kitchen Logo" fill className="object-cover" />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight gold-gradient-text">
                FARMERS KITCHEN
              </span>
              <p className="text-[10px] text-[#d4af37] font-semibold">NOIDA & GREATER NOIDA</p>
            </div>
          </div>
          <p className="text-xs text-[#c4b5a5] leading-relaxed">
            Delivering authentic North Indian curries, char-grilled tandoori kebabs, and Chinese wok specialties. Visit our Surajpur starlight rooftop or order express to Sector 73.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={`https://instagram.com/farmerskitchennoida`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#1c110d] text-[#d4af37] hover:bg-[#5c1600] border border-[#5c1600] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <span className="text-xs text-[#faf6f0] font-semibold">@farmerskitchennoida</span>
          </div>
        </div>

        {/* Col 2: Outlets & Hours */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">Our Outlets</h4>
          <div className="space-y-2 text-xs">
            <div>
              <p className="font-bold text-white">Surajpur (Dine-in & Rooftop)</p>
              <p className="text-[11px] text-[#c4b5a5]">Surajpur, Greater Noida, UP</p>
            </div>
            <div className="pt-1">
              <p className="font-bold text-white">Sector 73 (Express Delivery Hub)</p>
              <p className="text-[11px] text-[#c4b5a5]">Sector 73, Noida, UP</p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-white">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span>{RESTAURANT_INFO.hours}</span>
            </div>
          </div>
        </div>

        {/* Col 3: Direct Ordering & Platforms */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">Online Ordering</h4>
          <div className="space-y-2.5 text-xs">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-white hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call: +91 97171 76252</span>
            </a>
            <a
              href={RESTAURANT_INFO.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#1c110d] text-white hover:border-[#d4af37] border border-[#5c1600] transition-all"
            >
              <span>Order on Swiggy</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
            </a>
            <a
              href={RESTAURANT_INFO.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#1c110d] text-white hover:border-[#d4af37] border border-[#5c1600] transition-all"
            >
              <span>Order on Zomato</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
            </a>
          </div>
        </div>

        {/* Col 4: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#menu" className="hover:text-white transition-colors">Digital Menu</a></li>
            <li><a href="#ambience" className="hover:text-white transition-colors">Rooftop Gallery</a></li>
            <li><a href="#locations" className="hover:text-white transition-colors">Dine-in vs Delivery Outlets</a></li>
            <li><a href="#pitch-solutions" className="text-[#d4af37] font-bold hover:underline">Owner Solution Pitch Suite</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c7b6c] gap-3">
        <p>© {new Date().getFullYear()} Farmers Kitchen Noida. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <Heart className="w-3.5 h-3.5 text-[#5c1600] fill-[#5c1600]" /> for Farmers Kitchen
        </p>
      </div>
    </footer>
  );
};
