import React from 'react'
import '../styles/page/home.scss'
import tmp from '../images/tmp_home_img.jpg'

export default function Home() {

  const onClickLink = () => {
    window.location.href = '/data'
  }

  return (
    <div className='global'>
      {/* Header */}
      <h1><span>y</span>sport</h1>
      <nav className='link'>
        <a href="/data">carte sportif</a>
        <a href="/nouveau-lieu">nouveau lieu</a>
      </nav>
      <div className='social'>
        <a href='#'><img src='#' alt='#Insta' /></a>
        <a href='#'><img src='#' alt='#Discord' /></a>
      </div>

      {/* Main */}
      <main>
      <h2>Votre guide sportif <span>local</span></h2>
      </main>
      <section>
        <img src={tmp} alt='tmp_home_img' />
      </section>
      <button onClick={onClickLink}>CARTE SPORTIF</button>
    </div>
  )
}
