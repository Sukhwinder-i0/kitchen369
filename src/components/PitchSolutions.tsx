"use client";

import React, { useState } from 'react';
import { PITCH_SOLUTIONS, RESTAURANT_INFO } from '@/data/restaurantData';
import { Calculator, QrCode, MessageSquare, Star, TrendingUp, ShieldCheck, ArrowRight, DollarSign, CheckCircle } from 'lucide-react';

export const PitchSolutions: React.FC = () => {
  // Calculator state for Commission Savings
  const [dailyOrders, setDailyOrders] = useState<number>(30);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(600);

  // Catering Estimator state
  const [cateringGuests, setCateringGuests] = useState<number>(50);
  const [cateringTier, setCateringTier] = useState<'standard' | 'premium' | 'royal'>('premium');

  // Calculations
  const monthlyDeliveryRevenue = dailyOrders * avgOrderValue * 30;
  const monthlyCommissionPaid = Math.round(monthlyDeliveryRevenue * 0.25);
  const yearlySavingsWithDirectOrdering = monthlyCommissionPaid * 12;

  const perPlateRates = { standard: 450, premium: 650, royal: 950 };
  const estimatedCateringTotal = cateringGuests * perPlateRates[cateringTier];

  return (
    <section id="pitch-solutions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5c1600] border border-[#d4af37]/40 text-xs font-bold text-[#f3e5ab]">
          <span>Executive Solution Pitch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#faf6f0]">
          Digital Solutions Beyond A <span className="gold-gradient-text font-serif italic">Static Website</span>
        </h2>
        <p className="text-sm sm:text-base text-[#c4b5a5]">
          When pitching to Farmers Kitchen owners, present these 4 revenue-driving digital solutions to transform their restaurant operations.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Solution 1: Zero-Commission WhatsApp Order Engine */}
        <div className="glass-card p-8 rounded-3xl border border-[#d4af37]/20 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#5c1600] text-[#d4af37] border border-[#d4af37]/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-green-950 text-green-400 border border-green-700/50 text-[10px] font-bold">
                HIGH ROI SOLUTION
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">1. Direct WhatsApp Delivery Engine</h3>
              <p className="text-xs text-[#d4af37] font-semibold mt-0.5">Bypass 25-30% Swiggy & Zomato Commission</p>
              <p className="text-xs text-[#c4b5a5] mt-2 leading-relaxed">
                Allow regular Noida customers to place delivery orders directly on your website. Cart details with item totals & address auto-generate in WhatsApp for instant fulfillment.
              </p>
            </div>

            {/* Interactive Savings Calculator */}
            <div className="p-4 rounded-2xl bg-[#1c110d] border border-[#5c1600] space-y-4">
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider block">
                Interactive Commission Savings Calculator
              </span>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-[#c4b5a5] mb-1">
                    <span>Daily Delivery Orders:</span>
                    <strong className="text-white">{dailyOrders} orders/day</strong>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={dailyOrders}
                    onChange={(e) => setDailyOrders(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[#c4b5a5] mb-1">
                    <span>Average Order Value:</span>
                    <strong className="text-white">₹{avgOrderValue}</strong>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="1500"
                    step="50"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#2a1610] border border-[#d4af37]/30 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#c4b5a5]">Monthly Commission Saved:</p>
                  <p className="text-xl font-black text-green-400">₹{monthlyCommissionPaid.toLocaleString('en-IN')}/mo</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#c4b5a5]">Yearly Savings:</p>
                  <p className="text-sm font-extrabold gold-gradient-text">₹{yearlySavingsWithDirectOrdering.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 2: Interactive Catering & Event Cost Calculator */}
        <div className="glass-card p-8 rounded-3xl border border-[#d4af37]/20 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#5c1600] text-[#d4af37] border border-[#d4af37]/30">
                <Calculator className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#2a1610] text-[#d4af37] border border-[#d4af37]/30 text-[10px] font-bold">
                EVENT REVENUE BOOSTER
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">2. Instant Catering & Party Estimator</h3>
              <p className="text-xs text-[#d4af37] font-semibold mt-0.5">Capture High-Ticket Corporate & Rooftop Bookings</p>
              <p className="text-xs text-[#c4b5a5] mt-2 leading-relaxed">
                Corporate clients & party hosts can select guest count and menu packages right on the website to receive an instant catering quote.
              </p>
            </div>

            {/* Interactive Catering Widget */}
            <div className="p-4 rounded-2xl bg-[#1c110d] border border-[#5c1600] space-y-4">
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider block">
                Live Party Budget Estimator
              </span>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-[#c4b5a5] mb-1">
                    <span>Number of Guests:</span>
                    <strong className="text-white">{cateringGuests} Guests</strong>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="300"
                    step="5"
                    value={cateringGuests}
                    onChange={(e) => setCateringGuests(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-[#c4b5a5] mb-1">Menu Tier Package:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setCateringTier('standard')}
                      className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all ${
                        cateringTier === 'standard'
                          ? 'bg-[#5c1600] text-white border-[#d4af37]'
                          : 'bg-[#0d0806] text-[#c4b5a5] border-[#5c1600]'
                      }`}
                    >
                      Standard (₹450/p)
                    </button>
                    <button
                      onClick={() => setCateringTier('premium')}
                      className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all ${
                        cateringTier === 'premium'
                          ? 'bg-[#5c1600] text-white border-[#d4af37]'
                          : 'bg-[#0d0806] text-[#c4b5a5] border-[#5c1600]'
                      }`}
                    >
                      Premium (₹650/p)
                    </button>
                    <button
                      onClick={() => setCateringTier('royal')}
                      className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all ${
                        cateringTier === 'royal'
                          ? 'bg-[#5c1600] text-white border-[#d4af37]'
                          : 'bg-[#0d0806] text-[#c4b5a5] border-[#5c1600]'
                      }`}
                    >
                      Royal (₹950/p)
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#2a1610] border border-[#d4af37]/30 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#c4b5a5]">Estimated Party Package:</p>
                  <p className="text-xl font-black text-[#d4af37]">₹{estimatedCateringTotal.toLocaleString('en-IN')}</p>
                </div>
                <button
                  onClick={() => {
                    const msg = `Hello Farmers Kitchen! I would like to inquire about catering for ${cateringGuests} guests (${cateringTier.toUpperCase()} Package ~ ₹${estimatedCateringTotal}). Please share details.`;
                    window.open(`https://wa.me/91${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                  className="px-3 py-2 rounded-xl brand-gradient-bg text-white text-[11px] font-bold flex items-center gap-1 hover:brightness-110"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 3: QR Code Table Top Ordering */}
        <div className="glass-card p-8 rounded-3xl border border-[#d4af37]/20 space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-[#5c1600] text-[#d4af37] border border-[#d4af37]/30">
              <QrCode className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#2a1610] text-[#d4af37] border border-[#d4af37]/30 text-[10px] font-bold">
              TABLE EFFICIENCY
            </span>
          </div>

          <h3 className="text-xl font-bold text-white">3. QR Code Rooftop Table Menu</h3>
          <p className="text-xs text-[#d4af37] font-semibold">Zero Waiter Delay for Surajpur Dine-In Guests</p>
          <p className="text-xs text-[#c4b5a5] leading-relaxed">
            Guests at Surajpur scan a table QR code stand. The full digital menu opens instantly on their phone, allowing them to add extra breads, drinks, and desserts without waiting for staff.
          </p>

          <div className="p-4 rounded-2xl bg-[#1c110d] border border-[#5c1600] flex items-center gap-4 text-xs text-[#faf6f0]">
            <div className="w-16 h-16 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center">
              <QrCode className="w-12 h-12 text-[#5c1600]" />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-white">Table #04 QR Active</p>
              <p className="text-[11px] text-[#c4b5a5]">Speeds up order placement by 40% & increases average bill value by 18%.</p>
            </div>
          </div>
        </div>

        {/* Solution 4: Google Review & Loyalty Engine */}
        <div className="glass-card p-8 rounded-3xl border border-[#d4af37]/20 space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-[#5c1600] text-[#d4af37] border border-[#d4af37]/30">
              <Star className="w-6 h-6 fill-[#d4af37]" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#2a1610] text-[#d4af37] border border-[#d4af37]/30 text-[10px] font-bold">
              REPUTATION ENGINE
            </span>
          </div>

          <h3 className="text-xl font-bold text-white">4. Google Review & Loyalty Booster</h3>
          <p className="text-xs text-[#d4af37] font-semibold">Automated 5-Star Review Growth System</p>
          <p className="text-xs text-[#c4b5a5] leading-relaxed">
            Automated WhatsApp message sent after dining that rewards guests with a 10% discount coupon on their next visit when they post a 5-star Google review.
          </p>

          <div className="p-4 rounded-2xl bg-[#1c110d] border border-[#5c1600] space-y-2 text-xs">
            <div className="flex items-center justify-between text-[#faf6f0]">
              <span className="font-bold text-[#d4af37]">Google Rating Growth:</span>
              <span className="font-mono text-green-400 font-bold">4.2★ ➔ 4.9★</span>
            </div>
            <p className="text-[11px] text-[#c4b5a5]">
              Higher Google Map rankings drive over 500+ new walk-in diners to Surajpur every month!
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
