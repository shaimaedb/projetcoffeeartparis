import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Coffee Art Paris</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/carte">Café/Carte</Link></li>
        <li><Link to="/ateliers">Ateliers</Link></li>
        <li><Link to="/boutique">Boutique</Link></li>
        <li><Link to="/evenements">Événements</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/a-propos">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/espace-client">Mon Espace</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;