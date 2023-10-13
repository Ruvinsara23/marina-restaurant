import React, { useContext } from 'react'
import './product-card.styles.scss'
import { CartContext } from '../../contexts/cart.context';

const ProducCard = ({ item }) => {
  const { id, name, imageUrl, price, description } = item;
    const { addItemToCart} = useContext(CartContext);
   
  return (
    <div className="product-card" key={id}>
    <img src={imageUrl} className='img' alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <div className="price-container">
      <div className="price">LKR{price}.00</div>
      <button  className="add-to-cart" onClick={()=>addItemToCart(item)}>
        Add to cart
      </button>
      
    </div>
  </div>
  )
}

export default ProducCard;
