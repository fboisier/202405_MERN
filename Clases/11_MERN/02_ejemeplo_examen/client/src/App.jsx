import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormularioProyecto from './components/pages/FormularioProyecto';
import ListadoProyectos from './components/pages/ListadoProyectos';

function App() {

  return (
    <BrowserRouter>
      <div className="container mt-3">
        <h1 className="text-center">Project Manager</h1>
        <Routes>
            <Route path="/" element={<ListadoProyectos />} />
            <Route path="/projects/new" element={<FormularioProyecto/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
