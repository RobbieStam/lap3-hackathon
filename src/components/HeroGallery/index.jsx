import React from 'react'
import HeroItem from '.'

const HeroGallery = ({ heros }) => {
  return (
    <div className='heros'>
      {
        heros.map(hero => <HeroItem key={hero.id} hero={hero} />) 
      }

    </div>
  )
}

export default HeroGallery
