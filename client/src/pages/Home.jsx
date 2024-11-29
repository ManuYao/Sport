import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/page/Home.scss';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <Link to="/" className="logo">
          <span className="y">Y</span>SPORT
        </Link>
        <nav>
          <Link to="/map">CARTE SPORTIF</Link>
          <Link to="/share">PARTAGE</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            VOTRE GUIDE<br />
            SPORTIF <span className="accent">LOCAL</span>
          </h1>
          <button className="button-primary" onClick={() => navigate('/map')}>
            CARTE SPORTIF
            <span className="icon">⚡</span>
          </button>
        </div>
        <div className="hero-image">
          {/* Placeholder for image */}
          <div className="image-placeholder"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <h2>1</h2>
          <p>COLLABORATEUR</p>
        </div>
        <div className="stat">
          <h2>18 000+</h2>
          <p>LIEU SPORTIF</p>
        </div>
        <div className="stat">
          <h2>X</h2>
          <p>X</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>
            <span>AJOUTEZ</span>,
            <span>EXPLOREZ</span>,
            <span className="accent">PARTAGEZ</span>
          </h2>
          <p>Enrichissez la carte avec vos endroits préférés !</p>
          <button className="button-secondary" onClick={() => navigate('/nouveau-lieu')}>
            AJOUTE TON LIEU
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;