import React from 'react'
import styles from './Discover.module.css'
import discoverImage from '../../IMages/discover.jpg'


const Discover = () => {
  return (
    <div className={styles.mainContainer}>
        <div>
            <img src={discoverImage} alt="" />
        </div>
        <div className={styles.textContainer}>
            <h1>Discover Pakistan with  Travel & Tour</h1>
            <p>Sun-drenched, timeless, and endlessly captivating. Greece welcomes you with a mild Mediterranean climate that spoils travelers all year round. Together, we will discover a rich tapestry of landscapes — from dramatic mountain peaks and hidden valleys to unique island worlds and breathtaking beaches.
            As the cradle of Western civilization, Greece offers your group a seamless blend of ancient history, living culture, and vibrant modern life. Come inspired by the philosophy of the past, and stay for the warmth, hospitality, and culinary delights of the present.
            “Welcome to the land surrounded by azure waters, the beguiling scent of nature and the deep warmth of its people.”
            Your journey begins here. We can’t wait to welcome you.</p>


        </div>

      
    </div>
  )
}

export default Discover
