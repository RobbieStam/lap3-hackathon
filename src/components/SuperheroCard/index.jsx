import React from 'react'

const SuperheroCard = ({ superhero }) => {
  return (
    <div>
        <div>
            <img src={superhero.image.url} alt={superhero.name} />
        </div>
        <div>
            <h2>{superhero.biography.aliases[0]}</h2>
            {
                superhero
            }
        </div>
    </div>
  )
}

export default SuperheroCard