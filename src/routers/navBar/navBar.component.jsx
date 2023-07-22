import React, { useState } from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import './nav.styles.scss'
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [profile ,setprofile] =useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    const toggleProfile=()=>{
      setprofile(!profile)
    }
  
    return (
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="/"> Logo</a>
          </div>
          <div className='nvs'> 
          <div className={`menu-items ${showMenu ? 'show' : ''}`}>
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/menu">Menu</a>
            <a href="/cart">
              <i className="fa fa-shopping-cart"></i> <FiShoppingCart />
            </a>
            <a href="#" onClick={toggleProfile}>
              <i className="fa fa-user" ></i> <FiUser  />
              {profile && (
                <div className="profile-dropdown">
                  <a href="/user-profile" className='dropdown-item'>Your profile</a>
                  <a href="/sign-in" className='dropdown-item'>SignIn</a>
                </div>
              )}
            </a>
          </div>
          <a href="/order" className="order-button">Order Now</a>
          <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-bars">hello</i>
            </div>
          </div>
        </nav>
        <Outlet />
      </header>
    );
};

export default Navbar;