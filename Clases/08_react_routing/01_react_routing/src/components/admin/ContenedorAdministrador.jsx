import { Outlet } from "react-router-dom"

const ContenedorAdministrador = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>Administrador</h1>
                    <hr/>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ContenedorAdministrador