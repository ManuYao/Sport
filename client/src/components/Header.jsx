import React, { Component } from 'react'
import '../styles/page/home.scss'
import '../styles/Header.scss'
import discord from '../images/1discorde.png'
import insta from '../images/instagram.png'

export default class Header extends Component {
  render() {
    const onClickLink = () => {
      window.location.href = '/Home'
    }
    return (
      <div className='header'>
        <h1 onClick={onClickLink}><span>y</span>sport</h1>
      <nav className='link'>
        <a href="/data">carte sportif</a>
        <a href="/nouveau-lieu">nouveau lieu</a>
      </nav>
      <div className='social'>
        <a href='#'><img style={{width:'32px'}} src={insta} alt='#Insta' /></a>
        <a href='#'><img style={{width:'32px'}} src={discord} alt='#Discord' /></a> {/* À corriger */}
      </div>
      </div>
    )
  }
}
