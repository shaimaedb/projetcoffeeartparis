import React from 'react';

const DUMMY_PRODUCTS = [
  { id: 1, name: 'Tasse en Grès Sablé', price: 28, category: 'Céramique', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Café Éthiopie - Kochere (250g)', price: 14.5, category: 'Café', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Pichet à Lait Artisanal', price: 42, category: 'Céramique', image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80&w=400' },
];

export default function Boutique({ addToCart }) {
  return (
    <div className="bg-[#fbf9f6] min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-light tracking-wide text-center mb-12">La Boutique en Ligne</h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {DUMMY_PRODUCTS.map(product => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-sm overflow-hidden group shadow-sm flex flex-col justify-between">
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute top-3 left-3 bg-[#2c2520] text-white text-[10px] uppercase tracking-widest px-2 py-1">{product.category}</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif text-lg text-gray-950 mb-1">{product.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{product.price.toFixed(2)} €</p>
                <button onClick={() => addToCart(product)} className="w-full bg-[#2c2520] text-white text-xs uppercase tracking-wider py-2 font-semibold hover:bg-black transition">
                  Ajouter au Panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}