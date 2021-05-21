import PropTypes from 'prop-types';

const Maps = (props) => {
  const { gmapsIframe, gmapsUrl } = props;

  return (
    <div className="maps">
      <iframe
        title="Event Location"
        className="maps-iframe"
        width="400"
        height="300"
        loading="lazy"
        allowFullScreen
        src={gmapsIframe}
        frameBorder="0"
      ></iframe>
      <a href={gmapsUrl} className="btn maps-link">
        Open Map
      </a>
    </div>
  );
};

Maps.propTypes = {
  gmapsIframe: PropTypes.string.isRequired,
  gmapsUrl: PropTypes.string.isRequired,
};

export default Maps;
