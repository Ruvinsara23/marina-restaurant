import React from 'react';
import './bestselling.style.scss'

const SHOP_DATA = [
    {
      title: 'Indian food',
      items: [
        {
            id: 1,
            name: 'Murgh-65',
            imageUrl: 'https://i.ibb.co/yPMgg0j/Murgh-65.png',
            price: 450.00,
            description:'A scrumptious combination of tender chicken ham, wholesome eggs, and a delectable pastry crust. A balanced and fulfilling option for any time of the day.'
          },
        
        {
          id: 2,
          name: 'Adraki-Aloo-Gobi',
          imageUrl: 'https://i.ibb.co/myjmD9g/Adraki-Aloo-Gobi.png',
          price: 100.00,
          description: 'A delightful fusion of soft, pillowy bread filled with succulent fish and aromatic spices. Perfect as a quick and tasty snack or light meal option'
        },
        {
            id: 3,
            name: 'Jhinga-Pasinda-Seafood-Curry',
            imageUrl: 'https://i.ibb.co/G0BYKgB/Jhinga-Pasinda-Seafood-Curry.png',
            price: 100.00,
    description:'A delightful fusion of soft, pillowy bread filled with succulent fish and aromatic spices. Perfect as a quick and tasty snack or light meal option.'
          },
          {
            id: 4,
            name: 'Devilled Chicken Puff',
            imageUrl: 'https://i.ibb.co/HHXy3dw/Devilled-Chicken-Puff.png',
            price: 150.00,
    description:'An irresistible blend of fish and Chinese-inspired spices wrapped in a crispy, golden-brown roll. Experience the harmonious flavors of the East in every crispy bite'
          },
          {
            id: 5,
            name: 'Chicken Ham & Egg Pie',
            imageUrl: 'https://i.ibb.co/qxM39s8/Chicken-Ham-Egg-Pie.png',
            price: 150.00,
    description:'A fiery and flavorful treat featuring spicy devilled chicken ensconced in a delicate puff pastry. For those who crave a zesty twist to their snacking experience.'
          },
          {
            id: 6,
            name: 'Chicken Pie',
            imageUrl: 'https://i.ibb.co/gr8XFWn/Chicken-Pie.png',
            price: 100.00,
            description: 'A savory delight with tender chunks of chicken and flavorful seasonings, encased in a buttery, flaky pastry crust. The ultimate comfort food that satisfies your taste buds with every bite.'
          },
     
      ],
    },
    
    
  ];
  



const Bestselling = () => {
    const generateProductCard = (product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imageUrl} className='img' alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="price-container">
            <div className="price">LKR{product.price.toFixed(2)}</div>
            <button className="add-to-cart" onClick={() => addToCart(product.id)}>
              <i className="fa fa-cart-plus"></i> Add to cart
            </button>
          </div>
        </div>
      );
    
      const addToCart = (productId) => {
        // Implement the addToCart functionality here (not provided in the original code)
        // For a simple example, you could just log the product ID:
        console.log('Added to cart:', productId);
      };
    
      return (
        <div id="productContainer" className='product-container'>
          {SHOP_DATA[0].items.map(generateProductCard)}
        </div>
      );
    
}

export default Bestselling
