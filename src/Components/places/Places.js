import React from 'react'
import PlacesCard from './PlacesCard'


import placesData from "../../assets/PlacesData";
import styles from './Places.module.css'
import Nav from '../Nav/Nav';
import Footer from '../footer/Footer';

const Places = () => {
  return (

    <div>
      <Nav />
    
     <div className={styles.container} >
      
      {placesData.map((place) =>{
      
       return <PlacesCard place = {place}/>
        
        

      })};
        


      
     </div>
     <Footer />
    </div>
  )
}

export default Places
