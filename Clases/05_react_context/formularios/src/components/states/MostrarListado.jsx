import { useState } from "react"
import Input from "./Input"
import Listado from "./Listado"

const MostrarListado = () => {

    const [tareas, setTareas] = useState([])


    return (
        <div className="row">
            <div className="col">
                <Input tareas={tareas} setTareas={setTareas}/>
            </div>
            <div className="col">
                <Listado tareas={tareas}/>
            </div>            
        </div>
    )
}

export default MostrarListado