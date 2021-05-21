import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Countdown = (props) => {
  const { countdownDate } = props;

  // States
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const convertToDate = (dateString) => new Date(dateString);

  // Effects
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // The date to countdown to
      const date = convertToDate(countdownDate).getTime();
      // Get today's date and time
      const today = new Date().getTime();

      // Find the distence between the date and the countdown date
      const distance = date - today;

      // Time calculations for days, hours, minutes, and seconds
      const calcDays = 1000 * 60 * 60 * 24;
      const calcHours = 1000 * 60 * 60;
      const calcMinutes = 1000 * 60;
      const calcSeconds = 1000;

      const days = Math.floor(distance / calcDays);
      const hours = Math.floor((distance % calcDays) / calcHours);
      const minutes = Math.floor((distance % calcHours) / calcMinutes);
      const seconds = Math.floor((distance % calcMinutes) / calcSeconds);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      // Prevent minus countdown
      if (distance < 0) {
        return setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdownDate]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{countdown.days}</span>
        <span>Days</span>
      </div>
      <div className="countdown-item">
        <span>{countdown.hours}</span>
        <span>Hours</span>
      </div>
      <div className="countdown-item">
        <span>{countdown.minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="countdown-item">
        <span>{countdown.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

Countdown.propTypes = {
  countdownDate: PropTypes.string.isRequired,
};

export default Countdown;
