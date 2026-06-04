import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importation des composants globaux (à créer dans src/components/)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importation des pages (à créer dans src/pages/)
import Home from './pages/Home';
import Menu from './pages/Menu';        // Café / Carte
import Workshop from './pages/Workshop';  // Ateliers
import Shop from './pages/Shop';          // Boutique
import Events from './pages/Events';      // Événements
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';    // Espace Client

function App() {
  return (
    <Router>
      <div className="App">
        {/* La Navbar reste visible en haut sur toutes les pages */}
        <Navbar />

        {/* Le contenu principal change selon l'URL sur laquelle on se trouve */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carte" element={<Menu />} />
            <Route path="/ateliers" element={<Workshop />} />
            <Route path="/boutique" element={<Shop />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/espace-client" element={<Account />} />
          </Routes>
        </main>

        {/* Le Footer reste visible en bas sur toutes les pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;