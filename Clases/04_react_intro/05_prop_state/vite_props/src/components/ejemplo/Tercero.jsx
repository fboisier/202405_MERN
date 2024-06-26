import PropTypes from 'prop-types'

const Tercero = ({texto}) => {
    return (
        <div>Tercero: {texto}</div>
    )
}

Tercero.propTypes = {
    texto: PropTypes.string.isRequired
}
export default Tercero