import PropTypes from 'prop-types'
import Segundo from "./Segundo"

const Primero = ({texto}) => {
    return (
        <>
            <div>Primero</div>        
            <Segundo texto={texto}/>
        </>
    )
}

Primero.propTypes = {
    texto: PropTypes.string.isRequired
}
export default Primero