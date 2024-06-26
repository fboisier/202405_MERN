import PropTypes from 'prop-types'
import Tercero from "./Tercero"

const Segundo = ({texto}) => {
    return (
        <>
            <div>Segundo</div>
            <Tercero texto={texto}/>
        </>
    )
}

Segundo.propTypes = {
    texto: PropTypes.string.isRequired
}
export default Segundo