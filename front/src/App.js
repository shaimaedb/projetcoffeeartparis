import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import de tes pages
// (Ajuste les chemins si tes fichiers sont rangés différemment)
import Menu from './pages/Menu';
import Workshop from './pages/Workshop';
import Shop from './pages/Shop';
import Account from './pages/Account';

// Composant Navbar
function Navbar() {
  return (
    <nav style={{ backgroundColor: '#F7F0E7' }} className="border-b border-gray-200/50 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 font-['Outfit']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" style={{ color: '#58604C' }} className="text-2xl font-['Duper'] font-bold tracking-wider">
              Coffee Arts Paris
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/carte" className="text-gray-700 hover:text-[#58604C] transition-colors">La Carte</Link>
            <Link to="/ateliers" className="text-gray-700 hover:text-[#58604C] transition-colors">Ateliers</Link>
            <Link to="/boutique" className="text-gray-700 hover:text-[#58604C] transition-colors">Boutique</Link>
          </div>
          <div>
            <Link to="/espace-client" style={{ backgroundColor: '#58604C' }} className="text-[#e9d7c1] px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 active:scale-95">
              Mon Espace
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Composant Footer
function Footer() {
  return (
    <footer style={{ backgroundColor: '#58604C' }} className="text-[#e9d7c1] py-12 font-['Outfit']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-['Duper'] font-bold mb-4">Coffee Arts Paris</h3>
          <p className="text-sm opacity-80 leading-relaxed">Un lieu hybride où l'on vient savourer un café, créer de ses mains et partager un moment, simplement.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Accès & Horaires</h4>
          <p className="text-sm opacity-80">25 boulevard du Temple, 75003 Paris</p>
          <p className="text-sm opacity-80 mt-2">Mardi - Dimanche : 9h00 - 19h00</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Liens Utiles</h4>
          <div className="flex flex-col space-y-2 text-sm opacity-80">
            <Link to="/carte" className="hover:underline">Le Menu du Café</Link>
            <Link to="/ateliers" className="hover:underline">Réserver un cours</Link>
            <Link to="/boutique" className="hover:underline">Notre E-shop</Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs opacity-50 mt-12 border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} Coffee Arts Paris. Tous droits réservés.
      </div>
    </footer>
  );
}

// Composant Home temporaire (si tu n'as pas encore déplacé ton HTML fourni)
function HomePlaceholder() {
  return (
    <div className="text-center py-20 bg-[#F7F0E7]">
      <h1 className="text-4xl font-['Duper'] text-[#58604C] font-bold">Bienvenue</h1>
      <p className="mt-4 text-gray-600">Utilise la navigation pour explorer les différentes pages.</p>
    </div>
  );
}

// Composant Principal App
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F7F0E7]">
        <Navbar />
        
        {/* Contenu dynamique des routes */}
        <main className="flex-grow">
          <Routes>
            {/* Si tu as déjà un fichier Home.jsx, remplace HomePlaceholder par <Home /> */}
            <Route path="/" element={<HomePlaceholder />} />
            <Route path="/carte" element={<Menu />} />
            <Route path="/ateliers" element={<Workshop />} />
            <Route path="/boutique" element={<Shop />} />
            <Route path="/espace-client" element={<Account />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;