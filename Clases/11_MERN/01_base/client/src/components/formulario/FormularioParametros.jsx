import Loading from "../Loading";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ParametroValidacionSchema = Yup.object().shape({
    llave: Yup.string()
        .min(2, 'la llave debe tener al menos 2 caracteres')
        .max(70, 'no debe superar los 70 caracteres')
        .required('Este campo es requerido.'),
    valor: Yup.string()
        .min(2, 'el valor debe tener al menos 2 caracteres')
        .max(70, 'no debe superar los 70 caracteres')
        .required('Este campo valor es requerido'),
});


const FormularioParametros = ({ initialValues, handleSubmit, esEditar = false }) => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={ParametroValidacionSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ isSubmitting }) => (
                        (isSubmitting)
                            ? <Loading />
                            :
                            <Form>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="llave" className="form-label">Llave</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="llave"
                                        name="llave"
                                        disabled={esEditar}
                                    />
                                    <ErrorMessage
                                        name="llave"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="valor" className="form-label">Valor</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="valor"
                                        name="valor"
                                    />
                                    <ErrorMessage
                                        name="valor"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className={`btn btn-${ (esEditar) ? 'warning' : 'primary' }`}
                                    disabled={isSubmitting}
                                >
                                    { (esEditar) ? 'Actualizar' : 'Crear'} Parametro
                                </button>
                            </Form>
                    )
                }
            </Formik>
        </>
    )
}

export default FormularioParametros