import PropTypes from 'prop-types';

const CajaTexto = ({texto, setTexto}) => {

    const handleChange = (elemento) => {
        setTexto(elemento.target.value)
    }

    return (
        <div className="mb-3">
            <input type="text" onChange={handleChange} value={texto} className="form-control" placeholder="Ingresar Texto" />
        </div>
    )
}

CajaTexto.propTypes = {
    texto: PropTypes.string.isRequired,
    setTexto: PropTypes.func.isRequired
}

export default CajaTexto