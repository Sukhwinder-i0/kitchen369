"use client";

import React from 'react';
import Image from 'next/image';
import { RESTAURANT_INFO } from '@/data/restaurantData';
import { MapPin, Phone, Instagram, Clock, ExternalLink, Heart, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF5EA] border-t border-[#FFE4D6] text-[#6E5D53] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FFD8BE]">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#E65100]/40 bg-white p-1 shadow-xs">
              <Image src="/images/logo.svg" alt="Kitchen369 Logo" fill className="object-contain p-1" />
            </div>
            <div>
              <span className="text-xl font-black text-[#2C1810] tracking-tight">
                KITCHEN<span className="text-[#D9381E]">369</span>
              </span>
              <p className="text-[10px] text-[#E65100] font-extrabold">GREATER NOIDA</p>
            </div>
          </div>
          <p className="text-xs text-[#5A453A] leading-relaxed font-medium">
            Delivering authentic North Indian curries, char-grilled tandoori kebabs, and Chinese wok specialties. Visit our Beta 1 starlight rooftop or order express from Alpha 1.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={`https://instagram.com/kitchen369.official`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white text-[#D9381E] hover:bg-[#FFF0E5] border border-[#FFD8BE] transition-colors shadow-xs"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <span className="text-xs text-[#2C1810] font-extrabold">{RESTAURANT_INFO.instagram}</span>
          </div>
        </div>

        {/* Col 2: Outlets & Hours */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#E65100]">Our Outlets</h4>
          <div className="space-y-2.5 text-xs">
            <div>
              <p className="font-extrabold text-[#2C1810]">Beta 1 (Dine-in & Rooftop)</p>
              <p className="text-[11px] text-[#6E5D53] font-medium">{RESTAURANT_INFO.dineInAddress}</p>
            </div>
            <div className="pt-1">
              <p className="font-extrabold text-[#2C1810]">Alpha 1 (Express Delivery Hub)</p>
              <p className="text-[11px] text-[#6E5D53] font-medium">{RESTAURANT_INFO.deliveryAddress}</p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-[#2C1810] font-bold">
              <Clock className="w-4 h-4 text-[#E65100]" />
              <span>{RESTAURANT_INFO.hours}</span>
            </div>
          </div>
        </div>

        {/* Col 3: Direct Ordering & Platforms */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#E65100]">Online Ordering</h4>
          <div className="space-y-2.5 text-xs">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-[#2C1810] hover:text-[#D9381E] font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E65100]" />
              <span>Call: {RESTAURANT_INFO.phone}</span>
            </a>
            <a
              href={RESTAURANT_INFO.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white text-[#2C1810] hover:border-[#E65100] border border-[#FFD8BE] font-bold transition-all shadow-xs"
            >
              <span>Order on Swiggy</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E65100]" />
            </a>
            <a
              href={RESTAURANT_INFO.zomatoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white text-[#2C1810] hover:border-[#E65100] border border-[#FFD8BE] font-bold transition-all shadow-xs"
            >
              <span>Order on Zomato</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E65100]" />
            </a>
          </div>
        </div>

        {/* Col 4: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#E65100]">Navigation</h4>
          <ul className="space-y-2 text-xs font-semibold text-[#5A453A]">
            <li><a href="#menu" className="hover:text-[#D9381E] transition-colors">Digital Menu</a></li>
            <li><a href="#ambience" className="hover:text-[#D9381E] transition-colors">Rooftop Gallery</a></li>
            <li><a href="#locations" className="hover:text-[#D9381E] transition-colors">Dine-in vs Delivery Outlets</a></li>
            <li><a href="#pitch-solutions" className="text-[#D9381E] font-bold hover:underline">Owner Solution Pitch Suite</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7B6C] font-medium gap-3">
        <p>© {new Date().getFullYear()} Kitchen369 Greater Noida. All rights reserved.</p>
        <p className="flex items-center gap-1 font-semibold text-[#5A453A]">
          Crafted with <Heart className="w-3.5 h-3.5 text-[#D9381E] fill-[#D9381E]" /> for Kitchen369
        </p>
      </div>
    </footer>
  );
};
