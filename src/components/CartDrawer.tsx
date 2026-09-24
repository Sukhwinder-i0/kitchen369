"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MENU_ITEMS, RESTAURANT_INFO } from '@/data/restaurantData';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, MapPin, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [key: string]: number };
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart
}) => {
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);
  const items = cartEntries.map(([id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return { item, qty };
  }).filter((x) => x.item !== undefined);

  const subtotal = items.reduce((sum, x) => sum + (x.item!.price * x.qty), 0);
  const packagingFee = subtotal > 0 ? 30 : 0;
  const deliveryFee = deliveryType === 'delivery' && subtotal > 0 ? 40 : 0;
  const grandTotal = subtotal + packagingFee + deliveryFee;

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    let itemLines = items
      .map((x) => `• ${x.item!.name} x${x.qty} - ₹${x.item!.price * x.qty}`)
      .join('\n');

    const msg = `*NEW ONLINE ORDER - KITCHEN369*\n----------------------------------\n*Customer:* ${customerName || 'Valued Guest'}\n*Order Type:* ${deliveryType === 'delivery' ? 'Home Delivery (Alpha 1 Hub)' : 'Self Pickup (Beta 1 Outlet)'}\n${deliveryType === 'delivery' ? `*Address:* ${address || 'Greater Noida'}\n` : ''}\n*ITEMS ORDERED:*\n${itemLines}\n\n*Subtotal:* ₹${subtotal}\n*Packing Fee:* ₹${packagingFee}\n${deliveryType === 'delivery' ? `*Delivery Fee:* ₹${deliveryFee}\n` : ''}*GRAND TOTAL:* ₹${grandTotal}\n----------------------------------\nPlease confirm order & share payment UPI link.`;

    window.open(`https://wa.me/91${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in">
      <div className="w-full max-w-md h-full bg-white border-l border-[#FFE4D6] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#FFE4D6]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#E65100]" />
              <h3 className="text-xl font-black text-[#2C1810]">Your Food Order</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FFF5EA] text-[#6E5D53] hover:text-[#2C1810] border border-[#FFD8BE]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery / Pickup Toggle */}
          <div className="grid grid-cols-2 gap-2 my-4 p-1 rounded-2xl bg-[#FFF9F2] border border-[#FFD8BE]">
            <button
              onClick={() => setDeliveryType('delivery')}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                deliveryType === 'delivery'
                  ? 'bg-[#D9381E] text-white shadow-sm'
                  : 'text-[#6E5D53]'
              }`}
            >
              Delivery (Alpha 1)
            </button>
            <button
              onClick={() => setDeliveryType('pickup')}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                deliveryType === 'pickup'
                  ? 'bg-[#D9381E] text-white shadow-sm'
                  : 'text-[#6E5D53]'
              }`}
            >
              Takeaway (Beta 1)
            </button>
          </div>

          {/* Cart Item List */}
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#FFC8A8] mx-auto" />
              <p className="text-sm font-bold text-[#2C1810]">Your order cart is empty.</p>
              <p className="text-xs text-[#6E5D53]">Browse the digital menu and add delicious dishes.</p>
            </div>
          ) : (
            <div className="space-y-3 my-4 max-h-[40vh] overflow-y-auto pr-1">
              {items.map(({ item, qty }) => (
                <div
                  key={item!.id}
                  className="p-3 rounded-2xl bg-[#FFF9F2] border border-[#FFD8BE] flex items-center justify-between gap-3"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[#FFF5EA]">
                    <Image src={item!.image} alt={item!.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#2C1810] truncate">{item!.name}</h4>
                    <p className="text-xs font-black text-[#D9381E]">₹{item!.price * qty}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFF0E5] px-2 py-1 rounded-xl border border-[#FFC8A8]">
                    <button
                      onClick={() => onRemoveFromCart(item!.id)}
                      className="text-[#D9381E] hover:text-[#2C1810]"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-black text-[#2C1810]">{qty}</span>
                    <button
                      onClick={() => onAddToCart(item!.id)}
                      className="text-[#D9381E] hover:text-[#2C1810]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Action */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-[#FFE4D6] space-y-4">
            
            {/* Address Input */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:outline-none"
              />
              {deliveryType === 'delivery' && (
                <input
                  type="text"
                  placeholder="Delivery Address in Greater Noida..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#FFF9F2] text-xs font-semibold text-[#2C1810] border border-[#FFD8BE] focus:outline-none"
                />
              )}
            </div>

            {/* Billing breakdown */}
            <div className="space-y-1.5 text-xs text-[#6E5D53] font-medium">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="text-[#2C1810] font-bold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Packaging & Container:</span>
                <span className="text-[#2C1810] font-bold">₹{packagingFee}</span>
              </div>
              {deliveryType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Delivery Charge:</span>
                  <span className="text-[#2C1810] font-bold">₹{deliveryFee}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-[#FFE4D6] text-sm text-[#2C1810] font-black">
                <span>Grand Total:</span>
                <span className="text-[#D9381E] text-base font-black">₹{grandTotal}</span>
              </div>
            </div>

            {/* Direct WhatsApp Order CTA */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-md transition-all"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Send Order to WhatsApp (0% Fee)</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
