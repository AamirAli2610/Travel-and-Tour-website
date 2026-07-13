import React from 'react'
import PlacesCard from './PlacesCard'


import placesData from "../../assets/PlacesData";
import styles from './Places.module.css'

const Places = () => {
  return (
    
    <div className={styles.container} >
      
      {placesData.map((place) =>{
      
       return <PlacesCard place = {place}/>
        
        

      })};
        


      
    </div>
  )
}

export default Places
