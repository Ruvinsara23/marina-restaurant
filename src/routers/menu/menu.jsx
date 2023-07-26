import React from 'react'
import ProducCard from '../../components/product-card/product-card';
import { useContext,Fragment } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { Tab } from '@headlessui/react';
import './menu.scss'




export const SHOP_DATA = [
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
        description: 'A delightful fusion of soft, pillowy bread filled with succulent fish and aromatic spices. Perfect as a quick and tasty snack or light meal option.'
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
  {
    title: 'Sri Lanka',
    items: [
      {
          id: 1,
          name: 'Beef-Kottu-Roti',
          imageUrl: 'https://i.ibb.co/F4StNJD/Beef-Kottu-Roti.png',
          price: 1550.00,
          description:'Flavorful Sri Lankan food dish consisting of finely chopped beef, roti, vegetables, and spices, all stir-fried together on a griddle.'
        },
      
      {
        id: 2,
        name: 'Beef-Sri-Lankan-Devilled',
        imageUrl: 'https://i.ibb.co/xHwpMM6/Beef-Sri-Lankan-Devilled.png',
        price: 2200.00,
        description: 'Spicy and tangy dish made with tender beef cooked in a flavorful sauce, typically featuring a combination of chili, garlic, ginger, onions, and various spices, creating a deliciously fiery and aromatic flavor profile.'
      },
      {
          id: 3,
          name: 'Chicken-Sri-Lankan-Devilled',
          imageUrl: 'https://i.ibb.co/RCDvXgR/Chicken-Sri-Lankan-Devilled.png',
          price: 2200.00,
  description:'Succulent chicken is cooked in a spicy and tangy sauce, infused with flavors of chili, garlic, ginger, onions, and a blend of aromatic spices, resulting in a delectable and fiery culinary experience.'
        },
        {
          id: 4,
          name: 'Fish-Sri-Lankan-Devilled',
          imageUrl: 'https://i.ibb.co/PQQyYsH/Fish-Sri-Lankan-Devilled.png',
          price: 2070.00,
  description:'Delightful dish featuring tender fish cooked in a spicy and tangy sauce that incorporates flavors of chili, garlic, ginger, onions, and a medley of aromatic spices, resulting in a tantalizing and zesty seafood experience.'
        },
        {
          id: 5,
          name: 'Chicken-Kottu',
          imageUrl: 'https://i.ibb.co/tKmC64s/hicken-Kottu.png',
          price: 1280.00,
  description:'Dish made with finely chopped roti, tender chicken, vegetables, and a flavorful blend of spices, all stir-fried together to create a delicious and satisfying meal.'
        },
        {
          id: 6,
          name: 'Lamparais',
          imageUrl: 'https://i.ibb.co/m895b18/Lamparais.png',
          price: 1680.00,
  description: 'Traditional Sri Lankan dish consisting of aromatic rice, meat, and various accompaniments, all wrapped in a banana leaf and steamed or baked to create a flavorful and fragrant meal.'
        },
        {
          id: 7,
          name: 'Prawns-Kottu-Roti',
          imageUrl: 'https://i.ibb.co/D1zqf1Q/Prawns-Kottu-Roti.png',
          price: 1680.00,
  description: 'Succulent prawns are combined with finely chopped roti, vegetables, and a blend of spices, resulting in a flavorful and satisfying culinary delight.'
        },
        {
          id: 8,
          name: 'Prawns-Sri-Lankan-Devilled',
          imageUrl: 'https://i.ibb.co/T49Gry7/Prawns-Sri-Lankan-Devilled.png',
          price: 2590.00,
  description: 'Spicy and tangy dish featuring plump prawns cooked in a fiery sauce infused with chili, garlic, ginger, onions, and a combination of aromatic spices, creating a tantalizing and flavorful seafood experience.'
        },
        {
          id: 9,
          name: 'Vegetable-Kottu',
          imageUrl: 'https://i.ibb.co/C0zsz8j/Vegetable-Kottu.png',
          price: 1090.00,
  description: 'Finely chopped vegetables, such as carrots, cabbage, onions, and leeks, are stir-fried with roti and a blend of aromatic spices, resulting in a flavorful and wholesome vegetarian meal option.'
        },
    ],
  },
  {
    title: 'Burgers',
    items: [
      {
          id: 1,
          name: 'BBQ-Bacon-Burger',
          imageUrl: 'https://i.ibb.co/thwVVz5/BBQ-Bacon-Burger.png',
          price: 2100.00,
          description:'Delicious burger featuring a juicy beef patty topped with crispy bacon, tangy barbecue sauce, melted cheese, and traditional burger fixings, creating a mouthwatering combination of savory flavors.'
        },
      
      {
        id: 2,
        name: 'Big-Mac',
        imageUrl: 'https://i.ibb.co/zrt5RxC/Big-Mac.png',
        price: 1820.00,
        description: 'Two beef patties, special sauce, lettuce, cheese, pickles, onions, all sandwiched between three sesame seed buns, creating a satisfying and iconic fast food experience.'
      },
      {
          id: 3,
          name: 'Chicken-Big-Mac',
          imageUrl: 'https://i.ibb.co/fDK6tck/Chicken-Big-Mac.png',
          price: 1700.00,
  description:'Breaded and seasoned chicken patties, special sauce, lettuce, cheese, pickles, onions, and sesame seed buns, offering a flavorful twist on the original sandwich for chicken lovers.'
        },
        {
          id: 4,
          name: 'Classic-Cheese-Burger',
          imageUrl: 'https://i.ibb.co/0qWTGz4/Classic-Cheese-Burger.png',
          price: 1200.00,
  description:'Juicy beef patty cooked to perfection, topped with a slice of melted cheese, and served on a soft bun with traditional accompaniments like lettuce, tomato, onion, and condiments, creating a simple yet delicious burger experience.'
        },
        {
          id: 5,
          name: 'Pulled-Pork-Burger',
          imageUrl: 'https://i.ibb.co/M9GsbdZ/Pulled-Pork-Burger.png',
          price: 2380.00,
  description:'Slow-cooked pulled pork on a bun with barbecue sauce and toppings, offering a delicious and savory culinary experience.'
        },
        {
          id: 6,
          name: 'Gourmet-Beef-Burger',
          imageUrl: 'https://i.ibb.co/VMP39g2/Gourmet-Beef-Burger.png',
          price: 1940.00,
          description: 'High-quality ground beef, artisanal buns, and a selection of gourmet toppings and condiments, resulting in a decadent and elevated burger experience.'
        },
        {
          id: 7,
          name: 'Gourmet-Chicken-Burger',
          imageUrl: 'https://i.ibb.co/L0FNvgv/Gourmet-Chicken-Burger.png',
          price: 1940.00,
          description: 'Premium cuts of chicken, artisanal buns, and a range of gourmet toppings and condiments, delivering a delicious and sophisticated chicken burger experience.'
        },
        {
          id: 8,
          name: 'Gourmet-Lamb-Burger',
          imageUrl: 'https://i.ibb.co/kG2qBHx/Gourmet-Lamb-Burger.png',
          price: 2330.00,
          description: 'Ground lamb, artisanal buns, and a selection of gourmet ingredients such as unique sauces, specialty cheeses, and flavorful toppings, offering an elevated and succulent lamb burger experience.'
        },
        {
          id: 9,
          name: 'Veggie-Burger',
          imageUrl: 'https://i.ibb.co/HGpNVh1/Veggie-Burger.png',
          price: 1100.00,
          description: 'Plant-based alternative to a traditional burger, typically made from ingredients like vegetables, legumes, grains, and spices, providing a flavorful and satisfying option for those seeking a meatless meal.'
        },
    ],
  },
  {
    title: 'Pizza',
    items: [
      {
          id: 1,
          name: 'Chicken-Bacon-Biththara-Pizza',
          imageUrl: 'https://i.ibb.co/527VgLg/Chicken-Bacon-Biththara-Pizza.png',
          price: 2250.00,
          description:'Flavorful pizza with tomato sauce, eggs, chicken, bacon, mozzarella cheese, and potential additional toppings, creating a delicious combination of savory flavors.'
        },
      
      {
        id: 2,
        name: 'Chicken-Sausage-Pizza',
        imageUrl: 'https://i.ibb.co/R2jfgdj/Chicken-Sausage-Pizza.png',
        price: 2190.00,
        description: 'Delectable pizza topped with tomato sauce, cooked chicken sausage, mozzarella cheese, and possibly other ingredients, creating a mouthwatering and savory pizza delight.'
      },
      {
          id: 3,
          name: 'Fruit-Nut-Caramel-Pizza',
          imageUrl: 'https://i.ibb.co/P9rqrr2/Fruit-Nut-Caramel-Pizza.png',
          price: 2090.00,
  description:'Delightful dessert pizza featuring a caramel sauce base topped with a combination of fresh fruits, nuts, and possibly other sweet toppings, resulting in a deliciously indulgent and fruity treat.'
        },
        {
          id: 4,
          name: 'Gankukul-Daiya-Pizza',
          imageUrl: 'https://i.ibb.co/FVsnMJT/Gankukul-Daiya-Pizza.png',
          price: 2090.00,
  description:'Flavorful pizza with a zesty tomato sauce base, seasoned chicken pieces, melted cheese, and potentially other spicy toppings, offering a delicious and fiery pizza option.'
        },
        {
          id: 5,
          name: 'Hot-Spicy-Chicken-Pizza',
          imageUrl: 'https://i.ibb.co/3YYhPbJ/Hot-Spicy-Chicken-Pizza.png',
          price: 2390.00,
  description:'Mouthwatering pizza with a spicy tomato sauce base, tender and seasoned chicken pieces, melted cheese, and potentially other fiery toppings, delivering a delicious and zesty pizza experience.'
        },
        {
          id: 6,
          name: 'Jaffna-Mutton-Pizza',
          imageUrl: 'https://i.ibb.co/wWJJ0Hy/Jaffna-Mutton-Pizza.png',
          price: 2090.00,
          description: 'Tender pieces of sheep meat on a pizza crust with tomato sauce, cheese, and other toppings, delivering a delicious and distinctively flavorful pizza experience.'
        },
        {
          id: 7,
          name: 'Mogul-Shashlik-Pizza',
          imageUrl: 'https://i.ibb.co/6mzmMMw/Mogul-Shashlik-Pizza.png',
          price: 2090.00,
          description: 'Paneer, bell pepper, onion, and coriander leaves atop a Mogul Shashlik-inspired pizza offer a delightful blend of flavors and Mogul influences.'
        },
        {
          id: 8,
          name: 'Tom-Yum-Pizza',
          imageUrl: 'https://i.ibb.co/fQKpxKy/Tom-Yum-Pizza.png',
          price: 2090.00,
          description: 'Prawns, Squid, Crab Meat, and Oyster Mushrooms is a fusion delight, blending the bold flavors of Tom Yum soup with delectable seafood toppings on a pizza crust.'
        },
        {
          id: 9,
          name: 'Vegitable-Nai-Miris-Pizza',
          imageUrl: 'https://i.ibb.co/NNVZjz9/Vegitable-Nai-Miris-Pizza.png',
          price: 1890.00,
          description: 'Spicy tomato sauce base, topped with a variety of fresh vegetables and potentially other zesty ingredients, offering a delicious and fiery vegetarian pizza option.'
        },
    ],
  },
  {
    title: 'Dessert',
    items: [
      {
          id: 1,
          name: 'Fresh-Fruit-Salad',
          imageUrl: 'https://i.ibb.co/NnB2NfJ/Fresh-Fruit-Salad.png',
          price: 350.00,
          description:'Variety of ripe and juicy fresh fruits, offering a naturally sweet and healthy treat for a delightful finish to any meal.'
        },
      
      {
        id: 2,
        name: 'Chocolate-Mousse',
        imageUrl: 'https://i.ibb.co/Z1yk9s7/Chocolate-Mousse.png',
        price: 350.00,
        description: 'Smooth chocolate cream, topped with whipped cream or chocolate shavings, providing a rich and indulgent treat.'
      },
      {
          id: 3,
          name: 'Cream-Caramel',
          imageUrl: 'https://i.ibb.co/jHLj0FM/Cream-Caramel.png',
          price: 350.00,
  description:'Luscious layer of caramelized sugar on the bottom, topped with a creamy custard, offering a delightful and silky sweet treat.'
        },
        {
          id: 4,
          name: 'Gulab-Jamun',
          imageUrl: 'https://i.ibb.co/bR86PVw/Gulab-Jamun.png',
          price: 350.00,
  description:'Soft, deep-fried dumplings soaked in a fragrant sugar syrup, offering a delightful and syrupy-sweet indulgence.'
        },
        {
          id: 5,
          name: 'Mango-Pudding',
          imageUrl: 'https://i.ibb.co/GT3g2KN/Mango-Pudding.png',
          price: 350.00,
  description:'Ripe mango puree, milk or cream, sugar, and gelatin, resulting in a smooth and fruity treat perfect for mango lovers.'
        },
        {
          id: 6,
          name: 'Chilled-Sago-With-Honey-Cream',
          imageUrl: 'https://i.ibb.co/25g6jkm/Chilled-Sago-With-Honey-Cream.png',
          price: 350.00,
          description: 'Sago pearls soaked in sweetened coconut milk and served with a drizzle of honey-infused cream, offering a delightful and creamy treat.'
        },
   
    ],
  },
  
 
];





const Menu = () => {
  const { products } = useContext(ProductsContext);
  return (

<div className='menu-container'>
    <Tab.Group>
    <Tab.List className="tab-list">
      {products.map((category) => (
        <Tab key={category.title} as={Fragment}>
          {({ selected }) => (
            <button
              className={`tab-item ${selected ? 'active' : ''}`}
              onClick={() => {}}
            >
              {category.title}
            </button>
          )}
        </Tab>
      ))}
    </Tab.List>
    <Tab.Panels>
      {products.map((category) => (
        <Tab.Panel key={category.title} className="tab-panel">
          <div className="menu-items">
            {category.items.map((item) => (
              <ProducCard key={item.id} item={item}  />
            ))}
          </div>
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
  
  </div>
  //   <div className="menu-container">
  //   <h1>Restaurant Menu</h1>
  //   {SHOP_DATA.map((products) => (
  //     <div key={products.title}>
  //       <h2>{products.title}</h2>
  //       <div className="menu-items">
  //         {products.items.map((item) => (
  //           <ProducCard key={item.id} item={item} />
  //         ))}
  //       </div>
  //     </div>
  //   ))}
  // </div>
  )
}

export default Menu
