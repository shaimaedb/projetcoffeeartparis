import React from 'react';
export default function Shop() {
  return (
    <div className="min-h-screen bg-[#fcf8f2] pt-32 px-6">
      <h1 className="font-serif text-5xl text-center text-[#556046] mb-16">La Boutique</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow-sm text-center">
            <div className="bg-gray-100 h-64 mb-4 rounded-xl"></div>
            <h3 className="font-serif text-lg">Produit Signature {i}</h3>
            <p className="text-[#556046] font-bold mt-2">25.00 €</p>
          </div>
        ))}
      </div>
    </div>
  );
}