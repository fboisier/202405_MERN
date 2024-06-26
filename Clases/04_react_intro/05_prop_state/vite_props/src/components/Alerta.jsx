import PropTypes from 'prop-types'

const Alerta = props => {
    const { children, tipo: color } = props

    return (
        <div className={`alert alert-${color} mt-4`} role="alert">
            {children}
        </div>
    )
}

Alerta.propTypes = {
    children: PropTypes.node.isRequired,
    tipo: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).isRequired
}

export default Alerta