import React, { useState, useEffect } from 'react';
import './paymet-success.style.scss'
import sucsess from '../../assets/qCp0FQF4jY.json'
import Lottie from 'lottie-react';

const PaymentSuccessPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`payment-success-popup ${showPopup ? 'show' : ''}`}>
      <div className="popup-content">
      <div className='empty-message'><Lottie
      animationData={sucsess} 
      loop={true} 
      autoplay={true} 
    />
</div>
        <h3 className="popup-title">Payment successful</h3>
        <p className="popup-text">
          Your payment has been successfully submitted. We’ve sent
          you an email with all of the details of your order.
        </p>
       
      </div>
     
    </div>
  );
};

export default PaymentSuccessPopup;
