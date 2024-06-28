import { useContext } from "react"
import ContextoTexto from "../ContextoTexto"

const Tercero = () => {

    const {texto, usuario} = useContext(ContextoTexto)

    return (
        <div>Tercero {usuario.nombre} {usuario.edad}: {texto}</div>

    )
}
export default Tercero