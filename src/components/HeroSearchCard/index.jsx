import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSearchCard = ({ hero }) => {
  return (
    <>
      <div className="hero-card">
      <NavLink className="title-link" to={"http://localhost:5173/superheros/" + hero.id}>{hero.name}</NavLink>
        <div>
          <img src={hero.image.url} alt={hero.name} />
        </div>
        <div>
          {hero.powerstats.power === 'null' ? '' : <h2>Power: {hero.powerstats.power}</h2>}
          <h2>Alignment: {hero.biography.alignment}</h2>
        </div>
      </div>
    </>
  )
}

export default HeroSearchCard
