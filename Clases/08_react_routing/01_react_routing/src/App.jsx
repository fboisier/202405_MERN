import { useState } from "react"
import PaginaUno from "./components/PaginaUno"
import PaginaDos from "./components/PaginaDos"
import PaginaTres from "./components/PaginaTres"
import PaginaCuatro from "./components/PaginaCuatro"

const App = () => {

  const [pagina, setPagina] = useState(1)

  return (
    <div className="container mt-4">
      
      <h2>Simulando cambio de paginas: PAGINA ACTUAL {pagina}</h2>
      <hr />
      <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={() => setPagina( pagina - 1)}>Página ANTERIOR</button>
          <button type="button" className="btn btn-primary" onClick={() => setPagina(1)}>Volver a 1</button>
          <button type="button" className="btn btn-primary" onClick={() => setPagina( pagina + 1)}>Página SIGUIENTE</button>
      </div>

      { pagina === 1 &&  <PaginaUno />}
      { pagina === 2 &&  <PaginaDos />}
      { pagina === 3 &&  <PaginaTres />}
      { pagina === 4 &&  <PaginaCuatro />}

    </div>
  )
}

export default App