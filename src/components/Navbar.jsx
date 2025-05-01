import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/icon-mjlogo.svg";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="MJPRO Logo" className="navbar-logo" />
      </Link>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
      </div>
    </nav>
  );
}
