import PropTypes from 'prop-types';
import Primero from './ejemplo/Primero';


const MostrarTexto = ({texto}) => {
    return (
        <>
            <div>El texto ES: {texto}</div>
            <Primero texto={texto}/>
        </>
    )
}

MostrarTexto.propTypes = {
    texto: PropTypes.string.isRequired
}

export default MostrarTexto