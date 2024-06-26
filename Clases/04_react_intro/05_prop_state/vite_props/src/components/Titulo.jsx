
import PropTypes from 'prop-types';

const Titulo = ({children}) => {
    return (
        <>
            <h2>{children}</h2>
            <hr />
        </>
    )
}


Titulo.propTypes = {
    children: PropTypes.string.isRequired
}

export default Titulo