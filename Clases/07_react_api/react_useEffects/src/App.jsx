import { useEffect, useState } from "react"

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pagina, setPagina] = useState(0)
  const [solicitarDatos, setSolicitarDatos] = useState(true)


  const handleClickGetPokemon = () => {
    setSolicitarDatos(true)
  }

  useEffect(() => {
    if (solicitarDatos){
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pagina * 10}&limit=10`)
      .then(response => {
          return response.json();
      }).then(response => {
          setPokemons([...pokemons, ...response.results]);
          setPagina(pagina + 1)
          setSolicitarDatos(false)
      }).catch(err => {
          console.log(err);
      });
    }
  }, [pokemons, pagina, solicitarDatos])

  useEffect(()=> {
    console.log("HOLA!");
  }, [])

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