import React, { useState, useEffect } from 'react'
import { HeroGallery } from '../../components'

const SuperHeros = () => {
  const [superHeros, setSuperHeros] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(`https://www.superheroapi.com/api.php/10225446179047801/search/a`)
      const data = await response.json()
      setSuperHeros(data.results)
    }
    fetchAPI()
  }, [])

  return (
    <>
    <h1>Super Heros</h1>
    <HeroGallery superHeros={superHeros} />
    </>
    
  )
}

export default SuperHeros
