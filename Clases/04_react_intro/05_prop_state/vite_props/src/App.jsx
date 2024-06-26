import Contador from "./components/Contador"
import Contenedor from "./components/Contenedor"
import Listados from "./components/Listados"
import Tarjeta from "./components/Tarjeta"
import Titulo from "./components/Titulo"


const App = () => {
  return (
    <>  

      <Contenedor>
        <Titulo>Ejemplos de State con Input</Titulo>
        <Listados />
      </Contenedor>

      <Contenedor>
          <Titulo>Eso es un ejemplo de State</Titulo>
          <Contador valorInicial={20} />
          <Contador valorInicial={1} />
      </Contenedor>

      <Contenedor>
        <Titulo>Esto es el dato que pasa por el props children</Titulo>
        <div className="row">
            <Tarjeta titulo="Esto es una prueba 1" subtitulo="Esto es un subtitulo" link="https://google.com" tipo="I"/>
            <Tarjeta titulo="Esto es una prueba 2" subtitulo="Esto es un subtitulo1" link="https://google.com" tipo="E"/>
            <Tarjeta titulo="Esto es una prueba 3" subtitulo="Esto es un subtitulo2" link="https://google.com" tipo="W"/>
            <Tarjeta titulo="Esto es una prueba 4" subtitulo="Esto es un subtitulo4" link="https://google.com" tipo="O"/>
        </div>
      </Contenedor>
    </>
  )
}

export default App