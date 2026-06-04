import React from 'react';
import './About.css';

function About() {
  const values = [
    {
      icon: '☕',
      title: 'Qualité',
      description: 'Nous sélectionnons rigoureusement chaque café pour offrir une expérience sensorielle incomparable.'
    },
    {
      icon: '🎨',
      title: 'Créativité',
      description: 'Nos ateliers de céramique créent un espace où chacun peut exprimer son potentiel artistique.'
    },
    {
      icon: '🌍',
      title: 'Durabilité',
      description: 'Engagement envers nos producteurs et l\'environnement. Chaque achat soutient une caféiculture équitable.'
    },
    {
      icon: '❤️',
      title: 'Communauté',
      description: 'Créer un lieu de rencontre où chaque client devient une partie de notre famille Coffee Arts Paris.'
    }
  ];

  return (
    <div className="about-container">
      {/* Bannière */}
      <section className="about-banner">
        <div className="about-banner-overlay"></div>
        <div className="about-banner-content">
          <h1 className="about-title">À Propos de Nous</h1>
          <p className="about-subtitle">L'histoire d'une passion : café, céramique et création</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="about-content">
        {/* Section histoire */}
        <div className="story-section">
          <h2>Notre Histoire</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Coffee Arts Paris est né d'une rencontre improbable entre deux passionnés : 
                Marie, experte en café de spécialité, et Thomas, céramiste reconnu. 
                Ensemble, ils ont imaginé un lieu hybride où l'on pouvait à la fois savourer 
                le meilleur café et créer de ses propres mains.
              </p>
              <p>
                Installés au cœur du Marais en 2021, nous avons créé un espace d'environ 150m² 
                où coffee bar, atelier de céramique et galerie cohabitent harmonieusement. 
                Chaque année, nous accueillons plus de 2000 participants à nos ateliers 
                et servons des milliers de tasses à nos clients fidèles.
              </p>
            </div>
            <div className="story-image" style={{ backgroundImage: `url('/CERAMIQUE - PHOTO 1.jpg')` }}></div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="values-section">
          <h2>Nos Valeurs</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Équipe */}
        <div className="team-section">
          <h2>Qui sommes-nous?</h2>
          <div className="team-info">
            <div className="team-member">
              <h4>Marie Laurent</h4>
              <p className="role">Fondatrice & Experte Café</p>
              <p>Passionnée par le café depuis 10 ans. Originaire d'Éthiopie, elle maîtrise les secrets des plantations d'altitude.</p>
            </div>
            <div className="team-member">
              <h4>Thomas Moreau</h4>
              <p className="role">Fondateur & Artiste Céramique</p>
              <p>Céramiste diplômé de l'ENSBA. Amoureux de la Japon, il crée chaque pièce avec une philosophie minimaliste.</p>
            </div>
            <div className="team-member">
              <h4>Samir Hassan</h4>
              <p className="role">Barista Senior</p>
              <p>Champion de latte art 2023. Chaque tasse est une œuvre d'art dans ses mains expertes.</p>
            </div>
            <div className="team-member">
              <h4>Léa Dubois</h4>
              <p className="role">Coordinatrice Ateliers</p>
              <p>Bienveillante et créative, elle crée une ambiance magique lors de chaque atelier pour tous.</p>
            </div>
          </div>
        </div>

        {/* Chiffres */}
        <div className="stats-section">
          <div className="stat-block">
            <span className="stat-figure">2000+</span>
            <p>Participants annuels</p>
          </div>
          <div className="stat-block">
            <span className="stat-figure">15</span>
            <p>Origines de café</p>
          </div>
          <div className="stat-block">
            <span className="stat-figure">98%</span>
            <p>Clients satisfaits</p>
          </div>
          <div className="stat-block">
            <span className="stat-figure">100%</span>
            <p>Café équitable</p>
          </div>
        </div>
      </section>
    </div>
}

export default About;
