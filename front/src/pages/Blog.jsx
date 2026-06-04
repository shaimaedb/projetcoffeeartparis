import React from 'react';
import './Blog.css';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Les secrets du parfait espresso',
      category: 'Café',
      date: '10 Juin 2024',
      excerpt: 'Découvrez les paramètres clés pour extraire un espresso parfait : température, pression, granulométrie...',
      image: '/MENU PARTIE 1.jpg',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Voyage sensoriel : Éthiopie, le berceau du café',
      category: 'Origines',
      date: '8 Juin 2024',
      excerpt: 'Explorez la région de Yirgacheffe et découvrez comment poussent les meilleures plantations éthiopiennes.',
      image: '/MENU PARTIE 2.jpg',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Céramique et café : un duo harmonieux',
      category: 'Artisanat',
      date: '5 Juin 2024',
      excerpt: 'Pourquoi utiliser une belle tasse artisanale change vraiment votre expérience de dégustation.',
      image: '/CERAMIQUE - PHOTO 2.jpg',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Durabilité : notre engagement envers les producteurs',
      category: 'Engagement',
      date: '1 Juin 2024',
      excerpt: 'Comment Coffee Arts Paris soutient une caféiculture équitable et respectueuse de l\'environnement.',
      image: '/CERAMIQUE - PHOTO 1.jpg',
      readTime: '8 min'
    }
  ];

  return (
    <div className="blog-container">
      {/* Bannière */}
      <section className="blog-banner">
        <div className="blog-banner-overlay"></div>
        <div className="blog-banner-content">
          <h1 className="blog-title">Notre Blog</h1>
          <p className="blog-subtitle">Conseils, histoires et inspirations autour du café et de la céramique</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="blog-content">
        <div className="blog-intro">
          <h2>Derniers articles</h2>
          <p>Plongez dans l'univers du café artisanal, découvrez les techniques de notre barista, et inspirez-vous.</p>
        </div>

        {/* Grille d'articles */}
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>

              <div className="blog-info">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-readtime">· {post.readTime}</span>
                </div>

                <h3 className="blog-title-card">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <button className="btn-read-more">Lire l'article</button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <section className="newsletter-section">
          <h3>Recevez nos derniers articles</h3>
          <p>Abonnez-vous à notre newsletter pour ne rien manquer des actus Coffee Arts Paris.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Votre email..." 
              required 
            />
            <button type="submit" className="btn-subscribe">S'abonner</button>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Blog;
