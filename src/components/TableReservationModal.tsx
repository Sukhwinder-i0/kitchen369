"use client";

import React, { useState } from 'react';
import { RESTAURANT_INFO } from '@/data/restaurantData';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, MessageSquare } from 'lucide-react';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2',
    seating: 'Rooftop Terrace (Beta 1)',
    occasion: 'None',
    specialRequest: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'K369-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);
    setSubmitted(true);
  };

  const handleWhatsAppNotify = () => {
    const text = `Hello Kitchen369! I would like to confirm my table reservation:\n\n*Booking ID:* ${bookingId}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Guests:* ${formData.guests}\n*Seating:* ${formData.seating}\n*Occasion:* ${formData.occasion}\n*Requests:* ${formData.specialRequest || 'None'}`;
    window.open(`https://wa.me/91${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border border-[#FFE4D6] shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FFF5EA] text-[#6E5D53] hover:text-[#2C1810] border border-[#FFD8BE]"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-extrabold text-[#E65100] uppercase tracking-wider">Beta 1 Dine-In</span>
              <h3 className="text-2xl font-black text-[#2C1810]">Reserve a Table</h3>
              <p className="text-xs text-[#6E5D53] font-medium">
                Book your rooftop terrace table or fine dining cane lounge.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D53] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:border-[#E65100] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D53] mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:border-[#E65100] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D53] mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:border-[#E65100] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D53] mb-1">Time Slot</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:border-[#E65100] focus:outline-none"
                  >
                    <option value="12:30">12:30 PM</option>
                    <option value="13:30">01:30 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="20:30">08:30 PM</option>
                    <option value="21:30">09:30 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D53] mb-1">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:border-[#E65100] focus:outline-none"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8+">8+ Party</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#6E5D53] mb-1">Seating Area</label>
                <select
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:border-[#E65100] focus:outline-none"
                >
                  <option value="Rooftop Terrace (Beta 1)">Rooftop Outdoor Terrace (Starlight Ambient)</option>
                  <option value="Indoor Cane Lounge">Indoor Fine Dining (Cane Lounge)</option>
                  <option value="Private Dining Area">Private Family Dining Area</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#6E5D53] mb-1">Special Occasion</label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:border-[#E65100] focus:outline-none"
                >
                  <option value="Casual Dinner">Casual Dining / Regular</option>
                  <option value="Birthday Celebration">Birthday Special Decor</option>
                  <option value="Anniversary Date">Anniversary Candlelight Setup</option>
                  <option value="Corporate Dinner">Corporate Business Gathering</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl brand-gradient-bg text-white text-xs font-extrabold hover:brightness-110 shadow-md transition-all"
              >
                Confirm Table Reservation
              </button>
            </form>
          </>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] border-2 border-green-500 flex items-center justify-center mx-auto text-[#2E7D32] shadow-sm">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#2E7D32] uppercase tracking-wider">Reservation Confirmed</span>
              <h3 className="text-2xl font-black text-[#2C1810]">See You Soon!</h3>
              <p className="text-xs text-[#6E5D53]">
                Booking Reference Code: <span className="font-mono font-bold text-[#D9381E]">{bookingId}</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#FFD8BE] text-xs text-left space-y-1.5 text-[#2C1810] font-medium">
              <p><strong className="text-[#E65100]">Guest:</strong> {formData.name}</p>
              <p><strong className="text-[#E65100]">Date & Time:</strong> {formData.date} at {formData.time}</p>
              <p><strong className="text-[#E65100]">Seating:</strong> {formData.seating}</p>
              <p><strong className="text-[#E65100]">Location:</strong> Kitchen369, Beta 1 Outlet</p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleWhatsAppNotify}
                className="w-full py-3 rounded-2xl bg-[#25D366] text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send Booking Slip on WhatsApp</span>
              </button>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="w-full py-2.5 rounded-2xl bg-[#FFF5EA] text-[#6E5D53] text-xs font-bold hover:text-[#2C1810]"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
