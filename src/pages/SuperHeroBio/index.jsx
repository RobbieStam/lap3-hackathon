import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { HeroBioCard } from '../../components'

const SuperHeroBio = () => {
    const [superhero, setSuperhero] = useState({ image: {}, biography: {}})
    const { id } = useParams()

    useEffect(() => {
        async function fetchSuperhero() {
            const resp = await fetch(`https://www.superheroapi.com/api.php/3713264402252430/${id}`)
            const data = await resp.json()
            setSuperhero(data)
        }
        fetchSuperhero()
    }, [id])
    return (
        <div>
            <HeroBioCard superhero={superhero} />
        </div>
    )
    }
export default SuperHeroBio