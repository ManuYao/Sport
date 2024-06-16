import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    // <nav>
    //     <p style={{background:'yellow'}}>Debug</p>
    //     <ul>
    //         <li><Link to='/'>Accueil</Link></li>
    //         <li><Link to='/YsportMain'>Soon</Link></li>
    //         <li><Link to='/Data'>Data</Link></li>
    //     </ul>
    // </nav>
    <nav>
      <div>
        <h1><span>Y</span>SPORT</h1>
        <div>
          <Link to="#">CARTE SPORTIF</Link>
          <Link to="#">NOUVEAU LIEU</Link>
        </div>
      </div>
    </nav>
  )
}
