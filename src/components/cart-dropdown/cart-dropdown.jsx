import React from 'react'
import './cart-dropdown.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react';
import animation from '../../assets/8- Online Shopping (2).json'
import { UserContext } from '../../contexts/user.context'


const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()

    const returnToShopHandler =()=>{
       navigate('/menu')
    }


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
         <div>
         <p className='empty-message-a'>Your cart is empty</p>
          <div className='empty-message'><Lottie
          animationData={animation} 
          loop={true} 
          autoplay={true} 
        />
        </div>
        {cartItems.length === 0 && (
          <div className='empty-cart-message'>
           
            <p>You may check out all the available products and buy some in the shop</p>
            <button onClick={returnToShopHandler}>Return to shop</button>
          </div>
        )}
  </div>
)}
    </div>
    {cartItems.length > 0 && (
      <button onClick={goToCheckouthandler}>Go To CheckOut</button>
    )}
    </div>
    
  )
}

export default CartDropdown
