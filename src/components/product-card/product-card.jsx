import React from 'react'
import './product-card.styles.scss'

const ProducCard = ({ item }) => {
    const { id,name, imageUrl, price, description } = item;
  return (
    <div className="product-card" key={id}>
    <img src={imageUrl} className='img' alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <div className="price-container">
      <div className="price">LKR{price.toFixed(2)}</div>
      <button className="add-to-cart" onClick={()=>{}}>
        Add to cart
      </button>
    </div>
  </div>
  )
}

export default ProducCard;
