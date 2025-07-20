import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo2.1.png";
import contactImg from "../../src/assets/contact.png";
import signInImg from "../../src/assets/signInImg.png";
import LogoutButton from "../logoutButton";

const Navbar = () => {
  const token = localStorage.getItem("token");
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

      <div className="navbar-buttons-links">
        <Link to="/contact" className="navbar-button">
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

        {!token && (
          <Link to="/signin" className="navbar-button">
            <button className="navbar-signIn-button">
              <img
                src={signInImg}
                className="navbar-signIn-img"
                width="30"
                height="30"
              />
              Sign In
            </button>
          </Link>
        )}

        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
