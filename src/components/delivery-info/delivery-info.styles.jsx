import React, { useState } from "react";
import './delivery-info.scss'

const DeliveryInformation = () => {
  const [orderType, setOrderType] = useState("delivery");
  const [address, setAddress] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleOrderTypeChange = (event) => {
    setOrderType(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="delivery-info">
      <h2>Delivery Information</h2>
      <div className="order-type">
        <input
          type="radio"
          id="delivery"
          name="orderType"
          value="delivery"
          checked={orderType === "delivery"}
          onChange={handleOrderTypeChange}
        />
        <label htmlFor="delivery">Delivery</label>

        <input
          type="radio"
          id="pickup"
          name="orderType"
          value="pickup"
          checked={orderType === "pickup"}
          onChange={handleOrderTypeChange}
        />
        <label htmlFor="pickup">Pickup</label>

        <input
          type="radio"
          id="dining"
          name="orderType"
          value="dining"
          checked={orderType === "dining"}
          onChange={handleOrderTypeChange}
        />
        <label htmlFor="dining">Dining</label>
      </div>

      {orderType === "delivery" && (
        <div className="address">
          <label>Delivery Address:</label>
          <input type="text" value={address} onChange={handleAddressChange} />
          <label>Email</label>
          <input type='email'  name='email' required onChange={()=>{}}  />
          <label>Phone Number</label>
         <input 
        type='number'  
        name='phoneNumber' 
        required onChange={handleOrderTypeChange} 
        value='phoneNumber'
        placeholder="enter Phone numer"
          />
        </div>
      )}

      <div className="date">
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      <div className="time">
        <label>Select Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
};

export default DeliveryInformation;
