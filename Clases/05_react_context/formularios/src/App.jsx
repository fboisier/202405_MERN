import FormularioNormal from "./components/formulario/FormularioNormal"
import FormularioObjetos from "./components/formulario/FormularioObjetos"
import Mapeos from "./components/maps/Mapeos"
import MapeosObjetos from "./components/maps/MapeosObjetos"
import MostrarListado from "./components/states/MostrarListado"

const App = () => {

  return (
    <div className="container mt-4">
      <h2>Formulario Objetos</h2>
      <hr />
      <FormularioObjetos />

      <h2>Formulario Normal</h2>
      <hr />
      <FormularioNormal />

      <h2>Elevando Estado</h2>
      <hr />
      <MostrarListado />

      <h2>Maps</h2>
      <hr />
      <div className="row">
        <div className="col">
          <Mapeos />
        </div>
        <div className="col">
          <MapeosObjetos />
        </div>
      </div>
    </div>
  )
}

export default App
