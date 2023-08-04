
import React from 'react';
import './payment-details.styless.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import DeliveryInformation from '../delivery-info/delivery-info.styles';
import StripeElement from './stripe-element/stripe-element.component';
import { useState } from 'react';
import PaymentSuccessPopup from '../payment-sucess-pop/payment-sucess-popup';
import { firestore } from '../../utils/firebase.utils';
import { getDocs,collection,updateDoc,doc } from 'firebase/firestore';
import { db } from '../../utils/firebase.utils';
import { UserContext } from '../../contexts/user.context';




const PaymentDetails = ({ emailAddress, cardNumber, cardHolderName, subtotal, deliveryCharges, total }) => {

  const {currentUser}=useContext( UserContext);
    const { cartTotal,cartItems} =useContext(CartContext)
    const [showPopup, setShowPopup] = useState(false);

    const userDataCollection=collection(db,"users")

    const handlePayment = async(userAuth) => {

      try {
        // Update the data in Firestore
        const userDocRef = doc(userDataCollection, currentUser.uid);
        console.log("user doc ref b",userDocRef);
        await updateDoc(userDocRef, 'orderHistory', {
          orderId: '18', // Replace with the actual 
          amount: cartTotal, // Replace with the actual payment amount
          items: [{cartItems}],
          timestamp: Date.now(), // Use the current timestamp as a unique identifier
        });
  
        console.log("Data updated successfully!");
      } catch (error) {
        console.error("Error updating data:", error);
      }
      // Add the orderDetails object to the 'orders' collection in Firestore
    //  await firestore.collection('users','orderHistory' ).add({orderDetails});
  
      // Get the auto-generated ID of the newly added order document
      // const orderId = docRef.id;
  
      // // Now, add a new 'items' sub-collection within the order document
      // const items = [{cartItems}]
  
      // await firestore.collection('orders').doc(orderId).collection('items').add({ items });
  
     
    }


  return (
    <div className='payment-details'>

    <DeliveryInformation />
    <h2>Payment Details </h2>
    <span>complete your purchese item by providing your payment details order</span>
    <form onSubmit={()=>{}}>
    <label>Card holder</label>
    <input type='text' required onChange={()=>{}} name='displayName' value='displayName'  />

    <label>Email</label>
    <input type='email'  name='email' required onChange={()=>{}}  />

    <label  >Card details</label>
    <StripeElement className='card-element'  />
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
    <button className='pay-button'  onClick={handlePayment}
    >Pay now</button>
   {showPopup && <PaymentSuccessPopup />}
    </div>
  );
};

export default PaymentDetails;



