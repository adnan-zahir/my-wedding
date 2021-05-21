import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const WishCard = (props) => {
  const { name, wish, wishId, deleteWish } = props;

  const handleDelete = () => {
    deleteWish(wishId);
  };

  return (
    <div className="card card-shadow wish-card">
      <span className="wish-card__name">{name}</span>
      <p className="wish-card__text">{wish}</p>
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon={['fas', 'times']} />
      </button>
    </div>
  );
};

WishCard.propTypes = {
  name: PropTypes.string.isRequired,
  wish: PropTypes.string.isRequired,
  wishId: PropTypes.string.isRequired,
  deleteWish: PropTypes.func.isRequired,
};

export default WishCard;
