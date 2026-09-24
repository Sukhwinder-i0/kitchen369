"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { RESTAURANT_INFO } from '@/data/restaurantData';
import { Phone, Calendar, ShoppingBag, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenConcierge: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenReservation,
  onOpenConcierge,
  cartCount,
  onOpenCart
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#FFE4D6] shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#E65100]/30 group-hover:scale-105 transition-transform bg-[#FFFBF5] p-1 shadow-sm">
              <Image 
                src="/images/logo.svg" 
                alt="Kitchen369 Logo" 
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#2C1810]">
                KITCHEN<span className="text-[#D9381E]">369</span>
              </span>
              <span className="text-[10px] sm:text-xs text-[#6E5D53] flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-[#E65100]" /> Beta 1 & Alpha 1, Greater Noida
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold">
            <a href="#menu" className="text-[#2C1810] hover:text-[#D9381E] transition-colors">
              Digital Menu
            </a>
            <a href="#ambience" className="text-[#2C1810] hover:text-[#D9381E] transition-colors">
              Rooftop & Dining
            </a>
            <a href="#locations" className="text-[#2C1810] hover:text-[#D9381E] transition-colors">
              Outlets
            </a>
            <a href="#pitch-solutions" className="text-[#E65100] hover:text-[#D9381E] font-bold flex items-center gap-1">
              Owner Pitch & ROI
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone quick call */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFF5EA] border border-[#FFD8BE] text-xs font-bold text-[#2C1810] hover:border-[#E65100] transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#E65100]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            {/* Concierge Button */}
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FFF0E5] text-[#D9381E] text-xs font-bold border border-[#FFC8A8] hover:bg-[#FFE0CC] transition-all shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E65100]" />
              <span>Dish Finder</span>
            </button>

            {/* Table Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-4.5 py-2 rounded-full brand-gradient-bg text-white text-xs font-bold shadow-md hover:brightness-105 transition-all border border-orange-400/30"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Reserve Table</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#FFF0E5] border border-[#FFC8A8] text-[#D9381E] hover:bg-[#FFE0CC] transition-all shadow-xs"
              title="View Order"
            >
              <ShoppingBag className="w-5 h-5 text-[#E65100]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D9381E] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-[#FFF0E5] border border-[#FFC8A8] text-[#D9381E]"
            >
              <ShoppingBag className="w-5 h-5 text-[#E65100]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D9381E] text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#FFF5EA] text-[#2C1810] border border-[#FFD8BE]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 px-2 border-t border-[#FFE4D6] flex flex-col gap-3 bg-white/95 rounded-b-2xl mt-1 animate-in fade-in shadow-lg">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FFF5EA] text-sm font-semibold text-[#2C1810]"
            >
              Digital Menu
            </a>
            <a
              href="#ambience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FFF5EA] text-sm font-semibold text-[#2C1810]"
            >
              Rooftop & Dining
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#FFF5EA] text-sm font-semibold text-[#2C1810]"
            >
              Outlets
            </a>
            <a
              href="#pitch-solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-[#FFF0E5] text-sm text-[#D9381E] font-bold"
            >
              Owner Solutions & Pitch
            </a>

            <div className="pt-2 border-t border-[#FFE4D6] flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenConcierge(); }}
                className="w-full py-2.5 rounded-lg bg-[#FFF5EA] text-[#D9381E] text-xs font-bold border border-[#FFD8BE] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#E65100]" />
                <span>AI Dish Finder</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
                className="w-full py-2.5 rounded-lg brand-gradient-bg text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Reserve Dine-In Table</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
