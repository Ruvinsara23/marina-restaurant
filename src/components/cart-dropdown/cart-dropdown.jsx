import React from 'react'
import './cart-dropdown.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react';
import animation from '../../assets/8- Online Shopping (2).json'



const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()


    const goToCheckouthandler =()=>{
        navigate('/check-out')
    }
  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items'>
    {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem   key={cartItem.id} cartItem={cartItem}   />
          ))
        ) : (
          <div className='empty-message'><Lottie
          animationData={animation} 
          loop={true} 
          autoplay={true} 
        />
  </div>
        )}
    </div>
      <button onClick={goToCheckouthandler}>GO TO CHECKOUT</button>
    </div>
  )
}

export default CartDropdown
