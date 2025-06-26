import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-con">
        <div className="company-section">
          <div className="company-logo">
            <img
              src="./images/eps-logo.png"
              alt="EPS Logo"
              className="footer-logo"
            />
            <h3 className="company-tagline">Parts Of Great Quality</h3>
            <p className="company-description">
              Your trusted partner for heavy equipment parts and spares in
              Eswatini.
            </p>
          </div>

          <div className="company-contact">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-info">
                <h4>Address</h4>
                <p>Floron Business Center, Matsapha Industrial Site</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-info">
                <h4>Need Help?</h4>
                <p>(268) 7631 0838 / 7931 0838</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-info">
                <h4>Email</h4>
                <p>info@hydropce-eswatini.com</p>
              </div>
            </div>
          </div>

          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-link facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link twitter">
                <FaXTwitter />
              </a>
              <a href="#" className="social-link whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-section">
            <h4 className="link-title">Information</h4>
            <ul className="link-list">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/delivery">Delivery Information</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="link-section">
            <h4 className="link-title">Services</h4>
            <ul className="link-list">
              <li>
                <Link to="/returns">Returns</Link>
              </li>
              <li>
                <Link to="/order-history">Order History</Link>
              </li>
              <li>
                <Link to="/wishlist">Wish List</Link>
              </li>
              <li>
                <Link to="/newsletter">Newsletter</Link>
              </li>
              <li>
                <Link to="/specials">Specials</Link>
              </li>
            </ul>
          </div>

          <div className="link-section">
            <h4 className="link-title">Categories</h4>
            <ul className="link-list">
              <li>
                <Link to="/undercarry">Undercarriage Parts</Link>
              </li>
              <li>
                <Link to="/electrical">Electrical Parts</Link>
              </li>
              <li>
                <Link to="/ground">G.E.T</Link>
              </li>
              <li>
                <Link to="/filters">Service Kit Filters</Link>
              </li>
              <li>
                <Link to="/construction">Construction Equipment</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="newsletter-section">
          <h4 className="newsletter-title">Stay Updated</h4>
          <p className="newsletter-description">
            Subscribe to our newsletter for the latest updates on parts and
            special offers.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
          <p className="privacy-note">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-con">
          <p className="copyright">
            © 2024 Eswatini Plant and Spares. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
