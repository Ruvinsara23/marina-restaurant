import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '../../assets/logo-no-background.png'
import './footer.style.scss'
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
         
          <div className="footer-logo">
            <h2>Milano Restaurant</h2>
            <p>Delicious food delivered to your doorstep. Order now and satisfy your cravings!</p>
          </div>

      
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>


          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>B15,Mapakanda,Badulla,Sri Lanka</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: milanores@gmail.com</p>
          </div>


          <div className="footer-newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

   
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#"><Facebook size={24} /></a>
            <a href="#"><Instagram size={24} /></a>
            <a href="#"><Twitter size={24} /></a>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Milano restaurant. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;























