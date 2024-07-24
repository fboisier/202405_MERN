
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import FormularioParametros from "./formulario/FormularioParametros";


const CrearParametros = () => {

    const navigate = useNavigate();

    const initialValues = {
        llave: '',
        valor: '',
    }

    const handleSubmit = (values) => {
        
        const obtenerParametros = async () => {
            try{
                const { data } = await axios.post('/api/v1/parametros', values);

                Swal.fire({
                    title: "GENIAL!",
                    text:`Se ha creado el parametro ${data.llave} (${data._id})`,
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
        <h2 className="mt-5">Formulario para crear parametros</h2>
        <hr />
        <FormularioParametros initialValues={initialValues} handleSubmit={handleSubmit} />
    </>
    )
}

export default CrearParametros