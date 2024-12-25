import React, { Fragment, useState, useContext } from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import './nav.styles.scss'
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../../components/cart-Icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { CartContext } from '../../contexts/cart.context';
import Logo from '../../assets/logo-no-background.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [profile ,setprofile] =useState(false);
    const {currentUser, setCurrentUser }=useContext( UserContext);
    const {isCartOpen}= useContext(CartContext);
    
      

    console.log("current user in nav",currentUser)


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
          <Link to="/"><img src={Logo} alt='Logo' className='logo'   /></Link>
        </div>
        <div className="nvs">
        <div className='Link-container'>
          <div className={`menu-items ${showMenu ? 'show' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about-us">About Us</Link>
            </div>
            <div className='cart-user-container'>
            <Link >
            <CartIcon  />
            </Link>
            {isCartOpen && <CartDropdown />}
            <Link onClick={toggleProfile}>
              <i className="fa fa-user"  ></i> <FiUser />
              {profile && (
                <div className="profile-dropdown">
                  
                  {currentUser ? (
                    <Fragment>
                    <Link to="/user-profile" className="dropdown-item">
                    Profile
                  </Link>
                    <span className="dropdown-item"  onClick={signOutHandler}>
                      Sign Out
                    </span>
                    </Fragment>
                  ) : (
                    <Link to="/sign-in" className="dropdown-item">
                      Sign In
                    </Link>
                  )}
                </div>
              )}
            </Link>
          </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
    );
};

export default Navbar;