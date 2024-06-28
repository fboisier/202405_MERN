import PropTypes from 'prop-types'

const Producto = ({ children, color = '', cantidad = 0 }) => {
    return (
        <div className={`alert alert-${  cantidad % 2 === 0 ? 'danger' : 'primary'  }`}>
            {children} { color != '' ? ` - Color: ${ color }` : '' } { cantidad != 0 && ` - Cantidad: ${ cantidad }`}
        </div>
    )
}

Producto.propTypes = {
    children: PropTypes.string.isRequired,
    color: PropTypes.string,
    cantidad: PropTypes.number
}

export default Producto