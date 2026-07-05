import React from 'react';
import styels from './Nav.module.css';
import Logo from '../logo/Logo';

const Nav = () => {
  
  return (
    <div className={styels.container}>
        <nav>
            <h1>
              <Logo />
            </h1>
            
            <div className={styels.links}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Destinations</a>
                <a href="#">Programs</a>
                <a href="#">contact</a>
            </div>

        </nav>

      
    </div>
  )
}

export default Nav
