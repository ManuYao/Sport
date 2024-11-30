import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/components/Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className='header'>
      <div className='header-content'>
        <div 
          className='logo' 
          onClick={() => navigate('/')} 
          style={{ cursor: 'pointer' }}
        >
          <span className='logo-y'>Y</span>SPORT
        </div>
        <nav className='nav-links'>
          <Link 
            to="/map" 
            className={location.pathname === '/map' ? 'active' : ''}
          >
            CARTE SPORTIF
          </Link>
          <Link 
            to="/share"
            className={location.pathname === '/share' ? 'active' : ''}
          >
            PARTAGE
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;