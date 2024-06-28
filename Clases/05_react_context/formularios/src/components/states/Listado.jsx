import Producto from "../maps/Producto"

const Listado = ({tareas}) => {

    return (
        tareas.map((tarea, index) => {
            return <Producto key={index}>{tarea}</Producto>
        })
    )
}

export default Listado