import { useState } from "react"
import CajaTexto from "./CajaTexto"
import MostrarTexto from "./MostrarTexto"

const Listados = () => {

    const [texto, setTexto] = useState('PANCHO')

    return (
        <>
            <h4>Listados</h4>
            <div className="row">
                <div className="col">
                    <CajaTexto texto={texto} setTexto={setTexto} />
                </div>
                <div className="col">
                    <MostrarTexto texto={texto} />
                </div>
            </div>
        </>
    )
}

export default Listados