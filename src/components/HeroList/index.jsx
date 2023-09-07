import React from 'react'
import HeroCard from '../HeroCard'

const HeroList = ({ heroData }) => {
  console.log(heroData)
  return (
    <div>
      {
        heroData.map(hero => <HeroCard key={hero.id} hero={hero} />)
      }
    </div>
    
  )
}

export default HeroList
