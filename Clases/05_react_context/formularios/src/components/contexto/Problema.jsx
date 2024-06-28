import { useContext } from "react"
import CajaTexto from "./CajaTexto"
import Primero from "./ejemplo/Primero"
import ContextoTexto from "./ContextoTexto"

const Problema = () => {
    const {texto, setTexto} = useContext(ContextoTexto)

    return (
        <>
            <Primero/>
            <CajaTexto texto={texto} setTexto={setTexto} />
        </>
    )
}

export default Problema