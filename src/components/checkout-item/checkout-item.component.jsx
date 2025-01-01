import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import './checout-item.style.scss'
import delete1 from '../../assets/delete1.png'
import { Trash2 } from 'lucide-react';



const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
  
    const { clearItemFromCart, addItemToCart, removeItemToCart } =
      useContext(CartContext);
  
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
  
    return (

      <div className="checkout-item">
      <div className="item-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">Rs {price}</span>
        <span className="item-quantity">Quantity:
        <span onClick={removeItemHandler}>-</span>
        {quantity}
        <span onClick={addItemHandler}>+</span>
        </span>
      </div>
        <button className="deletebtn" onClick={clearItemHandler}>
          <Trash2 />
        </button>
    </div>
     
    );
  };
  
  export default CheckoutItem;