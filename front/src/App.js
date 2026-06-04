import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importation du Footer uniquement
import Footer from './components/Footer';

// Importation des pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Workshop from './pages/Workshop';
import Shop from './pages/Shop';
import Events from './pages/Events';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <div className="App">

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

        <Footer />
      </div>
    </Router>
  );
}

export default App;