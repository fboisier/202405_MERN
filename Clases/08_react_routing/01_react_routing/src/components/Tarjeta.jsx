import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tarjeta = ({ title, image, buttonText, buttonUrl }) => (
    <div className="card mt-3">
        <img src={image} className="card-img-top" alt={title}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <Link to={buttonUrl} className="btn btn-primary">{buttonText}</Link>
        </div>
    </div>
);

Tarjeta.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonUrl: PropTypes.string.isRequired
};

export default Tarjeta;
