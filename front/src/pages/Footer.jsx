import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#556046] text-[#fcf8f2] pt-16 pb-8 px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-2">Coffee Arts</h2>
          <p className="text-xs uppercase tracking-widest opacity-80 mb-6">Paris</p>
          <p className="text-sm opacity-90 max-w-xs leading-relaxed mb-6">
            Un lieu unique où la céramique rencontre le café artisanal à Paris.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg font-medium mb-6">Découvrir</h3>
          <div className="grid grid-cols-2 gap-y-3 text-sm opacity-90">
            <Link to="/carte" className="text-left hover:underline">Café</Link>
            <Link to="/blog" className="text-left hover:underline">Blog</Link>
            <Link to="/ateliers" className="text-left hover:underline">Céramique</Link>
            <Link to="/a-propos" className="text-left hover:underline">À propos</Link>
            <Link to="/boutique" className="text-left hover:underline">Boutique</Link>
            <Link to="/contact" className="text-left hover:underline">Contact</Link>
            <Link to="/evenements" className="text-left hover:underline">Événements</Link>
            <Link to="/espace-client" className="text-left hover:underline">Espace client</Link>
          </div>
        </div>
        <div className="text-sm opacity-90 space-y-3">
          <h3 className="font-serif text-lg font-medium mb-6">Contact</h3>
          <p>07.66.91.82.94</p>
          <p>coffeeartsparis@gmail.com</p>
          <p>25 Boulevard du Temple, 75003 Paris</p>
        </div>
        <div className="text-sm opacity-90 space-y-4">
          <h3 className="font-serif text-lg font-medium mb-6">Horaires</h3>
          <p className="font-medium">Mar - Ven : 08h - 20h<br />Sam - Dim : 10h - 21h</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 text-center text-xs opacity-70">
        <p>© 2026 Coffee Arts Paris. Tous droits réservés.</p>
      </div>
    </footer>
  );
}