
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom";
import FormularioParametros from "./formulario/FormularioParametros";
import { useEffect, useState } from "react";
import Loading from "./Loading";


const ActualizarParametros = () => {

    const { llave } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState(null)

    useEffect(() => {
        const obtenerParametros = async () => {
            try{
                const { data } = await axios.get(`/api/v1/parametros/${llave}`);
                setInitialValues(data)
            }
            catch(error){
                Swal.fire({
                    title: "Ups un error",
                    text: error.response.data.message,
                    icon: "error"
                });
            }
        }
        obtenerParametros();
    }, [llave])

    const handleSubmitActualizar = (values) => {
        
        const obtenerParametros = async () => {
            try{
                const { data } = await axios.put(`/api/v1/parametros/${llave}`, values);

                Swal.fire({
                    title: "GENIAL!",
                    text:`Se ha actualiza el parametro ${data.llave} (${data._id})`,
                    icon: "success"
                });

                navigate('/');
            }
            catch(error){
                Swal.fire({
                    title: "Ups un error",
                    text:  error.response.data.message,
                    icon: "error"
                });
            }
        }
        obtenerParametros();
    }

    return (
    <>
        <h2 className="mt-5">Formulario para actualizar el parametro {llave}</h2>
        <hr />
        {
            (initialValues) ?
                <FormularioParametros initialValues={initialValues} handleSubmit={handleSubmitActualizar} esEditar />
                : <Loading />
        }
    </>
    )
}

export default ActualizarParametros