import PropTypes from 'prop-types';
import styles from './Tarjeta.module.css'
import Alerta from './Alerta';

const Tarjeta = (props) => {
    // VARIABLES
    const {titulo, link, subtitulo, tipo} = props

    // MANEJADORES DE EVENTOS


    // RENDERIZADO JSX
    return (
        <div className="col-4 py-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{subtitulo}</h6>
                    <p className="card-text">Some quick <span className={styles.textRojo}>example</span> text to build on the card title and make up the bulk of the cards content.</p>
                    <a href={link} className="card-link">Enlace a Google</a>
                    {(tipo === 'I') ? <Alerta tipo="primary">Información</Alerta> : null }
                    {(tipo === 'E') ? <Alerta tipo="danger">Error</Alerta> : null }
                    {(tipo === 'W') ? <Alerta tipo="warning">Advertencia</Alerta> : null }
                    {(tipo === 'O') ? <Alerta tipo="light">Otra cosa</Alerta> : null }
                </div>
            </div>
        </div>
    )
}

Tarjeta.propTypes = {
    titulo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(['I', 'E', 'W', 'O'])
}

export default Tarjeta