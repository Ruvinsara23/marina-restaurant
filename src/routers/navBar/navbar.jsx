import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faCartPlus, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './navbar.styles.scss';

const Navbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar bg-gray-800">
      
    </nav>
  );
};

export default Navbar;
