import axios from "axios";
import { useEffect, useState } from "react";
import {  Link } from 'react-router-dom';
const ListadoParametros = () => {

    const [parametros, setParametros] = useState([])

    useEffect(() => {
        const obtenerParametros = async () => {
            const { data } = await axios.get('/api/v1/parametros');
            setParametros(data);
        }
        obtenerParametros();
    }, [])


    return (
        <div>
            <h1>Listado de Parametros</h1>
            <table className="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>LLAVE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                {
                    parametros.map(parametro => (
                        <tr key={parametro._id}>
                            <td>{parametro.llave}</td>
                            <td>{parametro.valor}</td>
                        </tr>
                    ))
                }
                </tbody>
              
            </table>
            <Link className='btn btn-primary' to='/crear'>CREAR NUEVO PARAMETRO</Link>
        </div>
    )
}

export default ListadoParametros