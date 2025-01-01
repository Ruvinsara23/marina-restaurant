import React from 'react'
import OrderHistoryItem from '../order-history-Item/order-history-item';
import './order-history-card.scss'
import Logo from '../../assets/logo-no-background.png'

const OrderHistoryCard = ({order}) => {

  const { orderId, timestamp, amount, items } = order;
   
  return (
    <div className="card">
    <div className="order-info">
    <div className='order-info-container'>
    <p className="order-id">Order ID:{orderId} </p>
    <p className='order-date'>Date:{new Date(timestamp).toLocaleString()}</p>
    </div>
    <img src={Logo} alt='logo' className='logohistory' />
    </div>
    <div className="items-list">
      <h3>Items:</h3>
      <div className='orderHistory-container'>
      {items.map((item, index) => (
        <OrderHistoryItem key={index} item={item} />
      ))}
   </div>
 
   <div className='order-price'>
   <label>Total:</label>
   <label>{amount}</label>
   </div>
   <div className='order-price'>
   <label>status:</label>
   <label>Complete</label>
   </div>
    </div>
  
  </div>
  )
}

export default OrderHistoryCard
