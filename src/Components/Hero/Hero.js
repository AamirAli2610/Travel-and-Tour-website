import React from 'react'
import styles from './Hero.module.css'
import heroImage from '../../IMages/hero.jpg'
import { Link} from 'react-router-dom'


const Hero = () => {
  
  return (
    <div className={styles.hero}>

            <img  className={styles.heroImage} src={heroImage} alt="hero" />
            <h1>Crafting Tailored Group
            Experiences across Pakistan</h1>

              <Link to="/places" >
              <button className={styles.discoverBtn} >Discover Places →</button>
                </Link>

            



   



      
    </div>
  )
}

export default Hero
