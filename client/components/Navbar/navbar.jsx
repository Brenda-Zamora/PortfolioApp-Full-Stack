import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo2.1.png";
import contactImg from "../../src/assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo " className="logo" />

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/services" className="navbar-link">
          Services
        </Link>
        <Link to="/projects" className="navbar-link">
          Projects
        </Link>
      </div>

      <Link to="/contact" className="navbar-contact-link">
        <button className="navbar-contact-button">
          <img
            src={contactImg}
            className="navbar-contact-img"
            width="30"
            height="30"
          />
          Contact Me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
