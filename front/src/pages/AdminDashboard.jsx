import React, { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('products');

  // Données de démo modifiables à la volée pour l'examen
  const [products, setProducts] = useState([
    { id: 1, name: 'Tasse Grès', price: 28, category: 'Céramique' },
    { id: 2, name: 'Café Éthiopie', price: 14.5, category: 'Café' }
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Admin */}
      <div className="w-64 bg-[#2c2520] text-gray-300 p-6">
        <h3 className="text-white text-lg font-serif mb-8 border-b border-gray-700 pb-4">Espace Admin</h3>
        <div className="flex flex-col space-y-2 text-sm">
          <button onClick={() => setActiveTab('stats')} className={`text-left p-2 rounded ${activeTab === 'stats' ? 'bg-amber-800 text-white' : 'hover:bg-gray-800'}`}>📊 Statistiques</button>
          <button onClick={() => setActiveTab('products')} className={`text-left p-2 rounded ${activeTab === 'products' ? 'bg-amber-800 text-white' : 'hover:bg-gray-800'}`}>📦 Produits</button>
          <button onClick={() => setActiveTab('workshops')} className={`text-left p-2 rounded ${activeTab === 'workshops' ? 'bg-amber-800 text-white' : 'hover:bg-gray-800'}`}>🏺 Ateliers</button>
          <button onClick={() => setActiveTab('orders')} className={`text-left p-2 rounded ${activeTab === 'orders' ? 'bg-amber-800 text-white' : 'hover:bg-gray-800'}`}>🛒 Commandes</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {activeTab === 'stats' && (
          <div>
            <h2 className="text-2xl font-serif mb-6">Tableau de bord</h2>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Chiffre d'Affaires</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">1 420.50 €</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Commandes</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">18</p>
              </div>
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Produits Actifs</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{products.length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif">Gestion des Produits</h2>
              <button onClick={() => alert('Ajouter un produit')} className="bg-amber-800 text-white text-xs px-4 py-2 font-semibold hover:bg-amber-900 transition">
                + Ajouter un produit
              </button>
            </div>
            <div className="bg-white shadow-sm rounded border border-gray-200 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4">Nom</th>
                    <th className="p-4">Catégorie</th>
                    <th className="p-4">Prix</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-200">
                  {products.map(p => (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">{p.name}</td>
                      <td className="p-4 text-gray-500">{p.category}</td>
                      <td className="p-4 font-mono">{p.price} €</td>
                      <td className="p-4 text-center space-x-2">
                        <button className="text-blue-600 hover:underline">Modifier</button>
                        <button onClick={() => deleteProduct(p.id)} className="text-red-600 hover:underline">Supprimer</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}