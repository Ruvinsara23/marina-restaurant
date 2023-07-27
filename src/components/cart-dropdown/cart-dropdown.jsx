import React from 'react'
import './cart-dropdown.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items'>
    {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem   key={cartItem.id} cartItem={cartItem}   />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
    </div>
      <button>GO TO CHECKOUT</button>
    </div>
  )
}

export default CartDropdown
