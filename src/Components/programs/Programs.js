import React from 'react'
import ProgramsCard from './ProgramsCard'
import programsData from '../../assets/ProgramsData'
import styles from './Programs.module.css'

const Programs = () => {
  return (


    <div className={styles.container}>
        {programsData.map((program) => {
            return <ProgramsCard program = {program} /> 

           
            
        })}
        
      
    </div>
  )
}

export default Programs
