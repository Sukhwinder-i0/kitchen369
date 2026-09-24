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
        <span className="text-xs font-bold uppercase tracking-widest text-[#E65100]">
          Experience Atmosphere & Fine Dining
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-[#2C1810]">
          Rooftop Terrace & <span className="gold-gradient-text font-serif italic">Culinary Gallery</span>
        </h2>
        <p className="text-sm sm:text-base text-[#6E5D53] font-medium">
          Step into our starlight outdoor terrace in Beta 1 or savor our chef-crafted gourmet spreads delivered hot from Alpha 1.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className="group relative h-72 rounded-3xl overflow-hidden bg-white cursor-pointer border border-[#FFE4D6] hover:border-[#E65100] transition-all shadow-xs hover:shadow-xl"
          >
            <Image
              src={img.url}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/30 to-transparent opacity-80 group-hover:opacity-65 transition-opacity" />

            {/* Badge Overlay */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-white/95 border border-white/40 text-[10px] font-bold text-[#E65100] flex items-center gap-1 shadow-sm">
                <MapPin className="w-3 h-3 text-[#E65100]" /> {img.location}
              </span>
            </div>

            {/* Info Text */}
            <div className="absolute bottom-4 left-4 right-4 space-y-1">
              <h3 className="text-lg font-black text-white group-hover:text-[#FFF0E5] transition-colors">
                {img.title}
              </h3>
              <p className="text-xs text-[#FFE4D6] line-clamp-1 font-medium">
                {img.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white text-[#2C1810] hover:bg-[#FFF0E5] border border-orange-200"
          >
            <X className="w-6 h-6 text-[#D9381E]" />
          </button>

          <button
            onClick={() => setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : GALLERY_IMAGES.length - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-[#2C1810] hover:bg-[#FFF0E5] border border-orange-200"
          >
            <ChevronLeft className="w-6 h-6 text-[#D9381E]" />
          </button>

          <div className="relative max-w-4xl w-full h-[70vh] rounded-3xl overflow-hidden bg-white border border-orange-200 shadow-2xl">
            <Image
              src={GALLERY_IMAGES[selectedImage].url}
              alt={GALLERY_IMAGES[selectedImage].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-center space-y-1">
              <span className="text-xs text-[#E67E22] font-bold">{GALLERY_IMAGES[selectedImage].location}</span>
              <h4 className="text-xl font-black text-white">{GALLERY_IMAGES[selectedImage].title}</h4>
              <p className="text-xs text-[#FFE4D6]">{GALLERY_IMAGES[selectedImage].subtitle}</p>
            </div>
          </div>

          <button
            onClick={() => setSelectedImage((prev) => (prev! < GALLERY_IMAGES.length - 1 ? prev! + 1 : 0))}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white text-[#2C1810] hover:bg-[#FFF0E5] border border-orange-200"
          >
            <ChevronRight className="w-6 h-6 text-[#D9381E]" />
          </button>
        </div>
      )}

      {/* Dual Locations Cards */}
      <div id="locations" className="scroll-mt-24 pt-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E65100]">Visit or Order</span>
          <h3 className="text-2xl sm:text-4xl font-black text-[#2C1810]">Our Dual Outlets</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Beta 1 Dine-In */}
          <div className="bg-white p-8 rounded-3xl border border-[#FFE4D6] shadow-sm hover:shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#FFF0E5] text-[#D9381E] text-xs font-extrabold border border-[#FFC8A8]">
                  DINE-IN & ROOFTOP
                </span>
                <span className="text-xs text-[#E67E22] font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#E67E22]" /> 4.8 Rating
                </span>
              </div>

              <h4 className="text-2xl font-black text-[#2C1810]">Beta 1 Outlet</h4>
              <p className="text-xs text-[#6E5D53] leading-relaxed font-medium">
                Enjoy open-air rooftop dining, starlight terrace seating, fine dining cane chairs, private family lounges, and full table service.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#2C1810] font-semibold">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                  <span>Beta 1, Greater Noida, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E65100] shrink-0" />
                  <span>Open 11:00 AM – 11:30 PM (Daily)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E65100] shrink-0" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=Beta+1+Greater+Noida+Kitchen369`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl brand-gradient-bg text-white text-xs font-extrabold text-center flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-sm"
            >
              <Navigation className="w-4 h-4 text-white" />
              <span>Get Directions to Beta 1</span>
            </a>
          </div>

          {/* Alpha 1 Delivery */}
          <div className="bg-white p-8 rounded-3xl border border-[#FFE4D6] shadow-sm hover:shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-extrabold border border-green-200">
                  EXPRESS DELIVERY HUB
                </span>
                <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                  • 30-Min Delivery
                </span>
              </div>

              <h4 className="text-2xl font-black text-[#2C1810]">Alpha 1 Outlet</h4>
              <p className="text-xs text-[#6E5D53] leading-relaxed font-medium">
                Dedicated cloud kitchen optimized for superfast doorstep delivery across Alpha 1, Alpha 2, Gamma 1, and Greater Noida.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#2C1810] font-semibold">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                  <span>Alpha 1, Greater Noida, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E65100] shrink-0" />
                  <span>Delivery Active 11:00 AM – 11:30 PM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E65100] shrink-0" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={RESTAURANT_INFO.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-2xl bg-[#fc8019] text-white text-xs font-bold text-center hover:opacity-90 transition-opacity shadow-sm"
              >
                Order on Swiggy
              </a>
              <a
                href={RESTAURANT_INFO.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-2xl bg-[#cb202d] text-white text-xs font-bold text-center hover:opacity-90 transition-opacity shadow-sm"
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
