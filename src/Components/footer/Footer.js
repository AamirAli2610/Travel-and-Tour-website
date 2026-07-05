import React from 'react'
import styles from './Footer.module.css'
import Logo from '../logo/Logo'

const Footer = () => {
  return (
    <div className={styles.footer} >
        <footer>
            <h1>
                <Logo />
            </h1>
            <div className={styles.aboutUsSection}>
                <h2>About us</h2>
                <p>grouptripplanner.org is your go-to partner on the ground. We combine our deep local knowledge with professional service to create custom group trips that fit your needs perfectly.</p>
            </div>

            <div className={styles.contactUsSection}>
                <h2>Contact us</h2>
                <p>740 13th St, San Diego, CA 92101, USA</p>
                <p>Tel: <a href="#">920318323440</a></p>
                <p>Email: <a href="#">info@gmail.com</a></p>
            </div>



        </footer>
      
    </div>
  )
}

export default Footer
