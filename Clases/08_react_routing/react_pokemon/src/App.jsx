import Menu from "./components/Menu"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from "./components/pages/Inicio";
import Pokemon from "./components/pages/Pokemon";
import PokemonDetalle from "./components/pages/PokemonDetalle";
import './App.css'
 

const App = () => {
  return (
    <BrowserRouter>
      <Menu />      
      <div className="container">
        

      <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<PokemonDetalle />} />
        </Routes>

        
      </div>
    </BrowserRouter>
  )
}

export default App