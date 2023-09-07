import React from 'react'
import HeroStatsCard from '../HeroStatsCard'

const HeroList = ({ heroData }) => {
  console.log(heroData)
  return (
    <div>
      {
        heroData.map(hero => <HeroStatsCard key={hero.id} hero={hero} />)
      }
    </div>
    
  )
}

export default HeroList
