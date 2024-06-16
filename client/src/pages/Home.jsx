import React from 'react'
import '../styles/page/home.scss'

export default function Home() {
  return (
    <div className='global'>
      {/* Header */}
      <h1><span>y</span>sport</h1>
      <nav className='link'>
        <a href="/carte-sportif">carte sportif</a>
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
    </div>
  )
}
