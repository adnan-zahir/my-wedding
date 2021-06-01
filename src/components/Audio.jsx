import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Audio = (props) => {
  const { audioFile } = props;
  const [audioPaused, setAudioPaused] = useState(true);

  const handleAudio = () => {
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioPaused) {
      audioPlayer.play();
      setAudioPaused(false);
    } else {
      audioPlayer.pause();
      setAudioPaused(true);
    }
  };

  return (
    <div>
      <div className="audio-section">
        <audio className="audio-player" id="audioPlayer">
          <source src={audioFile} type="audio/mpeg" />
        </audio>
        <div className="custom-audio-controls">
          <button className="play-button" onClick={handleAudio}>
            {audioPaused ? (
              <FontAwesomeIcon
                icon={['fas', 'play-circle']}
                id="audioButtonIcon"
              />
            ) : (
              <FontAwesomeIcon
                icon={['fas', 'pause-circle']}
                id="audioButtonIcon"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audio;
