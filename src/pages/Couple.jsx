import PropTypes from 'prop-types';

const Couple = (props) => {
  const { DATA } = props;
  const { bride, groom } = DATA;

  return (
    <section className="couple">
      <div className="opening-quote">
        <h4 className="italic">Bismillahirrahmanirrahim</h4>
        <p>
          Assalamu`alaikum Warahmatullahi Wabarakatuh
          <br />
          <br />
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan putra-putri
          kami
        </p>
      </div>
      <div className="profile">
        <div className="profile-item">
          <img
            src={bride.picture_url}
            alt="Bride"
            className="profile-picture"
          />
          <span className="profile-name">{bride.name}</span>
          <span>Putri dari</span>
          <span>
            Bapak {bride.father_name} dan Ibu {bride.mother_name}
          </span>
        </div>
        <span>Dan</span>
        <div className="profile-item">
          <img
            src={groom.picture_url}
            alt="Groom"
            className="profile-picture"
          />
          <span className="profile-name">{groom.name}</span>
          <span>Putra dari</span>
          <span>
            Bapak {groom.father_name} dan Ibu {groom.mother_name}
          </span>
        </div>
      </div>
    </section>
  );
};

Couple.propTypes = {
  DATA: PropTypes.shape({
    bride: PropTypes.object,
    groom: PropTypes.object,
  }).isRequired,
};

export default Couple;
