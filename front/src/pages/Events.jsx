import React from 'react';
import './Events.css';

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Dégustation Cafés du Monde',
      date: '15 Juin 2024',
      time: '15h - 17h',
      description: 'Voyage sensoriel à travers 5 origines de café : Éthiopie, Kenya, Brésil, Colombie et Sumatra.',
      location: '25 bd du Temple, 75003',
      price: '35 €',
      capacity: '12 personnes',
      category: 'Dégustation'
    },
    {
      id: 2,
      title: 'Latte Art Night',
      date: '20 Juin 2024',
      time: '19h - 21h',
      description: 'Soirée conviviale : atelier latte art suivi d\'un apéritif entre passionnés de café.',
      location: '25 bd du Temple, 75003',
      price: '45 €',
      capacity: '15 personnes',
      category: 'Atelier'
    },
    {
      id: 3,
      title: 'Exposition Photo - Instants Caffeine',
      date: '22 Juin - 30 Juin 2024',
      time: 'Tous les jours 10h - 19h',
      description: 'Exposition photos inédites du travail artisanal de nos producteurs de café partenaires.',
      location: '25 bd du Temple, 75003',
      price: 'Gratuit',
      capacity: 'Illimité',
      category: 'Exposition'
    },
    {
      id: 4,
      title: 'Masterclass Céramique - Formage Avancé',
      date: '25 Juin 2024',
      time: '14h - 17h',
      description: 'Approfondissez vos techniques de tournage avec notre maître potier. Pour potiers confirmés.',
      location: '25 bd du Temple, 75003',
      price: '75 €',
      capacity: '8 personnes',
      category: 'Atelier'
    }
  ];

  return (
    <div className="events-container">
      {/* Bannière */}
      <section className="events-banner">
        <div className="events-banner-overlay"></div>
        <div className="events-banner-content">
          <h1 className="events-title">Nos Événements</h1>
          <p className="events-subtitle">Dégustations, ateliers et expériences inoubliables</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="events-content">
        <div className="events-intro">
          <h2>Événements à venir</h2>
          <p>
            Coffee Arts Paris propose des événements mensuels alliant dégustations de cafés d'exception,
            ateliers créatifs et moments de partage. Rejoignez notre communauté passionnée!
          </p>
        </div>

        {/* Grille d'événements */}
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <span className="event-category">{event.category}</span>
                <span className="event-date">{event.date}</span>
              </div>

              <h3 className="event-title">{event.title}</h3>

              <div className="event-details">
                <p className="event-time">⏰ {event.time}</p>
                <p className="event-location">📍 {event.location}</p>
                <p className="event-capacity">👥 {event.capacity}</p>
              </div>

              <p className="event-description">{event.description}</p>

              <div className="event-footer">
                <span className="event-price">{event.price}</span>
                <button className="btn-register">Réserver</button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="events-cta">
          <h3>Vous voulez créer un événement privé?</h3>
          <p>Nous proposons des formules sur mesure pour vos événements d'entreprise ou familiaux.</p>
          <button className="btn-cta">Contactez-nous pour un devis</button>
        </div>
      </section>
    </div>
  );
}

export default Events;
