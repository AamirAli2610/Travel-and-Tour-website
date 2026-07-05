import React from 'react';
import styels from './Nav.module.css';


const Nav = () => {
  
  return (
    <div className={styels.container}>
        <nav>
            <h1>

            </h1>
            
            <div className={styels.links}>
               <button>Home</button>
<button>About Us</button>
<button>Destinations</button>
<button>Programs</button>
<button>Contact</button>
            </div>

        </nav>

      
    </div>
  )
}

export default Nav
