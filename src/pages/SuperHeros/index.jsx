import React, { useState, useEffect } from 'react'
import { HeroGallery } from '../../components'

const SuperHeros = () => {
  const [superHeros, setSuperHeros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSuperHeros()
  }, [])

  async function fetchSuperHeros() {
    try {
      const response =  await fetch('https://www.superheroapi.com/api.php/3713264402252430/')
      const data = await response.json()
      setSuperHeros(data)
      console.log(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
    }
  }

  const errorOrGallery = error ? 'error' : <HeroGallery superHeros={superHeros} />

  return (
    <>
      {
        loading ? <p>Loading ...</p> : errorOrGallery
      }
    </>
  )
}

export default SuperHeros
