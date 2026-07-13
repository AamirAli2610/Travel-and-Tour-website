import React from 'react'
import ProgramsCard from './ProgramsCard'
import programsData from '../../assets/ProgramsData'
import styles from './Programs.module.css'
import Nav from '../Nav/Nav'
import Footer from '../footer/Footer'

const Programs = () => {
  return (

    <div>
        <Nav />


    <div className={styles.container}>

        
        {programsData.map((program) => {
            return <ProgramsCard program = {program} /> 

           
            
        })}
        
      
    </div>
    <Footer />
    </div>
  )
}

export default Programs
