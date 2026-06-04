import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-container">
      {/* Bannière */}
      <section className="contact-banner">
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-content">
          <h1 className="contact-title">Contactez-Nous</h1>
          <p className="contact-subtitle">Nous sommes ici pour vous aider et répondre à vos questions</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="contact-content">
        <div className="contact-grid">
          {/* Formulaire */}
          <div className="contact-form-section">
            <h2>Envoyez-nous un message</h2>
            
            {submitted && (
              <div className="success-message">
                ✓ Merci! Nous avons bien reçu votre message et vous répondrons rapidement.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Réservation, Question, Partenariat"
                  />
                </div>
              </div>

              <div className="form-group full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre demande..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-contact">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations */}
          <div className="contact-info-section">
            <h2>Infos pratiques</h2>

            <div className="info-block">
              <h4>📍 Adresse</h4>
              <p>25 boulevard du Temple<br />75003 Paris - Le Marais<br />France</p>
            </div>

            <div className="info-block">
              <h4>☎️ Contact</h4>
              <p>
                <strong>Téléphone:</strong> +33 (0)1 XX XX XX XX<br />
                <strong>Email:</strong> hello@coffeeartsparis.fr
              </p>
            </div>

            <div className="info-block">
              <h4>🕐 Horaires</h4>
              <p>
                <strong>Lun - Ven:</strong> 8h - 19h<br />
                <strong>Sam - Dim:</strong> 9h - 18h<br />
                <em>Fermé les jours fériés</em>
              </p>
            </div>

            <div className="info-block">
              <h4>📞 Service Client</h4>
              <p>
                Besoin d'aide?<br />
                Nous répondons à vos messages<br />
                dans les 24h (jours ouvrables).
              </p>
            </div>

            <div className="social-links">
              <h4>Nous suivre</h4>
              <div className="social-icons">
                <a href="#instagram" className="social-icon">📷</a>
                <a href="#facebook" className="social-icon">👍</a>
                <a href="#twitter" className="social-icon">🐦</a>
                <a href="#linkedin" className="social-icon">💼</a>
              </div>
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="map-section">
          <h3>Trouvez-nous</h3>
          <div className="map-placeholder">
            <p>📍 25 boulevard du Temple, 75003 Paris</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Métro: République ou Temple (lignes 3, 4, 5, 8, 9, 11)</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h3>Questions fréquentes</h3>
          <div className="faq-grid">
            <div className="faq-card">
              <h4>Comment réserver un atelier?</h4>
              <p>Allez sur la page "Ateliers", sélectionnez l'atelier qui vous intéresse et cliquez sur "Réserver".</p>
            </div>
            <div className="faq-card">
              <h4>Quelles sont les conditions d'annulation?</h4>
              <p>Annulation gratuite jusqu'à 48h avant l'atelier. Au-delà, 50% du prix sera conservé.</p>
            </div>
            <div className="faq-card">
              <h4>Faites-vous des événements privés?</h4>
              <p>Oui! Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.</p>
            </div>
            <div className="faq-card">
              <h4>Livrez-vous vos produits?</h4>
              <p>Nous livrons dans le 75 et l'Île-de-France. Frais de port selon votre commande.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
