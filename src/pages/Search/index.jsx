import React, { useState, useEffect } from 'react'
import { SearchForm, HeroList } from '../../components'

const Search = () => {
  const [search, setSearch] = useState('Batman');
  const [heroData, setHeroData] = useState([])

  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(`https://www.superheroapi.com/api.php/10225446179047801/search/${search}`)
      const data = await response.json()
      setHeroData(data.results)
    }
    searchAPI()
  }, [search])

  return (
    <>
      <SearchForm getHeros={setSearch} />
      <HeroList heroData={heroData} />
    </>
  )
}

export default Search
