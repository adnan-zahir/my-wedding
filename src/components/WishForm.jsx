import PropTypes from 'prop-types';
import { useState } from 'react';

const WishForm = (props) => {
  const { postWish } = props;

  // States
  const [inputName, setInputName] = useState('');
  const [inputWish, setInputWish] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputWish === '') return;
    postWish({
      inputName: inputName !== '' ? inputName : 'Anonymous',
      inputWish,
    });

    // Reset form
    setInputName('');
    setInputWish('');
  };

  return (
    <form className="quote-wish__wish-form" id="wishForm" method="POST">
      <label htmlFor="name" className="input-label">
        <span>Nama</span>
        <input
          type="text"
          name="name"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
          placeholder="Anonymous"
        />
      </label>
      <label htmlFor="wish" className="input-label">
        <span>Ucapan</span>
        <textarea
          name="wish"
          onChange={(e) => setInputWish(e.target.value)}
          value={inputWish}
          placeholder="Ucapan"
        ></textarea>
      </label>
      <div>
        <button className="submit-button" id="submitBtn" onClick={handleSubmit}>
          Kirim
        </button>
      </div>
    </form>
  );
};

WishForm.propTypes = {
  postWish: PropTypes.func.isRequired,
};

export default WishForm;
