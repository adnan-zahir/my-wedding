import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';

const Moment = (props) => {
  const {
    DATA: { bride, groom },
    galleryPictureUrls: galleryPics,
  } = props;

  const pictures = galleryPics.map((pic) => ({
    src: pic,
    width: 1,
    height: 1,
  }));

  return (
    <section className="moment">
      <h4 className="italic">Gallery</h4>
      <p>
        Momen Bahagia {bride.nickname} & {groom.nickname}
      </p>
      <Gallery photos={pictures} />
    </section>
  );
};

Moment.propTypes = {
  DATA: PropTypes.shape({
    bride: PropTypes.object,
    groom: PropTypes.object,
  }).isRequired,
  galleryPictureUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moment;
