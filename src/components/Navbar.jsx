import { useEffect, useState } from "react";
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
      <h1>MJPRO</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`menu ${open ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
      </div>
    </nav>
  );
}
