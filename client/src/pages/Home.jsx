import React, { useState, useEffect } from 'react';
import '../styles/page/home.scss';
import Header from '../components/Header';
import tmp from '../images/tmp_home_img.jpg';
import animationVideo from '../video/Animation - 1724257265347.mp4';

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Fonction pour cacher la vidéo
  const hideVideo = () => {
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    const videoElement = document.getElementById('intro-video');

    // Vérifie si l'élément vidéo est disponible
    if (videoElement) {
      // Configure le gestionnaire de fin de vidéo
      videoElement.onended = hideVideo;

      // Ajoute un timer pour masquer la vidéo après 6 secondes
      const timer = setTimeout(hideVideo, 6000);

      // Nettoie le timer si le composant est démonté
      return () => clearTimeout(timer);
    }
  }, []);

  console.log('Setting up timer...');
const timer = setTimeout(() => {
  console.log('Timer completed. Hiding video...');
  hideVideo();
}, 6000);


  const onClickLink = () => {
    window.location.href = '/data';
  };

  return (
    <div className='global'>
      {isVideoPlaying && (
        <div className='video-container'>
          <video 
            id='intro-video'
            autoPlay 
            muted 
            className='animation-video'
          >
            <source src={animationVideo} type='video/mp4' />
            🚧 Video Erreur#224003.
          </video>
        </div>
      )}

      {!isVideoPlaying && (
        <>
          {/* Header */}
          <Header />

          {/* Main */}
          <main>
            <h2>Votre guide sportif <span>local</span></h2>
          </main>

          <section>
            <img src={tmp} alt='tmp_home_img' />
          </section>
          <button className='btn' onClick={onClickLink}>CARTE SPORTIF</button>

          {/* Article */}
          <article className='quick_info'>
            <div>
              <h3>1</h3>
              <p>Collaborateur</p>
            </div>
            <div>
              <h3>18 000+</h3>
              <p>Lieu sportif</p>
            </div>
            <div>
              <h3>x</h3>
              <p>x</p>
            </div>
          </article>

          {/* Section */}
          <section className='section_add_area'>
            <div className='typo_area'>
              <p className='typo_area_1'><span className="color1">Ajoutez</span>,<span className="color2">Explorez</span>,<span className="color3">Partagez</span></p>
              <p className='typo_area_2'>Enrichissez la carte avec vos endroits préférés ! </p>
            </div>
            <button className='btn' onClick={onClickLink}>AJOUTE TON LIEU</button>
          </section>
        </>
      )}
    </div>
  );
}
