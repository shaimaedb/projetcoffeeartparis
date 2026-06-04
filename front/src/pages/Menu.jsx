import React from 'react';

function Menu() {
  const categories = [
    {
      title: "Cafés de Spécialité",
      items: [
        { name: "Espresso", price: "2.50 €", desc: "Notes de chocolat noir et d'agrumes" },
        { name: "Double Espresso", price: "3.50 €", desc: "Extraction riche et équilibrée" },
        { name: "Flat White", price: "4.50 €", desc: "Double shot espresso et lait finement texturé" },
        { name: "Café Latte", price: "4.80 €", desc: "Espresso onctueux avec une mousse de lait soyeuse" }
      ]
    },
    {
      title: "Boissons Signatures",
      items: [
        { name: "Iced Matcha Latte", price: "5.50 €", desc: "Matcha de qualité cérémonielle d'Uji et lait frais" },
        { name: "Dirty Matcha", price: "6.00 €", desc: "Notre matcha signature surmonté d'un shot d'espresso" },
        { name: "Rose Latte", price: "5.80 €", desc: "Infusion délicate de pétales de rose et espresso" }
      ]
    },
    {
      title: "Pâtisseries Artisanales",
      items: [
        { name: "Cookie Tout Chocolat", price: "3.80 €", desc: "Moelleux à cœur, pépites de chocolat noir" },
        { name: "Banana Bread", price: "4.20 €", desc: "Toasté au beurre d'Isigny" },
        { name: "Scone Nature", price: "3.50 €", desc: "Servi avec crème fraîche et confiture maison" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#F7F0E7' }} className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-['Outfit']">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 style={{ color: '#58604C' }} className="text-5xl md:text-6xl font-['Duper'] font-bold mb-4">La Carte</h1>
          <p style={{ color: '#58604C' }} className="text-lg opacity-80">Savourer l'instant présent à travers nos sélections de cafés et douceurs.</p>
        </div>

        {/* Visuels du Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-3xl overflow-hidden h-64 shadow-md bg-neutral-100">
            <img src="/MENU PARTIE 1.jpg" alt="Menu Partie 1" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden h-64 shadow-md bg-neutral-100">
            <img src="/MENU PARTIE 2.jpg" alt="Menu Partie 2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Grille du Menu */}
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-sm">
              <h2 style={{ color: '#58604C' }} className="text-2xl font-bold mb-6 border-b border-[#58604C]/10 pb-2">{cat.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                    <span style={{ color: '#58604C', backgroundColor: 'rgba(88, 96, 76, 0.05)' }} className="font-bold px-3 py-1 rounded-lg flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Menu;