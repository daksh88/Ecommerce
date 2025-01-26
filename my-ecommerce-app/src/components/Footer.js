import React from 'react';
import '../styles/Footer.css';  // Verify this import exists

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact</h3>
        <div className="contact-details">
          <p>
            <i className="far fa-envelope"></i>
            <a href="mailto:dakshnautiyal88@gmail.com">dakshnautiyal88@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i>
            <a href="tel:+918445603923">+91 8445603923</a>
          </p>
        </div>
        <div className="social-links">
          <a href="https://github.com/daksh88" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/dakshnautiyal1/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/dakshnautiyal/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;