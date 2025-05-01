import React from "react";
import AboutUs from "./AboutUs";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-simple">
      <AboutUs />
      <button className="scroll-top-btn" onClick={scrollToTop}>
        ⬆︎
      </button>
      <span>Back to Top</span>
    </footer>
  );
}
