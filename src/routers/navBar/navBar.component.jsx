import React, { Fragment, useState, useContext } from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import './nav.styles.scss'
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase.utils';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [profile ,setprofile] =useState(false);
    const {currentUser, setCurrentUser }=useContext( UserContext);
      

    console.log(currentUser )


    const signOutHandler= async()=>{await  signOutUser()
      setCurrentUser(null)
    }
   
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    const toggleProfile=()=>{
      setprofile(!profile)
    }
   
   

    return (
      <Fragment>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="nvs">
          <div className={`menu-items ${showMenu ? 'show' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i> <FiShoppingCart />
            </Link>
            <div onClick={toggleProfile}>
              <i className="fa fa-user"></i> <FiUser />
              {profile && (
                <div className="profile-dropdown">
                  <Link to="/user-profile" className="dropdown-item">
                    Your profile
                  </Link>
                  {currentUser ? (
                    <span className="dropdown-item"  onClick={signOutHandler}>
                      Sign Out
                    </span>
                  ) : (
                    <Link to="/sign-in" className="dropdown-item">
                      Sign In
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
          <Link to="/order" className="order-button">
            Order Now
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-bars">hello</i>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
    );
};

export default Navbar;