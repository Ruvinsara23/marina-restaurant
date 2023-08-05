import React from 'react'
import OrderHistoryItem from '../order-history-Item/order-history-item';
import './order-history-card.scss'

const OrderHistoryCard = ({order}) => {
   
  return (
    <div className="card">
    <div className="order-info">
    <div className='order-info-container'>
    <p className="order-id">Order ID:{order.orderId} </p>
    <p className='order-date'>Date:{new Date(order.timestamp).toLocaleString()}</p>
    </div>
    <p>logo</p> 
    </div>
    <div className="items-list">
      <h3>Items:</h3>
      <div className='orderHistory-container'>
      {order.items.map((item, index) => (
        <OrderHistoryItem key={index} item={item} />
      ))}
   </div>
      
    </div>
  </div>
  )
}

export default OrderHistoryCard
