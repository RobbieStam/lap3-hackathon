import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroBioCard = ({ superhero }) => {

    // const listAliases 
  return (
    <div className="hero-card">
        <div>
            <img src={superhero.image.url} alt={superhero.biography["full-name"]} />
        </div>
        <div>
            
            <h2>{superhero.name}</h2>
            <h3>Also known as {superhero.biography["full-name"]}</h3>
            <div>
                <ul>
                    {superhero.biography["alter-egos"] === "No alter egos found." ? '' : <li>Aliases: {superhero.biography["alter-egos"]}</li>}
                    <li>Aliases: <br />{superhero.biography.aliases}</li>
                    <li>Place of birth: <br />{superhero.biography["place-of-birth"]}</li>
                    <li>First appearance: <br />{superhero.biography["first-appearance"]}</li>
                    <li>Publisher: <br />{superhero.biography.publisher}</li>
                    <li>Alignment: <br />{superhero.biography.alignment}</li>
                    <NavLink className="see-more-btn" to={"http://localhost:5173/superheros/" + superhero.id + "/stats"}>See Stats</NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeroBioCard
