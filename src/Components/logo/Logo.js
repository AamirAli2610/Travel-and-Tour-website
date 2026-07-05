import React from 'react'
import styles from './Logo.module.css'
 
const Logo = () => {
  return (
    <div>
         <h2 className={styles.logo}>
      <span className={styles.travel}>Travel</span> &{" "}
      <span className={styles.tour}>Tour</span>
    </h2>

      
    </div>
  )
}

export default Logo
