"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_IMAGES, RESTAURANT_INFO } from '@/data/restaurantData';
import { MapPin, Phone, Star, Sparkles, X, ChevronLeft, ChevronRight, Clock, Navigation } from 'lucide-react';

export const AmbienceShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="ambience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
          Experience Atmosphere & Fine Dining
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#faf6f0]">
          Rooftop Terrace & <span className="gold-gradient-text font-serif italic">Culinary Gallery</span>
        </h2>
        <p className="text-sm sm:text-base text-[#c4b5a5]">
          Step into our starlight outdoor terrace in Surajpur or savor our chef-crafted gourmet spreads delivered hot from Sector 73.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className="group relative h-72 rounded-3xl overflow-hidden glass-card cursor-pointer border border-[#d4af37]/15 hover:border-[#d4af37]/40 transition-all shadow-lg"
          >
            <Image
              src={img.url}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0806] via-[#0d0806]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

            {/* Badge Overlay */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full glass-panel border border-[#d4af37]/30 text-[10px] font-bold text-[#f3e5ab] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#d4af37]" /> {img.location}
              </span>
            </div>

            {/* Info Text */}
            <div className="absolute bottom-4 left-4 right-4 space-y-1">
              <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                {img.title}
              </h3>
              <p className="text-xs text-[#c4b5a5] line-clamp-1">
                {img.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#1c110d] text-white hover:bg-[#5c1600] border border-[#d4af37]"
          >
            <X className="w-6 h-6 text-[#d4af37]" />
          </button>

          <button
            onClick={() => setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : GALLERY_IMAGES.length - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1c110d] text-white hover:bg-[#5c1600] border border-[#d4af37]"
          >
            <ChevronLeft className="w-6 h-6 text-[#d4af37]" />
          </button>

          <div className="relative max-w-4xl w-full h-[70vh] rounded-3xl overflow-hidden glass-panel border border-[#d4af37]/40">
            <Image
              src={GALLERY_IMAGES[selectedImage].url}
              alt={GALLERY_IMAGES[selectedImage].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-center space-y-1">
              <span className="text-xs text-[#d4af37] font-semibold">{GALLERY_IMAGES[selectedImage].location}</span>
              <h4 className="text-xl font-bold text-white">{GALLERY_IMAGES[selectedImage].title}</h4>
              <p className="text-xs text-[#c4b5a5]">{GALLERY_IMAGES[selectedImage].subtitle}</p>
            </div>
          </div>

          <button
            onClick={() => setSelectedImage((prev) => (prev! < GALLERY_IMAGES.length - 1 ? prev! + 1 : 0))}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1c110d] text-white hover:bg-[#5c1600] border border-[#d4af37]"
          >
            <ChevronRight className="w-6 h-6 text-[#d4af37]" />
          </button>
        </div>
      )}

      {/* Dual Locations Cards */}
      <div id="locations" className="scroll-mt-24 pt-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">Visit or Order</span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#faf6f0]">Our Dual Outlets</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Surajpur Dine-In */}
          <div className="glass-card p-8 rounded-3xl border border-[#d4af37]/20 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#5c1600] text-[#f3e5ab] text-xs font-bold border border-[#d4af37]/40">
                  DINE-IN & ROOFTOP
                </span>
                <span className="text-xs text-[#d4af37] font-semibold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#d4af37]" /> 4.8 Rating
                </span>
              </div>

              <h4 className="text-2xl font-bold text-[#faf6f0]">Surajpur Outlet</h4>
              <p className="text-xs text-[#c4b5a5] leading-relaxed">
                Enjoy open-air rooftop dining, starlight terrace seating, fine dining cane chairs, private family lounges, and full table service.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#faf6f0]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Surajpur, Greater Noida, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Open 11:00 AM – 11:30 PM (Daily)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>+91 97171 76252</span>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=Surajpur+Greater+Noida+Farmers+Kitchen`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl brand-gradient-bg text-white text-xs font-bold text-center flex items-center justify-center gap-2 hover:brightness-110 transition-all border border-[#d4af37]/40"
            >
              <Navigation className="w-4 h-4 text-[#d4af37]" />
              <span>Get Directions to Surajpur</span>
            </a>
          </div>

          {/* Sector 73 Delivery */}
          <div className="glass-card p-8 rounded-3xl border border-[#d4af37]/20 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#2a1610] text-[#d4af37] text-xs font-bold border border-[#d4af37]/40">
                  EXPRESS DELIVERY HUB
                </span>
                <span className="text-xs text-green-400 font-semibold flex items-center gap-1">
                  • 30-Min Delivery
                </span>
              </div>

              <h4 className="text-2xl font-bold text-[#faf6f0]">Sector 73 Outlet</h4>
              <p className="text-xs text-[#c4b5a5] leading-relaxed">
                Dedicated cloud kitchen optimized for superfast doorstep delivery across Sector 73, Sector 72, Sector 120, and central Noida.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#faf6f0]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>Sector 73, Noida, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Delivery Active 11:00 AM – 11:30 PM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>+91 97171 76252</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={RESTAURANT_INFO.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-2xl bg-[#fc8019] text-white text-xs font-bold text-center hover:opacity-90 transition-opacity shadow-md"
              >
                Order on Swiggy
              </a>
              <a
                href={RESTAURANT_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-2xl bg-[#cb202d] text-white text-xs font-bold text-center hover:opacity-90 transition-opacity shadow-md"
              >
                Order on Zomato
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
