import './App.css'
import ActualizarParametros from './components/ActualizarParametros';
import CrearParametros from './components/CrearParametros';
import ListadoParametros from './components/ListadoParametros'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
            <Route path="/" element={<ListadoParametros/>} />
            <Route path="/crear" element={<CrearParametros/>} />
            <Route path="/actualizar/:llave" element={<ActualizarParametros/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
