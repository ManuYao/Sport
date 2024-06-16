import React from 'react'
import '../styles/page/home.scss'

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
        <a href='#'><img src='#' alt='#' /></a>
        <a href='#'><img src='#' alt='#' /></a>
      </div>

      {/* Main */}
      <main>
      <h2>Votre guide sportif <span>local</span></h2>
      </main>
      <section className='section_img'>
        {/* <img src='#' alt='#' /> soon */}
      </section>
      <button onClick={onClickLink}>CARTE SPORTIF</button>
    </div>
  )
}
