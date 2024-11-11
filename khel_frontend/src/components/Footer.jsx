import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <p className="newsletter-text">
            Subscribe to our newsletter for the latest updates on new features and product releases.
          </p>
          <div className="newsletter-input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="subscribe-button">
              Subscribe to Newsletter
            </button>
          </div>
          <p className="newsletter-subtext">
            Connect with us on social media for more updates and activities!
          </p>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          {/* Company Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              <li><a href="/about">About Us</a></li>
              {/* <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/blog">Blog</a></li> */}
              <li><a href="/join">Join Us</a></li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-list">
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
              <li><a href="/guidelines">Community Guidelines</a></li>
              <li><a href="/activities">Find Activities</a></li>
            </ul>
          </div>

          {/* Follow Us Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Follow Us</h3>
            <ul className="footer-list">
              <li>
                <a href="https://facebook.com" className="social-link">
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="social-link">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="social-link">
                  <Twitter size={16} /> X
                </a>
              </li>
              {/* <li>
                <a href="https://linkedin.com" className="social-link">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li> */}
              <li>
                <a href="https://youtube.com" className="social-link">
                  <Youtube size={16} /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">© 2024 SportsConnect. All rights reserved.</p>
          <div className="bottom-links">
            <a href="/privacy">/privacy</a>
            <a href="/terms">/terms</a>
            <button className="cookie-settings">Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;