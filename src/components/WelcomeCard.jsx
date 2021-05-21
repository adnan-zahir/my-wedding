import PropTypes from 'prop-types';

const WelcomeCard = (props) => {
  // Props
  const { pictureUrl, guest } = props;

  // Event Handler
  const clickHandler = () => {
    // Hide Welcome Card
    const welcomeCard = document.querySelector('#welcomeCard');
    welcomeCard.classList.remove('show');

    // Change display to none after transition/animated
    welcomeCard.addEventListener('animationend', () => {
      welcomeCard.style.display = 'none';
    });
  };

  return (
    <div className="welcome-card show" id="welcomeCard">
      <img className="welcome-card__picture" src={pictureUrl} alt="Welcome" />
      <span>Kepada Yth.</span>
      <span>Bapak/Ibu/Saudara/i</span>
      <span>{guest}</span>
      <button onClick={clickHandler}>Buka Undangan</button>
    </div>
  );
};

WelcomeCard.propTypes = {
  pictureUrl: PropTypes.string,
  guest: PropTypes.string,
};

WelcomeCard.defaultProps = {
  pictureUrl: '',
  guest: '',
};

export default WelcomeCard;
