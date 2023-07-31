// PaymentDetails.js
import React from 'react';
import './payment-details.styless.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const PaymentDetails = ({ emailAddress, cardNumber, cardHolderName, subtotal, deliveryCharges, total }) => {

    const { cartTotal} =useContext(CartContext)

  return (
    <div className='sign-up-container'>
    <h2>Payment Details </h2>
    <span>complete your purchese item by providing your payment details order</span>
    <form onSubmit={()=>{}}>
    <label>Card holder</label>
    <input type='text' required onChange={()=>{}} name='displayName' value='displayName'  />

    <label>Email</label>
    <input type='email'  name='email' required onChange={()=>{}}  />

    <label>Card details</label>
    <input type='password' value='password' required onChange={()=>{}} name='password' />
    </form>
    <div className='tot-container'>
    <div className='labletot'>
    <label>DeliveryCharges</label>
    <label>150</label>
    </div>
    <div className='labletot'>
    <label>Sub total</label>
    <label>{cartTotal}</label>
    
    
</div>
<div className='labletot'>
<lable>Total</lable>
    <label>{cartTotal+150}</label>
    
    </div>
    </div>
    <button className='pay-button'>Pay now</button>
    </div>
  );
};

export default PaymentDetails;



