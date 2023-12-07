import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
        <p style={{background:'yellow'}}>Debug</p>
        <ul>
            <li><Link to='/'>Accueil</Link></li>
            <li><Link to='/YsportMain'>Soon</Link></li>
            <li><Link to='/Map'>Map</Link></li>
        </ul>
    </nav>
  )
}
