
import PropTypes from 'prop-types';


const Contenedor = ({children}) => {
    return (
        <div className="container mt-5">
            {children}
        </div>
    )
}

Contenedor.propTypes = {
    children: PropTypes.node.isRequired
}

export default Contenedor