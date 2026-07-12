import React from 'react'
import styles from './PlacesCard.module.css'

const PlacesCard = ({place}) => {
  console.log(place);
  
  return (
    <div className={styles.container}>
        
        <img src={place.image} alt={place.name} />
        <h2>{place.name}</h2>
        <p>{place.description}</p>
      
    </div>
  )
}

export default PlacesCard
