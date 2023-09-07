import React from 'react'
import HeroCard from '.'

const HeroList = ({ heroData }) => {
  return (
    <div className="heros">
      {
        heroData.filter(hero => hero.image? true : false)
        .map(hero => <HeroCard key={hero.id} hero={hero} />)
      }
    </div>
  )
}

export default HeroList
