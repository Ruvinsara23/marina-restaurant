import React, { useState, useEffect } from 'react';
import './paymet-success.style.scss'

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
