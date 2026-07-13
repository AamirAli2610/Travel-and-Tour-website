import React from 'react';
import styels from './Nav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';


const Nav = () => {
  
  return (
    <div className={styels.container}>
        <nav>
            <div>
              <Logo />
            </div>
            
            <div className={styels.links}>
           <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/contact">Contact</Link>
            </div>

        </nav>

      
    </div>
  )
}

export default Nav
