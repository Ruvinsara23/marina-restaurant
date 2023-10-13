import React from 'react';
import './bestselling.style.scss'
import ProducCard from '../../../components/product-card/product-card';

const SHOP_DATA = [
        {
          id: 2,
          name: 'Beef-Sri-Lankan-Devilled',
          imageUrl: 'https://i.ibb.co/xHwpMM6/Beef-Sri-Lankan-Devilled.png',
          price: 2200.00,
          description: 'Spicy and tangy dish made with tender beef cooked in a flavorful sauce, typically featuring a combination of chili, garlic, ginger, onions, and various spices, creating a deliciously fiery and aromatic flavor profile.'
          },
        
        {
          id: 12,
          name: 'Sabzi-Biryani-Vegetable',
          imageUrl: 'https://i.ibb.co/ZM0DQsW/Sabzi-Biryani-Vegetable.png',
          price: 1810.00,
          description: 'Fragrant basmati rice, mixed vegetables, and a blend of aromatic spices, resulting in a delicious and aromatic vegetarian biryani.'
        },
        {
          id: 29,
          name: 'Chocolate-Mousse',
          imageUrl: 'https://i.ibb.co/Z1yk9s7/Chocolate-Mousse.png',
          price: 350.00,
          description: 'Smooth chocolate cream, topped with whipped cream or chocolate shavings, providing a rich and indulgent treat.'
          },
          {
            id: 32,
          name: 'Mango-Pudding',
          imageUrl: 'https://i.ibb.co/GT3g2KN/Mango-Pudding.png',
          price: 350.00,
  description:'Ripe mango puree, milk or cream, sugar, and gelatin, resulting in a smooth and fruity treat perfect for mango lovers.'
          },
          {
            id: 15,
          name: 'Gourmet-Beef-Burger',
          imageUrl: 'https://i.ibb.co/VMP39g2/Gourmet-Beef-Burger.png',
          price: 1940.00,
          description: 'High-quality ground beef, artisanal buns, and a selection of gourmet toppings and condiments, resulting in a decadent and elevated burger experience.'
          },
          {
            id: 25,
            name: 'Mogul-Shashlik-Pizza',
            imageUrl: 'https://i.ibb.co/6mzmMMw/Mogul-Shashlik-Pizza.png',
            price: 2090.00,
            description: 'Paneer, bell pepper, onion, and coriander leaves atop a Mogul Shashlik-inspired pizza offer a delightful blend of flavors and Mogul influences.'
          }
        ]



const Bestselling = () => {
  return(<div className='product-container'>
    {SHOP_DATA.map((item) => (
      <ProducCard key={item.id} item={item} />
    ))}
  </div>)
  
}

export default Bestselling
