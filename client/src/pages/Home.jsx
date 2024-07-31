import React from 'react'
import '../styles/page/home.scss'
import tmp from '../images/tmp_home_img.jpg'
import Header from '../components/Header'

export default function Home() {

  const onClickLink = () => {
    window.location.href = '/data'
  }

  return (
    <div className='global'>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
      <h2>Votre guide sportif <span>local</span></h2>
      </main>
      <section>
        <img src={tmp} alt='tmp_home_img' />
      </section>
      <button onClick={onClickLink}>CARTE SPORTIF</button>

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
        <button onClick={() => {window.location.href = '/data'}}>AJOUTE TON LIEU</button>
      </section>
    </div>
  )
}
