import React, {useEffect, useState} from 'react'
import PokemonDetail from './PokemonDetail'

export default function PokemonList() {
const [pokemons, setPokemons] = useState(null)
  let data = null
  useEffect (() => {
    //componentdismount
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then((res) => {
        return res.json()
    })
    .then((data) =>{
        setPokemons(data.results)
        console.log(data.results)

    })
  }, [])

  return (
    <div className='App'> 
      {pokemons && pokemons.map((pokemon) => {
        return <PokemonDetail key={pokemon.name} {...pokemon} />
      })
    } 
    </div>
  )
  

} 