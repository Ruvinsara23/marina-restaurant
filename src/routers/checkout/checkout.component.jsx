import React, { useEffect, useContext } from 'react';
import './checkout.styles.scss';
import OrderSummary from '../../components/checkout/order-summary';
import PaymentDetails from '../../components/payment-details/payment-details.comonent';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';

const CheckOut = () => {
  const navigate = useNavigate(); 
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (!currentUser) {
      navigate('/sign-in');
    }
  }, [currentUser,  navigate]);

  return (
    <div className='checkout-container'>
    <div className="payment-details-scrollable">
        <PaymentDetails />
      </div>
      <OrderSummary />
      
    </div>
  );
};

export default CheckOut;