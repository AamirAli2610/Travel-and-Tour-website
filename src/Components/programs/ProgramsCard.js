import React from 'react'
import styles from './ProgramsCard.module.css'

const ProgramsCard = ({program}) => {
  return (
    <div className={styles.container} >

        <div> 
            <img src={program.image} alt="skardu" />
            <h2>{program.title}</h2>
            <p>Duration :  <span>{program.duration}</span></p>
            <p>Price : <span>{program.price}</span></p>
            <p>description : <span>{program.description}</span></p>

            <button className={styles.bookNOwBTn}>Book now →</button>
        </div>


        
      
    </div>
  )
}

export default ProgramsCard
