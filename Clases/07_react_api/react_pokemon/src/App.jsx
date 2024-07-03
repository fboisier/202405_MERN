import { useState } from "react"

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pagina, setPagina] = useState(0)


  const handleClickGetPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pagina * 10}&limit=10`)
    .then(response => {
        return response.json();
    }).then(response => {
        setPokemons([...pokemons, ...response.results]);
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