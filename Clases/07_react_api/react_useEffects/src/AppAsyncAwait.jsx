import useFetch from "./hooks/useFetch"

const AppAsyncAwait = () => {

  const {datos: pokemons, cargando} = useFetch('https://pokeapi.co/api/v2/pokdddddddemon')

  return (
    <div className="container mt-3">
      {
        cargando 
          ? <h1>Cargando...</h1> 
          : (
              pokemons.map((pokemon, index) => {
                return (
                  <div key={index} className="card">
                    <div className="card-body">
                      <h5 className="card-title">{pokemon.name}</h5>
                    </div>
                  </div>
                )
              })
          )
      }
    </div>
  )
}

export default AppAsyncAwait