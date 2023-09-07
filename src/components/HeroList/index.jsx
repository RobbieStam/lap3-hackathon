import React from 'react'
import HeroSearchCard from '../HeroSearchCard'

const HeroList = ({ heroData }) => {
  console.log(heroData)
  return (
    <div>
      {
        heroData.map(hero => <HeroSearchCard key={hero.id} hero={hero} />)
      }
    </div>
    
  )
}

export default HeroList
