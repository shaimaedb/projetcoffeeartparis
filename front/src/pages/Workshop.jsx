import React from 'react';
export default function Workshop() {
  return (
    <div className="min-h-screen bg-[#fcf8f2] pt-32 px-6">
      <h1 className="font-serif text-5xl text-center text-[#556046] mb-16">Nos Ateliers</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white p-8 rounded-2xl flex justify-between items-center shadow-sm">
          <div>
            <h3 className="font-serif text-2xl">Initiation au Tournage</h3>
            <p className="text-gray-500 text-sm">Samedi 13 Juin - 4 places restantes</p>
          </div>
          <button className="bg-[#b1bfa3] px-6 py-2 rounded-full text-[#556046] font-medium">Réserver</button>
        </div>
      </div>
    </div>
  );
}