import React from 'react';
export default function Menu() {
  return (
    <div className="min-h-screen bg-[#fcf8f2] pt-32 px-6 text-[#556046]">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-5xl mb-12">La Carte</h1>
        <div className="space-y-10 text-left">
          <div className="border-b border-[#556046]/20 pb-4">
            <h2 className="font-serif text-2xl mb-4">Cafés de spécialité</h2>
            <div className="flex justify-between py-2"><span>Flat White</span><span>4.50 €</span></div>
            <div className="flex justify-between py-2"><span>V60 Filter</span><span>5.00 €</span></div>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-4">Douceurs</h2>
            <div className="flex justify-between py-2"><span>Banana Bread</span><span>4.50 €</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}