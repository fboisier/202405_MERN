import { useState } from "react"
import axios from 'axios';

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pagina, setPagina] = useState(0)


  const handleClickGetPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokfffemon?offset=${pagina * 10}&limit=10`)
    .then(response => {
        setPokemons([...pokemons, ...response.data.results]);
        setPagina(pagina + 1)
    }).catch(err => {
        console.log(err);
    });
  }

  return (
    <div className="container mt-3">
      <div>
        <button onClick={handleClickGetPokemon} className="btn btn-primary">Get Pokemons!</button>
      </div>
      {
        pokemons.map((pokemon, index) => {
          return (
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App