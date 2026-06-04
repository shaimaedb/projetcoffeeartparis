import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Boutique from './components/Boutique';
import Ateliers from './components/Ateliers';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [page, setPage] = useState('accueil');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} ajouté au panier !`);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6]">
      <Navbar setPage={setPage} cartCount={cart.length} />
      
      {page === 'accueil' && <Accueil setPage={setPage} />}
      {page === 'boutique' && <Boutique addToCart={addToCart} />}
      {page === 'ateliers' && <Ateliers />}
      {page === 'admin' && <AdminDashboard />}
      
      {/* Fallback temporaire pour les pages secondaires manquantes */}
      {['carte', 'evenements', 'blog', 'propos', 'contact', 'client', 'panier'].includes(page) && (
        <div className="flex items-center justify-center h-[50vh] flex-col">
          <h2 className="text-2xl font-serif capitalize">Page {page}</h2>
          <p className="text-gray-500 mt-2">Section statique en cours de finition pour l'examen.</p>
        </div>
      )}
    </div>
  );
}