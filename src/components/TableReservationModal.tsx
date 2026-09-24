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
    seating: 'Rooftop Terrace (Surajpur)',
    occasion: 'None',
    specialRequest: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'FK-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);
    setSubmitted(true);
  };

  const handleWhatsAppNotify = () => {
    const text = `Hello Farmers Kitchen! I would like to confirm my table reservation:\n\n*Booking ID:* ${bookingId}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Guests:* ${formData.guests}\n*Seating:* ${formData.seating}\n*Occasion:* ${formData.occasion}\n*Requests:* ${formData.specialRequest || 'None'}`;
    window.open(`https://wa.me/91${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-[#d4af37]/40 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1c110d] text-[#c4b5a5] hover:text-white border border-[#5c1600]"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider">Surajpur Dine-In</span>
              <h3 className="text-2xl font-extrabold text-[#faf6f0]">Reserve a Table</h3>
              <p className="text-xs text-[#c4b5a5]">
                Book your rooftop terrace table or fine dining cane lounge.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#c4b5a5] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c110d] text-xs text-white border border-[#5c1600] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#c4b5a5] mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c110d] text-xs text-white border border-[#5c1600] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#c4b5a5] mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#1c110d] text-xs text-white border border-[#5c1600] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#c4b5a5] mb-1">Time Slot</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#1c110d] text-xs text-white border border-[#5c1600] focus:border-[#d4af37] focus:outline-none"
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
                  <label className="block text-[11px] font-semibold text-[#c4b5a5] mb-1">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-[#1c110d] text-xs text-white border border-[#5c1600] focus:border-[#d4af37] focus:outline-none"
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
                <label className="block text-[11px] font-semibold text-[#c4b5a5] mb-1">Seating Area</label>
                <select
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c110d] text-xs text-white border border-[#5c1600] focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="Rooftop Terrace (Surajpur)">Rooftop Outdoor Terrace (Starlight Ambient)</option>
                  <option value="Indoor Cane Lounge">Indoor Fine Dining (Cane Lounge)</option>
                  <option value="Private Dining Area">Private Family Dining Area</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#c4b5a5] mb-1">Special Occasion</label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c110d] text-xs text-white border border-[#5c1600] focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="Casual Dinner">Casual Dining / Regular</option>
                  <option value="Birthday Celebration">Birthday Special Decor</option>
                  <option value="Anniversary Date">Anniversary Candlelight Setup</option>
                  <option value="Corporate Dinner">Corporate Business Gathering</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl brand-gradient-bg text-white text-xs font-bold hover:brightness-110 shadow-lg border border-[#d4af37]/40 transition-all"
              >
                Confirm Table Reservation
              </button>
            </form>
          </>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#5c1600] border-2 border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37] shadow-lg">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">Reservation Confirmed</span>
              <h3 className="text-2xl font-extrabold text-white">See You Soon!</h3>
              <p className="text-xs text-[#c4b5a5]">
                Booking Reference Code: <span className="font-mono font-bold text-[#d4af37]">{bookingId}</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c110d] border border-[#5c1600] text-xs text-left space-y-1.5 text-[#faf6f0]">
              <p><strong className="text-[#d4af37]">Guest:</strong> {formData.name}</p>
              <p><strong className="text-[#d4af37]">Date & Time:</strong> {formData.date} at {formData.time}</p>
              <p><strong className="text-[#d4af37]">Seating:</strong> {formData.seating}</p>
              <p><strong className="text-[#d4af37]">Location:</strong> Farmers Kitchen, Surajpur Outlet</p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleWhatsAppNotify}
                className="w-full py-3 rounded-2xl bg-[#25d366] text-black font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Send Booking Slip on WhatsApp</span>
              </button>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="w-full py-2.5 rounded-2xl bg-[#1c110d] text-[#c4b5a5] text-xs font-semibold hover:text-white"
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
