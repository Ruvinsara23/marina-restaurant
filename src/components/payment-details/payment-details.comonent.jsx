
import React from 'react';
import './payment-details.styless.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import DeliveryInformation from '../delivery-info/delivery-info.styles';
import StripeElement from './stripe-element/stripe-element.component';
import { useState } from 'react';
import PaymentSuccessPopup from '../payment-sucess-pop/payment-sucess-popup';
import { firestore } from '../../utils/firebase.utils';
import { getDocs,collection,updateDoc,doc,addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase.utils';
import { UserContext } from '../../contexts/user.context';




 
const PaymentDetails = ({ emailAddress, cardNumber, cardHolderName, subtotal, deliveryCharges, total }) => {

  const {currentUser}=useContext( UserContext);
    const { cartTotal,cartItems} =useContext(CartContext)
    const [showPopup, setShowPopup] = useState(false);

    const userDataCollection=collection(db,"users")

    const handlePayment = async(userAuth) => {

const orderHistoryCollectionRef = collection(userDataCollection, currentUser.uid, 'orderHistory');

try {

  const querySnapshot = await getDocs(orderHistoryCollectionRef);
  let maxOrderId = 0;

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const parsedOrderId = parseInt(data.orderId, 10); 
    if (parsedOrderId > maxOrderId) {
      maxOrderId = parsedOrderId;
    }
  });

  const newOrderId = (maxOrderId + 1).toString(); 
 
  const orderDetails = {
    orderId: newOrderId, // Store as a string
    amount: cartTotal + 150, // Adding delivery charges to total
    items: cartItems,
    timestamp: Date.now(),
  };

  // Add the new order to Firestore
  await addDoc(orderHistoryCollectionRef, orderDetails);
  console.log('New document added successfully!');
  setShowPopup(true);
} catch (error) {
  console.error('Error adding new document:', error);
}

      setShowPopup(!showPopup);
     
    }


  return (
    <div className='payment-details'>

    <DeliveryInformation />
    <h2>Payment Details </h2>
    <span>complete your purchese item by providing your payment details order</span>
    <form onSubmit={()=>{}}>
    <label>Card holder</label>
    <input type='text' required onChange={()=>{}} name='displayName'   />

    <label>Email</label>
    <input type='email'  name='email' required onChange={()=>{}}  />

    <label  >Card details</label>
    <StripeElement className='card-element'  />
    </form> 
    <div className='tot-container'>
    <div className='labletot'>
    <label>DeliveryCharges</label>
    <label>Rs. 150</label>
    </div>
    <div className='labletot'>
    <label>Sub total</label>
    <label>Rs. {cartTotal}</label>   
</div>
<div className='labletot'>
<label>Total</label>
    <label>Rs. {cartTotal+150}</label>
    
    </div>
    </div>
    <button className='pay-button'  onClick={handlePayment}
    >Pay now
    {showPopup && <PaymentSuccessPopup />}
    </button>
    
  
    </div>
  );
};

export default PaymentDetails;
 



