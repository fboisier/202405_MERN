import PaginaUno from "./components/PaginaUno"
import PaginaDos from "./components/PaginaDos"
import PaginaTres from "./components/PaginaTres"
import PaginaCuatro from "./components/PaginaCuatro"
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import NoEncontrada from "./components/NoEncontrada";
import ContenedorAdministrador from "./components/admin/ContenedorAdministrador";
import Permisos from "./components/admin/Permisos";
import Usuarios from "./components/admin/Usuarios";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <div className="container mt-4">
        
        <h2>React Router DOM</h2>
        <hr />
        <nav>
          <ul>
            <li><Link to="/" className="btn btn-primary mt-1">PaginaUno</Link></li>
            <li><Link to="/dos/pedro" className="btn btn-primary mt-1">PaginaDos</Link></li>
            <li><Link to="/tres" className="btn btn-primary mt-1">PaginaTres</Link></li>
            <li><Link to="/cuatro" className="btn btn-primary mt-1">PaginaCuatro</Link></li>
          </ul>
          
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/uno" />} />
          <Route path="/uno" element={<PaginaUno />} />
          <Route path="/dos/:nombre" element={<PaginaDos />} />
          <Route path="/tres" element={<PaginaTres />} />
          <Route path="/cuatro" element={<PaginaCuatro />} />
          <Route path="/dos/lala" element={<PaginaUno />} />

          <Route path="/admin/" element={<ContenedorAdministrador />}>
            <Route path="permisos" element={<Permisos />} />
            <Route path="usuarios" element={<Usuarios />} />
          </Route>

          <Route path="*" element={<NoEncontrada />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default AppRouter