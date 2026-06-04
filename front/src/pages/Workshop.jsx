import React from 'react';

function Workshop() {
  const workshops = [
    {
      title: "Initiation au Tournage",
      duration: "2 heures",
      price: "50 €",
      img: "/CERAMIQUE - PHOTO 1.jpg",
      desc: "Découvrez les sensations du tour de potier et façonnez vos premières pièces uniques accompagnées d'un café de spécialité."
    },
    {
      title: "Modelage Libre & Café",
      duration: "2 heures 30",
      price: "45 €",
      img: "/CERAMIQUE - PHOTO 2.jpg",
      desc: "Laissez libre cours à votre imagination en façonnant bols, tasses ou vases à la main avec les techniques du pincé et du colombin."
    },
    {
      title: "Atelier Émaillage Avancé",
      duration: "1 heure 30",
      price: "35 €",
      img: "/CERAMIQUE - PHOTO 3.jpg",
      desc: "Apprenez à appliquer les couleurs et textures de verre sur vos pièces déjà cuites pour leur donner leur éclat final."
    }
  ];

  return (
    <div style={{ backgroundColor: '#F7F0E7' }} className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-['Outfit']">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 style={{ color: '#58604C' }} className="text-5xl md:text-6xl font-['Duper'] font-bold mb-4">Nos Ateliers Céramique</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Prenez le temps de créer de vos mains dans une ambiance calme et chaleureuse guidée par nos artisans.</p>
        </div>

        {/* Grille Ateliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((w, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden border border-white/20 shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1">
              <div className="h-64 relative overflow-hidden bg-neutral-100">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <span className="absolute top-4 right-4 bg-[#e9d7c1] text-[#58604C] font-bold px-3 py-1 rounded-full text-sm">
                  {w.duration}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 style={{ color: '#58604C' }} className="font-bold text-xl">{w.title}</h3>
                  <span style={{ color: '#58604C', backgroundColor: 'rgba(88, 96, 76, 0.05)' }} className="font-bold text-lg px-2 py-1 rounded-md">
                    {w.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{w.desc}</p>
                <button className="w-full py-3 bg-[#58604C] text-[#e9d7c1] font-bold rounded-xl transition-all hover:opacity-90 active:scale-95">
                  Réserver un atelier
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Workshop;