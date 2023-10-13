import React from 'react'
import './checkout.styles.scss'
import OrderSummary from '../../components/checkout/order-summary';
import PaymentDetails from '../../components/payment-details/payment-details.comonent';
// import DeliveryInformation from '../../components/delivery-info/delivery-info.styles';

const CheckOut = () => {
  return (
    <div className='checkout-container'>
    <OrderSummary />
    <PaymentDetails />
    
   
    
    </div>
  )
}

export default CheckOut;
