import { CardElement } from '@stripe/react-stripe-js';
import './stripe-element.styles.scss'
import { useStripe } from '@stripe/react-stripe-js';
import { useElements } from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import { UserContext } from '../../../contexts/user.context';
import React from 'react'





const StripeElement = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {cartTotal} = useContext(CartContext);
    const {currentUser} = useContext( UserContext);
   
    const paymentHandler = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount:100 }),
      }).then((res) => {
        return res.json();
      });
  
      const clientSecret = response.paymentIntent.client_secret;
  
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'pansilu',
          },
        },
      });
  
  
      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          alert('Payment Successful!');
        }
      }
    };
  

  return (
    
    <div>
    <CardElement />

 
    </div>
  )
}

export default StripeElement
