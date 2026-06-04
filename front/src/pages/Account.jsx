import React, { useState } from 'react';

function Account() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ backgroundColor: '#F7F0E7' }} className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-['Outfit']">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-white/20 shadow-xl">
        
        {/* Onglets */}
        <div className="flex border-b border-gray-100 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 pb-4 font-bold text-center transition-colors ${isLogin ? 'text-[#58604C] border-b-2 border-[#58604C]' : 'text-gray-400'}`}
          >
            Se connecter
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 pb-4 font-bold text-center transition-colors ${!isLogin ? 'text-[#58604C] border-b-2 border-[#58604C]' : 'text-gray-400'}`}
          >
            S'inscrire
          </button>
        </div>

        {/* Formulaire */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#58604C] text-sm" placeholder="Votre nom" />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#58604C] text-sm" placeholder="exemple@mail.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#58604C] text-sm" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full py-3 bg-[#58604C] text-[#e9d7c1] font-bold rounded-xl shadow-md transition-all hover:opacity-95 active:scale-95 mt-4">
            {isLogin ? 'Se connecter' : 'Créer mon compte'}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Account;