import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '../../assets/logo-no-background.png'
import './footer.style.scss'

const Footer = () => {
  const address = "B15,Mapakanda,Badulla,Sri Lanka ";
  const email = "marina23@gmail.com";

  return (
    <footer>
      <div className="social-links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="personal-bio">
        <p>Address: {address}</p>
        <p>Email: {email}</p>
      </div>
      
      <div className="footer-column">
     <img src={Logo} alt="hoobank" className="logo" />
     <h3>Best food made with Love</h3>
    </div>
     
    </footer>
  );
};

export default Footer;
























