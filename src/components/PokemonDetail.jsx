import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function PokemonDetail(props){
  //console.log(props)
  
  const { name, url} = props
    const [pokeImg, setPokeImg] = useState(null)
    
    useEffect(() => {
      
      async function fetchPokemon(url) {
        try{
          const res = await axios.get(url)
          const data = res.data
          setPokeImg(
            data.sprites.front_default ?? 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/128?cb=20170407192412'
              )
        }catch(e){
  
        }
        
        //axios old
        // axios
        // .get(url)
        // .then((res) => {
        //   console.log(res)
        //   return res.data
        // })
        // .then((data) => {
        //   console.log(data)
        // })
  
  
        
        //await version
        // try{
        //   const res = await fetch(url)
        //   const data = await res.json()
        //   console.log(data)
        //   setPokeImg(
        //     data.sprites.front_default ?? 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/128?cb=20170407192412'
        //   )
        // }catch (err){
  
        // }
      }
  
      // fetch version 
      // fetch(url)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setPokeImg(data.sprites.front_default ?? 'https://vignette.wikia.nocookie.net/pkmnshuffle/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/128?cb=20170407192412')
      //   })
      fetchPokemon(url)
    } ,[url])
  
    return (
      <div>
        <p>{props.name}</p>
        <img src={pokeImg} alt='pokemon' />
      
      </div>
    )
    
  }