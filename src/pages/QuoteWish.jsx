import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import WishesContainer from '../components/WishesContainer';
import WishForm from '../components/WishForm';

const QuoteWish = (props) => {
  const {
    DATA: { bride, groom },
    quote,
    wishes,
    postWish,
    deleteWish,
  } = props;

  return (
    <section className="quote-wish">
      <h4 className="italic">Quote</h4>
      <p>
        Kutipan Kebahagiaan {bride.nickname} & {groom.nickname}
      </p>

      <div className="quote-wish__quote">
        <FontAwesomeIcon icon={['fas', 'quote-right']} />
        <br />
        <br />
        <p>{quote.text}</p>
        <strong>{quote.source}</strong>
      </div>

      <p>
        Ucapan Selamat & Doa untuk
        <br />
        {bride.nickname.toUpperCase()} & {groom.nickname.toUpperCase()}
      </p>

      <WishForm postWish={postWish} />
      <WishesContainer wishes={wishes} deleteWish={deleteWish} />
    </section>
  );
};

QuoteWish.propTypes = {
  DATA: PropTypes.shape({
    bride: PropTypes.object,
    groom: PropTypes.object,
  }).isRequired,
  quote: PropTypes.shape({
    text: PropTypes.string,
    source: PropTypes.string,
  }),
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      wish: PropTypes.string,
    })
  ).isRequired,
  postWish: PropTypes.func.isRequired,
  deleteWish: PropTypes.func.isRequired,
};

export default QuoteWish;
