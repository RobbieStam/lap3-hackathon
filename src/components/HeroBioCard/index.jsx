import React from 'react'

const HeroBioCard = ({ superhero }) => {

    // const listAliases 
  return (
    <div>
        <div>
            <img src={superhero.image.url} alt={superhero.biography["full-name"]} />
        </div>
        <div>
            
            <h2>{superhero.biography["full-name"]}</h2>
            <h3>Also known as {superhero.name}</h3>
            {/* // {
            //     superhero
            // } */}
            <div>
                <ul>
                    <li>Alter ego: {superhero.biography["alter-egos"]}</li>
                    <li>Aliases: {superhero.biography.aliases}</li>
                    <li>Place of birth: {superhero.biography["place-of-birth"]}</li>
                    <li>First appearance: {superhero.biography["first-appearance"]}</li>
                    <li>Publisher: {superhero.biography.publisher}</li>
                    <li>Alignment: {superhero.biography.alignment}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeroBioCard