import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavLink activeClassName="active" exact to="/" className="navbar-item">
          <FontAwesomeIcon icon={['fas', 'home']} />
          <span>Home</span>
        </NavLink>
        <NavLink activeClassName="active" to="couple" className="navbar-item">
          <FontAwesomeIcon icon={['fas', 'ring']} />
          <span>Couple</span>
        </NavLink>
        <NavLink activeClassName="active" to="event" className="navbar-item">
          <FontAwesomeIcon icon={['fas', 'calendar']} />
          <span>Event</span>
        </NavLink>
        <NavLink activeClassName="active" to="moment" className="navbar-item">
          <FontAwesomeIcon icon={['fas', 'camera']} />
          <span>Moment</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="quote-wish"
          className="navbar-item"
        >
          <FontAwesomeIcon icon={['fas', 'quote-right']} />
          <span>Wish</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
