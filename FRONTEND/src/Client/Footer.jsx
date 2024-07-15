import React from 'react';
import './LandingPage.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 PISTON DOC. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="https://maps.google.com" target="_blank">Map</a></li>
          <li><a  href="mailto:lokeshmurugesan18@gmail.com">Mail</a></li>
          <li><a href="tel:+91 9999999999">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
