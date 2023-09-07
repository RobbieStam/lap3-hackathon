import React from 'react'
import { Link } from 'react-router-dom'

const HeroItem = ({ hero }) => {
  return (
    <Link>
    <div className="hero-image">
      <img src={hero.image.medium} alt="" />
    </div>
    </Link>
  )
}

export default HeroItem
