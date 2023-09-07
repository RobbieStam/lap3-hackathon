import React, { useState} from 'react'

const SearchForm = ({ getHeros }) => {
  const [hero, setHero] = useState('');

  function handleInput (e) {
    setHero(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getHeros(hero)
    setHero('')
  }

  return (
    <form 
    onSubmit={handleSubmit}
    aria-label="search-heros"
    >
      <label>Heros</label>
      <input 
      type="text"
      id='heros'
      value={hero}
      onChange={handleInput}
      />
      <input type="submit" value='Search' />
    </form>
  )
}

export default SearchForm
