import React from 'react';
import './bestselling.style.scss'
import ProducCard from '../../../components/product-card/product-card';

const SHOP_DATA = [
        {
            id: 20,
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
            id: 25,
            name: 'Jhinga-Pasinda-Seafood-Curry',
            imageUrl: 'https://i.ibb.co/G0BYKgB/Jhinga-Pasinda-Seafood-Curry.png',
            price: 100.00,
    description:'A delightful fusion of soft, pillowy bread filled with succulent fish and aromatic spices. Perfect as a quick and tasty snack or light meal option.'
          },
          {
            id: 22,
            name: 'Devilled Chicken Puff',
            imageUrl: 'https://i.ibb.co/HHXy3dw/Devilled-Chicken-Puff.png',
            price: 150.00,
    description:'An irresistible blend of fish and Chinese-inspired spices wrapped in a crispy, golden-brown roll. Experience the harmonious flavors of the East in every crispy bite'
          },
          {
            id: 21,
            name: 'Chicken Ham & Egg Pie',
            imageUrl: 'https://i.ibb.co/qxM39s8/Chicken-Ham-Egg-Pie.png',
            price: 150.00,
    description:'A fiery and flavorful treat featuring spicy devilled chicken ensconced in a delicate puff pastry. For those who crave a zesty twist to their snacking experience.'
          },
          {
            id: 23,
            name: 'Chicken Pie',
            imageUrl: 'https://i.ibb.co/gr8XFWn/Chicken-Pie.png',
            price: 100.00,
            description: 'A savory delight with tender chunks of chicken and flavorful seasonings, encased in a buttery, flaky pastry crust. The ultimate comfort food that satisfies your taste buds with every bite.'
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
