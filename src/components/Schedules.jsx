import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Schedules = (props) => {
  const { schedules, stdUrl } = props;

  const convertToDate = (dateString) => {
    return new Date(dateString);
  };

  const dayStrings = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    "Jum'at",
    'Sabtu',
  ];

  return (
    <div className="schedules">
      {schedules.map((schedule) => (
        <div key={schedule.title} className="card card-shadow schedules-item">
          <h4 className="schedules-title">{schedule.title}</h4>
          <span>
            <FontAwesomeIcon icon={['fas', 'calendar']} />
            {dayStrings[convertToDate(schedule.date).getDay()]}
          </span>
          <span>
            <FontAwesomeIcon icon={['fas', 'clock']} />
            {schedule.time}
          </span>
          <span>
            <FontAwesomeIcon icon={['fas', 'map-marker']} />
            {schedule.location}
          </span>
        </div>
      ))}
      <div>
        <a
          href={stdUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn std-link"
        >
          Save The Date
        </a>
      </div>
    </div>
  );
};

Schedules.propTypes = {
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      location: PropTypes.string,
    })
  ).isRequired,
};

export default Schedules;
