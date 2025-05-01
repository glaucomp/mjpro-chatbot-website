import React from "react";
import AboriginalFlag from "../../assets/old-site/AustralianIndigenousFlag.svg";
import TSIFlag from "../../assets/old-site/TorresStraightFlag.svg";
import "./AboutUs.css";

import FacebookIcon from "../../assets/old-site/facebook.svg";
import InstagramIcon from "../../assets/old-site/instagram.svg";
import LinkedInIcon from "../../assets/old-site/linkedIn.svg";
import YouTubeIcon from "../../assets/old-site/youtube.svg";

export default function AboutUs() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo">
            M<span className="highlight">×</span>J PRODUCTIONS
          </h2>
          <div className="footer-flags">
            <img src={AboriginalFlag} alt="Aboriginal Flag" />
            <img src={TSIFlag} alt="Torres Strait Islander Flag" />
          </div>
          <p className="footer-acknowledgment">
            M&J Productions acknowledges the First Peoples of Australia, their
            Elders past, present and emerging. We pay our respects to the
            traditional storytellers, designers, artists and owners of the land
            on which we live and work.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-contact">
            <span>For new business enquiries</span>
            <button className="contact-btn">Get in touch</button>
          </div>

          <div className="footer-social">
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={YouTubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
