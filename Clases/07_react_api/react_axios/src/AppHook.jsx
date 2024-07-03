import useAxios from "./hooks/useAxios";

const AppHook = () => {

  const {data , isLoading, error} = useAxios('https://pokeapi.co/api/v2/pokemon?limit=10')
  const pokemons = data?.results;

  return (
    <div className="container mt-3">

      {
        isLoading
          ? <h1>Cargando...</h1>
          : (
            error
              ? <h1>{error.message}</h1>
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
          )
      }
    </div>
  )
}

export default AppHook