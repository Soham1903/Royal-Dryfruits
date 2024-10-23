import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../CSS/Footer.css"; // Your Footer CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-about">
          <h2>RoyalDivine Products LLP</h2>
          <p>
            We are dedicated to delivering the finest quality spices and
            ensuring our customers receive top-notch products.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-socials">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Royal-Nuts-Dryfruits-372794883258616"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://x.com/royaldryfruit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="##">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 RoyalDivine Products LLP | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
