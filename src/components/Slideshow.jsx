import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Slideshow = (props) => {
  const { slideshowPictureUrls } = props;

  useEffect(() => {
    // Set slideshow interval in ms
    const slideshowIntervalTime = 5000;

    // Play slideshow
    let activeSlide = 0;
    const slideshowInterval = setInterval(() => {
      try {
        // Get slideshow pictures
        const slideshowPictures =
          document.querySelectorAll('.slideshow-picture');
        // Reset slide
        Object.values(slideshowPictures).map((picture) =>
          picture.classList.remove('active')
        );
        // Set current active slide
        slideshowPictures[activeSlide].classList.add('active');

        // Set the next slide index
        activeSlide < slideshowPictures.length - 1
          ? activeSlide++
          : (activeSlide = 0);
      } catch (err) {
        console.log(err);
      }
    }, slideshowIntervalTime);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, []);

  return (
    <div className="slideshow play">
      {slideshowPictureUrls.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt="Slideshow"
          className="slideshow-picture"
        />
      ))}
    </div>
  );
};

Slideshow.propTypes = {
  slideshowPictureUrls: PropTypes.array,
};

export default Slideshow;
