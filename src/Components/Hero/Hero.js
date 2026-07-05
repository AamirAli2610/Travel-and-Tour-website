import React from 'react'
import styles from './Hero.module.css'
import heroImage from '../../IMages/hero.jpg'





const Hero = () => {

  
  // using State to show destination component 

   
    // passign places data usinig props

    
  return (
    <div className={styles.hero}>
        <div>
            <img  className={styles.heroImage} src={heroImage} alt="hero" />
            <h1>Crafting Tailored Group
            Experiences across Pakistan</h1>



   

        </div>

      
    </div>
  )
}

export default Hero
