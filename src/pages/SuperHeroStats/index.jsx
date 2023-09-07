import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { HeroStatsCard } from '../../components'

const SuperHeroStats = () => {
    const [hero, setHero] = useState({image: {}, powerstats: {}})
    const { id } = useParams()

    useEffect(() => {
        async function fetchHero() {
            const resp = await fetch(`https://www.superheroapi.com/api.php/3713264402252430/${id}`)
            const data = await resp.json()
            setHero(data)
        }
        fetchHero()
    }, [id])
    return (
        <div>
            <HeroStatsCard hero={hero} />
        </div>
    )
    }
export default SuperHeroStats