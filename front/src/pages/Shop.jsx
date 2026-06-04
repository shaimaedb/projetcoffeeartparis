import React, { useState } from 'react';

function Shop() {
  const [filter, setFilter] = useState('Tous');

  const products = [
    {
      id: 1,
      name: "CEREMONIAL MATCHA",
      price: "30 €",
      cat: "Matcha",
      img: "https://res.cloudinary.com/dq7e5oadg/image/upload/v1776859738/coffee-arts-paris/products/oemk9vjy9uex0hj3twsr.png",
      desc: "Matcha d'exception récolté à Uji au Japon, 30g de poudre vert éclatant."
    },
    {
      id: 2,
      name: "Graphic Cotton Tote Bag",
      price: "20 €",
      cat: "Accessoires",
      img: "https://res.cloudinary.com/dq7e5oadg/image/upload/v1767385612/coffee-arts-paris/products/bbot6tlbkwypldnail24.png",
      desc: "Tote bag en coton naturel résistant au design graphique exclusif."
    },
    {
      id: 3,
      name: "Graphic Cotton Cap",
      price: "25 €",
      cat: "Accessoires",
      img: "https://res.cloudinary.com/dq7e5oadg/image/upload/v1767384973/coffee-arts-paris/products/nf0legoufzgqqdmwoq0f.png",
      desc: "Casquette broderie minimaliste ajustable Coffee Arts Paris."
    },
    {
      id: 4,
      name: "Tasse Céramique Artisanale",
      price: "18 €",
      cat: "Céramique",
      img: "/PRODUIT 1 - PARTIE 1.jpg",
      desc: "Tasse façonnée main au studio, glaçure mouchetée unique."
    }
  ];

  const filteredProducts = filter === 'Tous' ? products : products.filter(p => p.cat === filter);

  return (
    <div style={{ backgroundColor: '#F7F0E7' }} className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-['Outfit']">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 style={{ color: '#58604C' }} className="text-5xl md:text-6xl font-['Duper'] font-bold mb-4">La Boutique</h1>
          <p className="text-gray-600 text-lg">Retrouvez nos produits signatures et créations d'artisans chez vous.</p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center gap-4 mb-12">
          {['Tous', 'Matcha', 'Accessoires', 'Céramique'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                filter === category
                  ? 'bg-[#58604C] text-[#e9d7c1] shadow-md'
                  : 'bg-white/60 text-gray-700 hover:bg-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille Produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden flex items-center justify-center p-4">
                <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-gray-800 line-clamp-1">{p.name}</h3>
                  <span className="font-bold text-[#58604C] bg-[#58604C]/5 px-2 py-0.5 rounded text-sm flex-shrink-0">{p.price}</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-grow">{p.desc}</p>
                <button className="w-full py-2.5 border border-[#58604C] text-[#58604C] font-semibold text-sm rounded-xl transition-colors hover:bg-[#58604C] hover:text-[#e9d7c1]">
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Shop;