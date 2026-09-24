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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E5] border border-[#FFC8A8] text-xs font-extrabold text-[#D9381E] shadow-xs">
          <span>Executive Solution Pitch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-[#2C1810]">
          Digital Solutions Beyond A <span className="gold-gradient-text font-serif italic">Static Website</span>
        </h2>
        <p className="text-sm sm:text-base text-[#6E5D53] font-medium">
          When pitching to Kitchen369 owners, present these 4 revenue-driving digital solutions to transform their restaurant operations.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Solution 1: Zero-Commission WhatsApp Order Engine */}
        <div className="bg-white p-8 rounded-3xl border border-[#FFE4D6] shadow-sm hover:shadow-md space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#FFF0E5] text-[#D9381E] border border-[#FFC8A8]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] border border-green-200 text-[10px] font-extrabold">
                HIGH ROI SOLUTION
              </span>
            </div>

            <div>
              <h3 className="text-xl font-black text-[#2C1810]">1. Direct WhatsApp Delivery Engine</h3>
              <p className="text-xs text-[#E65100] font-bold mt-0.5">Bypass 25-30% Swiggy & Zomato Commission</p>
              <p className="text-xs text-[#6E5D53] mt-2 leading-relaxed font-medium">
                Allow regular Greater Noida customers to place delivery orders directly on your website. Cart details with item totals & address auto-generate in WhatsApp for instant fulfillment.
              </p>
            </div>

            {/* Interactive Savings Calculator */}
            <div className="p-4.5 rounded-2xl bg-[#FFF9F2] border border-[#FFD8BE] space-y-4">
              <span className="text-[11px] font-extrabold text-[#E65100] uppercase tracking-wider block">
                Interactive Commission Savings Calculator
              </span>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-[#6E5D53] mb-1 font-semibold">
                    <span>Daily Delivery Orders:</span>
                    <strong className="text-[#2C1810] font-extrabold">{dailyOrders} orders/day</strong>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={dailyOrders}
                    onChange={(e) => setDailyOrders(Number(e.target.value))}
                    className="w-full accent-[#E65100]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[#6E5D53] mb-1 font-semibold">
                    <span>Average Order Value:</span>
                    <strong className="text-[#2C1810] font-extrabold">₹{avgOrderValue}</strong>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="1500"
                    step="50"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full accent-[#E65100]"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FFF0E5] border border-[#FFC8A8] flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#6E5D53] font-bold">Monthly Commission Saved:</p>
                  <p className="text-xl font-black text-[#2E7D32]">₹{monthlyCommissionPaid.toLocaleString('en-IN')}/mo</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#6E5D53] font-bold">Yearly Savings:</p>
                  <p className="text-sm font-black text-[#D9381E]">₹{yearlySavingsWithDirectOrdering.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 2: Interactive Catering & Event Cost Calculator */}
        <div className="bg-white p-8 rounded-3xl border border-[#FFE4D6] shadow-sm hover:shadow-md space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#FFF0E5] text-[#D9381E] border border-[#FFC8A8]">
                <Calculator className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FFF0E5] text-[#E65100] border border-[#FFC8A8] text-[10px] font-extrabold">
                EVENT REVENUE BOOSTER
              </span>
            </div>

            <div>
              <h3 className="text-xl font-black text-[#2C1810]">2. Instant Catering & Party Estimator</h3>
              <p className="text-xs text-[#E65100] font-bold mt-0.5">Capture High-Ticket Corporate & Rooftop Bookings</p>
              <p className="text-xs text-[#6E5D53] mt-2 leading-relaxed font-medium">
                Corporate clients & party hosts can select guest count and menu packages right on the website to receive an instant catering quote.
              </p>
            </div>

            {/* Interactive Catering Widget */}
            <div className="p-4.5 rounded-2xl bg-[#FFF9F2] border border-[#FFD8BE] space-y-4">
              <span className="text-[11px] font-extrabold text-[#E65100] uppercase tracking-wider block">
                Live Party Budget Estimator
              </span>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-[#6E5D53] mb-1 font-semibold">
                    <span>Number of Guests:</span>
                    <strong className="text-[#2C1810] font-extrabold">{cateringGuests} Guests</strong>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="300"
                    step="5"
                    value={cateringGuests}
                    onChange={(e) => setCateringGuests(Number(e.target.value))}
                    className="w-full accent-[#E65100]"
                  />
                </div>

                <div>
                  <label className="block text-[#6E5D53] mb-1 font-bold">Menu Tier Package:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setCateringTier('standard')}
                      className={`py-1.5 rounded-lg text-[10px] font-extrabold border transition-all ${
                        cateringTier === 'standard'
                          ? 'bg-[#D9381E] text-white border-[#D9381E]'
                          : 'bg-white text-[#6E5D53] border-[#FFD8BE]'
                      }`}
                    >
                      Standard (₹450/p)
                    </button>
                    <button
                      onClick={() => setCateringTier('premium')}
                      className={`py-1.5 rounded-lg text-[10px] font-extrabold border transition-all ${
                        cateringTier === 'premium'
                          ? 'bg-[#D9381E] text-white border-[#D9381E]'
                          : 'bg-white text-[#6E5D53] border-[#FFD8BE]'
                      }`}
                    >
                      Premium (₹650/p)
                    </button>
                    <button
                      onClick={() => setCateringTier('royal')}
                      className={`py-1.5 rounded-lg text-[10px] font-extrabold border transition-all ${
                        cateringTier === 'royal'
                          ? 'bg-[#D9381E] text-white border-[#D9381E]'
                          : 'bg-white text-[#6E5D53] border-[#FFD8BE]'
                      }`}
                    >
                      Royal (₹950/p)
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FFF0E5] border border-[#FFC8A8] flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#6E5D53] font-bold">Estimated Party Package:</p>
                  <p className="text-xl font-black text-[#D9381E]">₹{estimatedCateringTotal.toLocaleString('en-IN')}</p>
                </div>
                <button
                  onClick={() => {
                    const msg = `Hello Kitchen369! I would like to inquire about catering for ${cateringGuests} guests (${cateringTier.toUpperCase()} Package ~ ₹${estimatedCateringTotal}). Please share details.`;
                    window.open(`https://wa.me/91${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                  className="px-3 py-2 rounded-xl brand-gradient-bg text-white text-[11px] font-extrabold flex items-center gap-1 hover:brightness-110 shadow-sm"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 3: QR Code Table Top Ordering */}
        <div className="bg-white p-8 rounded-3xl border border-[#FFE4D6] shadow-sm hover:shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-[#FFF0E5] text-[#D9381E] border border-[#FFC8A8]">
              <QrCode className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#FFF0E5] text-[#E65100] border border-[#FFC8A8] text-[10px] font-extrabold">
              TABLE EFFICIENCY
            </span>
          </div>

          <h3 className="text-xl font-black text-[#2C1810]">3. QR Code Rooftop Table Menu</h3>
          <p className="text-xs text-[#E65100] font-bold">Zero Waiter Delay for Beta 1 Dine-In Guests</p>
          <p className="text-xs text-[#6E5D53] leading-relaxed font-medium">
            Guests at Beta 1 scan a table QR code stand. The full digital menu opens instantly on their phone, allowing them to add extra breads, drinks, and desserts without waiting for staff.
          </p>

          <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#FFD8BE] flex items-center gap-4 text-xs text-[#2C1810]">
            <div className="w-16 h-16 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center border border-[#FFD8BE]">
              <QrCode className="w-12 h-12 text-[#D9381E]" />
            </div>
            <div className="space-y-1">
              <p className="font-extrabold text-[#2C1810]">Table #04 QR Active</p>
              <p className="text-[11px] text-[#6E5D53] font-medium">Speeds up order placement by 40% & increases average bill value by 18%.</p>
            </div>
          </div>
        </div>

        {/* Solution 4: Google Review & Loyalty Engine */}
        <div className="bg-white p-8 rounded-3xl border border-[#FFE4D6] shadow-sm hover:shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-[#FFF0E5] text-[#D9381E] border border-[#FFC8A8]">
              <Star className="w-6 h-6 fill-[#E67E22] text-[#E67E22]" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#FFF0E5] text-[#E65100] border border-[#FFC8A8] text-[10px] font-extrabold">
              REPUTATION ENGINE
            </span>
          </div>

          <h3 className="text-xl font-black text-[#2C1810]">4. Google Review & Loyalty Booster</h3>
          <p className="text-xs text-[#E65100] font-bold">Automated 5-Star Review Growth System</p>
          <p className="text-xs text-[#6E5D53] leading-relaxed font-medium">
            Automated WhatsApp message sent after dining that rewards guests with a 10% discount coupon on their next visit when they post a 5-star Google review.
          </p>

          <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#FFD8BE] space-y-2 text-xs">
            <div className="flex items-center justify-between text-[#2C1810]">
              <span className="font-bold text-[#E65100]">Google Rating Growth:</span>
              <span className="font-mono text-[#2E7D32] font-black">4.2★ ➔ 4.9★</span>
            </div>
            <p className="text-[11px] text-[#6E5D53] font-medium">
              Higher Google Map rankings drive over 500+ new walk-in diners to Beta 1 every month!
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
