import React from 'react'

const HeroCard = ({ hero }) => {
  return (
    <div className="hero-card">
      <div>
        <img src={hero.image.url} alt={hero.name} />
      </div>
      <div>
        <div>
          {
            <ul>
              <li>IQ: {hero.powerstats.intelligence}</li>
              <li>Strength: {hero.powerstats.strength}</li>
              <li>Speed: {hero.powerstats.speed}</li>
              <li>Durability: {hero.powerstats.durability}</li>
              <li>Power: {hero.powerstats.power}</li>
              <li>Combat: {hero.powerstats.combat}</li>
            </ul>
          }
        </div>
      </div>
    </div>
  )
}

export default HeroCard
