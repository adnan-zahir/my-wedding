import PropTypes from 'prop-types';
import WishCard from './WishCard';

const WishesContainer = (props) => {
  const { wishes, deleteWish } = props;

  return (
    <div className="wishes-container">
      {wishes.map(({ name, wish, _id }) => (
        <WishCard
          key={name + Math.random()}
          wishId={_id}
          name={name}
          wish={wish}
          deleteWish={deleteWish}
        />
      ))}
    </div>
  );
};

WishesContainer.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      wish: PropTypes.string,
    })
  ).isRequired,
  deleteWish: PropTypes.func.isRequired,
};

export default WishesContainer;
