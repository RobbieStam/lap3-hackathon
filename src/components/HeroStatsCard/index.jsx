import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroStatsCard = ({ hero }) => {
  return (
    <>
    <div className="hero-card">
    <NavLink className="title-link" to={"http://localhost:5173/superheros/" + hero.id}>{hero.name}</NavLink>
      <div>
        <img src={hero.image.url} alt={hero.name} />
      </div>
      <div>
        <div>

              <h2>Hero's Stats</h2>
            <ul>
              <li>IQ: {hero.powerstats.intelligence}</li>
              <li>Strength: {hero.powerstats.strength}</li>
              <li>Speed: {hero.powerstats.speed}</li>
              <li>Durability: {hero.powerstats.durability}</li>
              <li>Power: {hero.powerstats.power}</li>
              <li>Combat: {hero.powerstats.combat}</li>
            </ul>

        </div>
      </div>
    </div>
    </>
  )
}

export default HeroStatsCard
