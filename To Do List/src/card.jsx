import image from './assets/image.png';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className="card">
            <img src={image} alt="Img not found!" className='card-img'/>
            <h1 className='card-title'>{props.username}</h1>
            <p className='card-desc'>I am learning react</p>
        </div>
    );
}

Card.propTypes = {
    username: PropTypes.string,
};

Card.defaultProps = {
    username: "Guest",
};

export default Card;
