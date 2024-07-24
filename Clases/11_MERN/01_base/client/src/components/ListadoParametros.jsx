import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import CrearParametros from "./CrearParametros";

const ListadoParametros = () => {

    const [parametros, setParametros] = useState([])

    useEffect(() => {
        const obtenerParametros = async () => {
            const { data } = await axios.get('/api/v1/parametros');
            setParametros(data);
        }
        obtenerParametros();
    }, [])

    const eliminarParametro = async (llave) => {
        try {
            await axios.delete(`/api/v1/parametros/${llave}`);
            setParametros(parametros.filter(parametro => parametro.llave !== llave));
        } catch (error) {
            Swal.fire({
                title: "Ups un error",
                text: error.response.data.message,
                icon: "error"
            });
        }
    };

    const preguntarEliminar = (llave) => {
        Swal.fire({
            title: "Estas seguro?",
            text: `Estas a punto de eliminar el registro. ${llave}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!!!!",
            cancelButtonText: "Cancelar"

        }).then((result) => {
            if (result.isConfirmed) {
                eliminarParametro(llave);
            }
        });
    }

    return (
        <>
            <div className="mt-3">
                <h1>Listado de Parametros</h1>
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>LLAVE</th>
                            <th>VALOR</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parametros.map(parametro => (
                                <tr key={parametro._id}>
                                    <td>{parametro.llave}</td>
                                    <td>{parametro.valor}</td>
                                    <td>
                                        <Link className='btn btn-warning' to={`/actualizar/${parametro.llave}`}>Actualizar</Link>
                                        <button className='btn btn-danger ms-2' onClick={() => preguntarEliminar(parametro.llave)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link className='btn btn-primary' to='/crear'>CREAR NUEVO PARAMETRO</Link>
            </div>
        </>
    )
}

export default ListadoParametros