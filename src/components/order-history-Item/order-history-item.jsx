import React from 'react'

const OrderHistoryItem = ({item}) => {
    const { name, imageUrl, price, quantity } = item;
  

  return (
    <div className="checkout-item">
      <div className="item-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">${price}</span>
        <span className="item-quantity">Quantity:
        {quantity}
        </span>
      </div>
    </div>
     
  )
}

export default OrderHistoryItem
