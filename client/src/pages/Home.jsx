import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Home.scss';
import CustomAlert from '../components/CustomAlert';
import Navbar from '../components/NavBar';

const Home = () => {
  const navigate = useNavigate();
  const [showAddLocationAlert, setShowAddLocationAlert] = useState(false);

  const handleAddLocation = () => {
    setShowAddLocationAlert(true);
  };
  
  return (
    <div className="home">
      <Navbar />

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
          <button className="button-secondary" onClick={handleAddLocation}>
            AJOUTE TON LIEU
          </button>
        </div>
      </section>

      <CustomAlert 
        isOpen={showAddLocationAlert}
        onClose={() => setShowAddLocationAlert(false)}
        title="Fonctionnalité en développement"
        message="L'ajout de nouveaux lieux sera bientôt disponible. Cette fonctionnalité est actuellement en cours de développement."
        buttonText="Compris"
      />
    </div>
  );
};

export default Home;