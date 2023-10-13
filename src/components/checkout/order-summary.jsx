import React, { useContext } from 'react'
import './order-summary.style.scss';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../checkout-item/checkout-item.component';



const OrderSummary = () => {
    const { cartItems } =useContext(CartContext)

    console.log("This is cart item",cartItems);

  return (
    <div className='Order-summary-container'>
    <h2>Order Summary </h2>
    <span>Check your item and select your shipping for better experience order items</span>
   <div className='item-container'>
    {cartItems.map((cartItem)=> <CheckoutItem key={cartItem.id}  cartItem={cartItem} />)
    }
   
   </div>
   </div>

   
  )
}

export default OrderSummary
