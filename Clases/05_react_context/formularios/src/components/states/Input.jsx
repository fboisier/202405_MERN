import PropTypes from 'prop-types'

import { useState } from "react"
import Swal from 'sweetalert2'

const Input = ({tareas, setTareas}) => {

    const [valor, setValor] = useState('')


    const handlerInput = (event) => setValor(event.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (valor === ''){
            Swal.fire({
                title: "Mensaje del Sistema!",
                text: "No puedes enviar una cadena vacía",
                icon: "error"
            });
            return
        }

        setTareas([...tareas, valor])
        setValor('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-control mt-2 mb-3" 
                    placeholder="Ingresar Texto"
                    value={valor}
                    onChange={handlerInput}
                />
                <button type="submit" className="btn btn-primary mb-3">Enviar</button>
                <button type="button" onClick={() => setTareas([])} className="btn btn-danger mb-3 ms-2">Limpiar</button>
            </form>
        </div>
    )
}

Input.propTypes = {
    tareas: PropTypes.array.isRequired,
    setTareas: PropTypes.func.isRequired
}

export default Input