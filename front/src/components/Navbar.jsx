import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // On lie le fichier CSS pour le design chic

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo de Coffee Art Paris */}
        <div className="nav-logo">
          <Link to="/">
            COFFEE ART <span>PARIS</span>
          </Link>
        </div>

        {/* Liens de navigation principaux nettoyés des bugs d'accents */}
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/carte">Café/Carte</Link></li>
          <li><Link to="/ateliers">Ateliers</Link></li>
          <li><Link to="/boutique">Boutique</Link></li>
          <li><Link to="/evenements">Événements</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/a-propos">À propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Raccourcis Profil et Panier (Demandés pour l'e-commerce et l'espace client) */}
        <div className="nav-actions">
          <Link to="/espace-client" className="nav-icon-link" title="Mon Espace Client">
            👤
          </Link>
          <Link to="/boutique" className="nav-cart-link" title="Mon Panier">
            🛒 <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;