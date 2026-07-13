import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound  = () => {
  return (
    <div>
         <h1> 404 |Page not found!</h1>
        <Link to="/" >

       Go BAck Home
        </Link>
      
    </div>
  )
}

export default PageNotFound 
