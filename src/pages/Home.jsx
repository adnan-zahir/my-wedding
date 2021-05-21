import PropTypes from 'prop-types';
import Slideshow from '../components/Slideshow';

const Home = (props) => {
  const { DATA, slideshowPictureUrls } = props;

  return (
    <section className="home non-padded">
      <Slideshow slideshowPictureUrls={slideshowPictureUrls} />
      <div className="title">
        <h2>The Wedding of</h2>
        <h1>
          {DATA.bride.nickname} & {DATA.groom.nickname}
        </h1>
        <h3>Official Invitation</h3>
      </div>
    </section>
  );
};

Home.propTypes = {
  DATA: PropTypes.shape({
    bride: PropTypes.object,
    groom: PropTypes.object,
  }),
  slideshowPictureUrls: PropTypes.array,
};

Home.defaultProps = {
  DATA: {
    bride: {
      name: 'Bride',
      nickname: 'Bride',
      father_name: 'Father',
      mother_name: 'Mother',
    },
    groom: {
      name: 'Groom',
      nickname: 'Groom',
      father_name: 'Father',
      mother_name: 'Mother',
    },
  },
};

export default Home;
