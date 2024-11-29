import React, { Component } from 'react'
import '../styles/page/home.scss'
import '../styles/Header.scss'
import discord from '../images/1discorde.png'
import insta from '../images/instagram.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  
  const onClickLink = () => {
    navigate('/home')
  }
  
  return (
    <div className='header'>
      <h1 onClick={onClickLink}><span>y</span>sport</h1>
      <nav className='link'>
        <a href="/map">carte sportif</a>
        <a href="/nouveau-lieu">nouveau lieu</a>
      </nav>
      <div className='social'>
        <a href='#'><img style={{width:'32px'}} src={insta} alt='#Insta' /></a>
        <a href='#'><img style={{width:'32px'}} src={discord} alt='#Discord' /></a>
      </div>
    </div>
  )
}

export default Header