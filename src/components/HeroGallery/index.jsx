import React from 'react'
// import HeroItem from '.'
import { Link } from 'react-router-dom'

const HeroGallery = ({ superHeros }) => {
  return (
    <>
    <div className='heros'>
      {
        superHeros.map(hero => 
          <>
            <Link>
              <h1>{hero.name}</h1>
              <div className="hero-image">
                <img src={hero.image.url} alt={hero.name} />
              </div>
            </Link>
          </>
          ) 
      }
    </div>
    </>
  )
}

export default HeroGallery
