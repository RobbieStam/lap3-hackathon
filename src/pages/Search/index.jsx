import React, { useState, useEffect } from 'react'
import { SearchForm, HeroList } from '../../components'

const Search = () => {
  const [search, setSearch] = useState('S');
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
      <h1 style={{ fontSize: "9vh" }}>Search</h1>
      <SearchForm getHeros={setSearch} />
      <HeroList heroData={heroData} />
    </>
  )
}

export default Search
