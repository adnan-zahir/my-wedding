import PropTypes from 'prop-types';
import Countdown from '../components/Countdown';
import Maps from '../components/Maps';
import Schedules from '../components/Schedules';

const Event = (props) => {
  const {
    event: {
      std_url: stdUrl,
      schedules,
      gmaps_iframe: gmapsIframe,
      gmaps_url: gmapsUrl,
      countdown_date: countdownDate,
    },
  } = props;

  return (
    <section className="event">
      {/* TITLE AND OPENING QUOTE */}
      <h4 className="italic">Event</h4>
      <p>The Happy Day!</p>
      <p>
        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami
        mengundang Bapak/Ibu/Saudara/i untuk menghadiri Resepsi Pernikahan
        putra-putri kami.
      </p>

      {/* SCHEDULE */}
      <Schedules schedules={schedules} stdUrl={stdUrl} />

      {/* POLICY / INFORMATION */}
      <div className="card card-shadow policy">
        <p>
          Dengan hormat, kami memberitahukan bahwa acara akad dan resepsi
          pernikahan kami dilaksanakan dengan menggunakan protokol kesehatan
          Covid-19.
        </p>
        <ol type="1">
          <li>Wajib menggunakan masker.</li>
          <li>Pengecekan suhu tubuh.</li>
          <li>Mencuci tangan dengan handwash / handsanitizer.</li>
          <li>Menjaga jarak minimal 1 meter.</li>
          <li>Menghindari kerumunan.</li>
        </ol>
      </div>

      {/* COUNTDOWN */}
      <Countdown countdownDate={countdownDate} />

      {/* INVITATION WORDS */}
      <h4>HAPPY WEDDING</h4>
      <p>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan do'a restu
        kepada kedua mempelai.
      </p>

      {/* MAPS EMBED */}
      <Maps gmapsIframe={gmapsIframe} gmapsUrl={gmapsUrl} />
    </section>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    std_url: PropTypes.string,
    schedules: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string,
        location: PropTypes.string,
      })
    ),
    gmaps_iframe: PropTypes.string,
    gmaps_url: PropTypes.string,
    countdown_date: PropTypes.string,
  }).isRequired,
};

export default Event;
