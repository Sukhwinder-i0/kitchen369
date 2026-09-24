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
    <header className="sticky top-0 z-50 glass-panel border-b border-[#5c1600]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4af37]/60 group-hover:scale-105 transition-transform">
              <Image 
                src="/images/logo.jpg" 
                alt="Farmers Kitchen Logo" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight gold-gradient-text">
                FARMERS KITCHEN
              </span>
              <span className="text-[10px] sm:text-xs text-[#c4b5a5] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#d4af37]" /> Noida & Greater Noida
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <a href="#menu" className="text-[#faf6f0] hover:text-[#d4af37] transition-colors">
              Digital Menu
            </a>
            <a href="#ambience" className="text-[#faf6f0] hover:text-[#d4af37] transition-colors">
              Rooftop & Dining
            </a>
            <a href="#locations" className="text-[#faf6f0] hover:text-[#d4af37] transition-colors">
              Outlets
            </a>
            <a href="#pitch-solutions" className="text-[#d4af37] hover:underline font-semibold flex items-center gap-1">
              Owner Pitch & ROI
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone quick call */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#1c110d] border border-[#5c1600] text-xs text-[#faf6f0] hover:border-[#d4af37] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            {/* Concierge Button */}
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#2a1610] text-[#f3e5ab] text-xs font-semibold border border-[#d4af37]/40 hover:bg-[#5c1600] transition-all shadow-sm"
            >
              <span>Dish Finder</span>
            </button>

            {/* Table Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full brand-gradient-bg text-white text-xs font-semibold shadow-lg hover:brightness-110 transition-all border border-[#d4af37]/30"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Reserve Table</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#2a1610] border border-[#d4af37]/40 text-[#faf6f0] hover:bg-[#5c1600] transition-all"
              title="View Order"
            >
              <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#5c1600] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-[#d4af37]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-[#2a1610] border border-[#d4af37]/40 text-[#faf6f0]"
            >
              <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#5c1600] text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-[#d4af37]">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1c110d] text-[#faf6f0] border border-[#5c1600]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 px-2 border-t border-[#5c1600]/40 flex flex-col gap-3 glass-panel rounded-b-2xl mt-1 animate-in fade-in">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#2a1610] text-sm text-[#faf6f0]"
            >
              Digital Menu
            </a>
            <a
              href="#ambience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#2a1610] text-sm text-[#faf6f0]"
            >
              Rooftop & Dining
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#2a1610] text-sm text-[#faf6f0]"
            >
              Outlets
            </a>
            <a
              href="#pitch-solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-[#2a1610] text-sm text-[#d4af37] font-semibold"
            >
              Owner Solutions & Pitch
            </a>

            <div className="pt-2 border-t border-[#5c1600]/40 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenConcierge(); }}
                className="w-full py-2.5 rounded-lg bg-[#1c110d] text-[#f3e5ab] text-xs font-medium border border-[#d4af37]/30 flex items-center justify-center gap-2"
              >
                <span>AI Dish Finder</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
                className="w-full py-2.5 rounded-lg brand-gradient-bg text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                <span>Reserve Dine-In Table</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
