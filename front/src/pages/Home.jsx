import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      
      {/* 1. SECTION HERO AVEC TA VRAIE VIDÉO DE FOND */}
      <section className="hero-section">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/coffevideo.mp4" type="video/mp4" />
          {/* Note : Si ton fichier s'appelle exactement autrement, change juste le nom ci-dessus */}
        </video>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Specialty coffee & pottery studio</h1>
          <p className="hero-subtitle">Sip, create and connect</p>
          <p className="hero-description">
            Un lieu hybride où l'on vient savourer un café, créer de ses mains et partager un moment, simplement.
          </p>
          <p className="hero-address">25 boulevard du Temple, 75003 Paris</p>
          <div className="hero-buttons">
            <Link to="/ateliers" className="btn btn-beige">Réserver un atelier</Link>
            <Link to="/cafe-carte" className="btn btn-outline-white">Découvrir la carte</Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION TROIS EXPÉRIENCES */}
      <section className="experiences-section">
        <h2 className="section-title-main">Trois expériences, un même lieu</h2>
        <p className="section-subtitle-main">Un café de spécialité, des ateliers créatifs et une boutique, pensés pour se compléter.</p>
        
        <div className="experiences-grid">
          {/* Bloc Café */}
          <div className="exp-card">
            <div className="card-img-wrapper" style={{ backgroundImage: `url('/MENU PARTIE 1.jpg')` }}>
              <div className="card-overlay">
                <span>DÉGUSTER</span>
                <h3>Café de spécialité</h3>
                <Link to="/cafe-carte" className="card-link">Découvrir la carte</Link>
              </div>
            </div>
          </div>
          
          {/* Bloc Céramique */}
          <div className="exp-card">
            <div className="card-img-wrapper" style={{ backgroundImage: `url('/CERAMIQUE - PHOTO 1.jpg')` }}>
              <div className="card-overlay">
                <span>CRÉER</span>
                <h3>Ateliers créatifs</h3>
                <Link to="/ateliers" className="card-link">Participer à un atelier</Link>
              </div>
            </div>
          </div>
          
          {/* Bloc Boutique */}
          <div className="exp-card">
            <div className="card-img-wrapper" style={{ backgroundImage: `url('/PRODUIT 1 - PARTIE 1.jpg')` }}>
              <div className="card-overlay">
                <span>EMPORTER</span>
                <h3>La boutique</h3>
                <Link to="/boutique" className="card-link">Explorer la boutique</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION MOSAÏQUE INSTANTS */}
      <section className="ambiance-section">
        <h2 className="section-title-main">Au cœur de Coffee Arts Paris</h2>
        <p className="section-subtitle-main">Des images pour découvrir l'ambiance du lieu, ses matières, et les instants qui s'y vivent au quotidien.</p>
        
        <div className="ambiance-mosaic">
          <div className="mosaic-item" style={{ backgroundImage: `url('/CERAMIQUE - PHOTO 2.jpg')` }}></div>
          <div className="mosaic-item" style={{ backgroundImage: `url('/IMG_8592 copy.jpg')` }}></div>
          <div className="mosaic-item" style={{ backgroundImage: `url('/IMG_8747.jpg')` }}></div>
          <div className="mosaic-item" style={{ backgroundImage: `url('/IMG_8509.jpg')` }}></div>
        </div>
      </section>

      {/* 4. SECTION NOS DERNIÈRES NOUVEAUTÉS */}
      <section className="news-section">
        <h2 className="section-title-main">Nos dernières nouveautés</h2>
        <p className="section-subtitle-main">L'univers Coffee Arts Paris, à emporter avec vous.</p>
        
        <div className="news-grid">
          <div className="news-card">
            <div className="news-img-container">
              <img src="/new1.png" alt="Ceremonial Matcha" className="news-img" />
            </div>
            <div className="news-info">
              <div className="news-header">
                <h4>CEREMONIAL MATCHA</h4>
                <span className="price-tag">30 €</span>
              </div>
              <p>Découvrez notre matcha cérémoniel d'exception, soigneusement sélectionné dans la région d'Uji...</p>
              <Link to="/boutique" className="view-more">Voir plus</Link>
            </div>
          </div>

          <div className="news-card">
            <div className="news-img-container">
              <img src="/new2.png" alt="Tote bag" className="news-img" />
            </div>
            <div className="news-info">
              <div className="news-header">
                <h4>Graphic Cotton Tote Bag</h4>
                <span className="price-tag">20 €</span>
              </div>
              <p>Tote bag en coton naturel au design graphique signé Coffee Arts Paris. Pratique, résistant et élégant...</p>
              <Link to="/boutique" className="view-more">Voir plus</Link>
            </div>
          </div>

          <div className="news-card">
            <div className="news-img-container">
              <img src="/new11.png" alt="Casquette" className="news-img" />
            </div>
            <div className="news-info">
              <div className="news-header">
                <h4>Graphic Cotton Cap</h4>
                <span className="price-tag">25 €</span>
              </div>
              <p>Casquette en coton avec broderie graphique Coffee Arts Paris. Idéale pour compléter votre look...</p>
              <Link to="/boutique" className="view-more">Voir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPEL À L'ACTION INTERMÉDIAIRE */}
      <section className="cta-banner">
        <h2>Un moment autour du café et de la création</h2>
        <p>Un lieu où l'on vient créer, discuter, boire un café et s'attarder. Des moments simples, à vivre et à partager.</p>
        <div className="cta-buttons">
          <Link to="/ateliers" className="btn btn-green">Découvrir les ateliers</Link>
          <Link to="/boutique" className="btn btn-beige">Accéder à la boutique</Link>
        </div>
      </section>

    </div>
  );
}

export default Home;