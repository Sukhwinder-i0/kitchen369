"use client";

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DigitalMenu } from '@/components/DigitalMenu';
import { AmbienceShowcase } from '@/components/AmbienceShowcase';
import { PitchSolutions } from '@/components/PitchSolutions';
import { Footer } from '@/components/Footer';
import { TableReservationModal } from '@/components/TableReservationModal';
import { AiDishConcierge } from '@/components/AiDishConcierge';
import { CartDrawer } from '@/components/CartDrawer';

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Cart state: { [itemId]: quantity }
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const handleAddToCart = (id: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <main className="min-h-screen bg-[#0d0806] text-[#faf6f0] flex flex-col justify-between">
      
      {/* Header Navigation */}
      <Header
        onOpenReservation={() => setReservationOpen(true)}
        onOpenConcierge={() => setConciergeOpen(true)}
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
      />

      {/* Hero Banner */}
      <Hero onOpenReservation={() => setReservationOpen(true)} />

      {/* Interactive Digital Menu */}
      <DigitalMenu
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onOpenCartDrawer={() => setCartDrawerOpen(true)}
      />

      {/* Ambience & Outlet Gallery Showcase */}
      <AmbienceShowcase />

      {/* Executive Solutions & Pitch Deck Suite */}
      <PitchSolutions />

      {/* Footer & Location Details */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <TableReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <AiDishConcierge
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </main>
  );
}
