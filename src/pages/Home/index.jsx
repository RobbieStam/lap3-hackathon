import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <div className='middle'>
      <div>
        <h2>Discover Your Favorite Super Heroes</h2>
        <p>Ready to find your favorite superheroes? Click the button below to start your search adventure!</p>
        <Link to='/search'>
          <button>Search</button>
        </Link>
      </div>
      
      
    </div>
    
  )
}

export default Home
