import React from 'react';

export default function Navbar({ setPage, cartCount }) {
  const links = [
    { name: 'Accueil', id: 'accueil' },
    { name: 'Carte', id: 'carte' },
    { name: 'Ateliers', id: 'ateliers' },
    { name: 'Boutique', id: 'boutique' },
    { name: 'Événements', id: 'evenements' },
    { name: 'Blog', id: 'blog' },
    { name: 'À propos', id: 'propos' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 bg-[#fbf9f6] border-b border-gray-200 z-50 px-6 py-4 flex justify-between items-center font-serif">
      <div className="text-xl font-bold tracking-widest text-[#2c2520] cursor-pointer" onClick={() => setPage('accueil')}>
        COFFEE ARTS PARIS
      </div>
      <div className="hidden md:flex space-x-6 text-sm uppercase tracking-wider text-gray-600">
        {links.map(link => (
          <button key={link.id} onClick={() => setPage(link.id)} className="hover:text-black transition">
            {link.name}
          </button>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => setPage('client')} className="text-sm uppercase tracking-wider text-gray-600 hover:text-black">
          Espace Client
        </button>
        <button onClick={() => setPage('admin')} className="text-sm bg-[#2c2520] text-white px-3 py-1 rounded hover:bg-black">
          Admin
        </button>
        <button onClick={() => setPage('panier')} className="relative p-2">
          🛒 <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}