
import PropTypes from 'prop-types';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h1>Start Bootstrap</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Cart <span>({cartCount})</span></li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
    cartCount: PropTypes.number.isRequired,
  };

export default Navbar;