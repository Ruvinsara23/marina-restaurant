import React from 'react'
import ProducCard from '../../components/product-card/product-card';
import { useContext,Fragment } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { Tab } from '@headlessui/react';
import './menu.scss'
import { motion } from "framer-motion";



export const SHOP_DATA = [
  {
    title: 'Indian food',
    items: [
      {
          id: 1,
          name: 'Adraki-Aloo-Gobi',
          imageUrl: 'https://i.ibb.co/drmLff2/Adraki-Aloo-Gobi.png',
          price: 1350.00,
          description:'Consisting of potatoes and cauliflower cooked with ginger and a blend of aromatic spices, resulting in a delicious and spiced vegetable medley.'
        },
      
      {
        id: 2,
        name: 'Basmati-Chawal',
        imageUrl: 'https://i.ibb.co/f9wgmyQ/Basmati-Chawal.png',
        price: 1020.00,
        description: 'Fragrant and flavorful long-grain rice, widely used in Indian and South Asian cuisines as a staple for its distinctive aroma and taste.'
      },
      {
          id: 3,
          name: 'Chapathi',
          imageUrl: 'https://i.ibb.co/9YcXfvp/Chapathi.png',
          price: 560.00,
  description:'Traditional flatbread from India made from whole wheat flour, commonly served as a staple accompaniment to various dishes.'
        },
        {
          id: 4,
          name: 'Dahi-Kebab',
          imageUrl: 'https://i.ibb.co/ssJw5JL/Dahi-Kebab.png',
          price: 1350.00,
  description:'Vegetarian appetizer made from hung curd (yogurt), mixed with spices and herbs, formed into patties, and shallow-fried until golden and crispy.'
        },
        {
          id: 5,
          name: 'Jeera-Rice',
          imageUrl: 'https://i.ibb.co/bWD5G27/Jeera-Rice.png',
          price: 1150.00,
  description:'Sautéing cumin seeds (jeera) in ghee or oil and then cooking basmati rice with these fragrant seeds, resulting in flavorful and aromatic rice.'
        },
        {
          id: 6,
          name: 'Jhinga-Pasinda-Seafood-Curry',
          imageUrl: 'https://i.ibb.co/5cLQ9N2/Jhinga-Pasinda-Seafood-Curry.png',
          price: 3380.00,
          description: 'Flavorful dish featuring prawns or shrimp cooked in a rich and aromatic curry sauce, offering a delightful seafood experience.'
        },
        {
          id: 7,
          name: 'Macchi-Amritsari',
          imageUrl: 'https://i.ibb.co/Pc5yk8R/Macchi-Amritsari.png',
          price: 1810.00,
          description:'Fish fillets are marinated in a mixture of spices and gram flour, deep-fried until crispy, offering a mouthwatering seafood delicacy.'
        },
      
      {
        id: 8,
        name: 'Macchi-Methi-Bahar-Seafood-Curry',
        imageUrl: 'https://i.ibb.co/0XSvPJS/Macchi-Methi-Bahar-Seafood-Curry.png',
        price: 2330.00,
        description: 'Flavorful seafood curry made with fish and fenugreek, creating a delightful and aromatic dish.'
      },
      {
          id: 9,
          name: 'Masaledar-Jhinga-Seafood-Curry',
          imageUrl: 'https://i.ibb.co/gFzQph5/Masaledar-Jhinga-Seafood-Curry.png',
          price: 3380.00,
  description:'Succulent prawns, cooked with a blend of aromatic spices, creating a delicious and zesty dish.'
        },
        {
          id: 10,
          name: 'Murgh-65',
          imageUrl: 'https://i.ibb.co/njGfYwp/Murgh-65.png',
          price: 1550.00,
  description:'Marinated and deep-fried chicken, seasoned with spices, curry leaves, and yogurt, creating a spicy and flavorful dish.'
        },
        {
          id: 11,
          name: 'Punjabi-Samosa',
          imageUrl: 'https://i.ibb.co/5s3dDS0/Punjabi-Samosa.png',
          price: 1020.00,
  description:'Triangular pastry filled with spiced potatoes and peas, deep-fried to golden perfection, offering a savory and delicious treat.'
        },
        {
          id: 12,
          name: 'Sabzi-Biryani-Vegetable',
          imageUrl: 'https://i.ibb.co/ZM0DQsW/Sabzi-Biryani-Vegetable.png',
          price: 1810.00,
          description: 'Fragrant basmati rice, mixed vegetables, and a blend of aromatic spices, resulting in a delicious and aromatic vegetarian biryani.'
        },
        {
          id: 13,
          name: 'Tawa-Sabzi',
          imageUrl: 'https://i.ibb.co/w6XGX4T/Tawa-Sabzi.png',
          price: 1350.00,
          description: 'Variety of vegetables with spices on a hot griddle or tawa, resulting in a flavorful and aromatic vegetable medley.'
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
          id: 10,
          name: 'BBQ-Bacon-Burger',
          imageUrl: 'https://i.ibb.co/thwVVz5/BBQ-Bacon-Burger.png',
          price: 2100.00,
          description:'Delicious burger featuring a juicy beef patty topped with crispy bacon, tangy barbecue sauce, melted cheese, and traditional burger fixings, creating a mouthwatering combination of savory flavors.'
        },
      
      {
        id: 11,
        name: 'Big-Mac',
        imageUrl: 'https://i.ibb.co/zrt5RxC/Big-Mac.png',
        price: 1820.00,
        description: 'Two beef patties, special sauce, lettuce, cheese, pickles, onions, all sandwiched between three sesame seed buns, creating a satisfying and iconic fast food experience.'
      },
      {
          id: 12,
          name: 'Chicken-Big-Mac',
          imageUrl: 'https://i.ibb.co/fDK6tck/Chicken-Big-Mac.png',
          price: 1700.00,
  description:'Breaded and seasoned chicken patties, special sauce, lettuce, cheese, pickles, onions, and sesame seed buns, offering a flavorful twist on the original sandwich for chicken lovers.'
        },
        {
          id: 13,
          name: 'Classic-Cheese-Burger',
          imageUrl: 'https://i.ibb.co/0qWTGz4/Classic-Cheese-Burger.png',
          price: 1200.00,
  description:'Juicy beef patty cooked to perfection, topped with a slice of melted cheese, and served on a soft bun with traditional accompaniments like lettuce, tomato, onion, and condiments, creating a simple yet delicious burger experience.'
        },
        {
          id: 14,
          name: 'Pulled-Pork-Burger',
          imageUrl: 'https://i.ibb.co/M9GsbdZ/Pulled-Pork-Burger.png',
          price: 2380.00,
  description:'Slow-cooked pulled pork on a bun with barbecue sauce and toppings, offering a delicious and savory culinary experience.'
        },
        {
          id: 15,
          name: 'Gourmet-Beef-Burger',
          imageUrl: 'https://i.ibb.co/VMP39g2/Gourmet-Beef-Burger.png',
          price: 1940.00,
          description: 'High-quality ground beef, artisanal buns, and a selection of gourmet toppings and condiments, resulting in a decadent and elevated burger experience.'
        },
        {
          id: 16,
          name: 'Gourmet-Chicken-Burger',
          imageUrl: 'https://i.ibb.co/L0FNvgv/Gourmet-Chicken-Burger.png',
          price: 1940.00,
          description: 'Premium cuts of chicken, artisanal buns, and a range of gourmet toppings and condiments, delivering a delicious and sophisticated chicken burger experience.'
        },
        {
          id: 17,
          name: 'Gourmet-Lamb-Burger',
          imageUrl: 'https://i.ibb.co/kG2qBHx/Gourmet-Lamb-Burger.png',
          price: 2330.00,
          description: 'Ground lamb, artisanal buns, and a selection of gourmet ingredients such as unique sauces, specialty cheeses, and flavorful toppings, offering an elevated and succulent lamb burger experience.'
        },
        {
          id: 18,
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
          id: 19,
          name: 'Chicken-Bacon-Biththara-Pizza',
          imageUrl: 'https://i.ibb.co/527VgLg/Chicken-Bacon-Biththara-Pizza.png',
          price: 2250.00,
          description:'Flavorful pizza with tomato sauce, eggs, chicken, bacon, mozzarella cheese, and potential additional toppings, creating a delicious combination of savory flavors.'
        },
      
      {
        id: 20,
        name: 'Chicken-Sausage-Pizza',
        imageUrl: 'https://i.ibb.co/R2jfgdj/Chicken-Sausage-Pizza.png',
        price: 2190.00,
        description: 'Delectable pizza topped with tomato sauce, cooked chicken sausage, mozzarella cheese, and possibly other ingredients, creating a mouthwatering and savory pizza delight.'
      },
      {
          id: 21,
          name: 'Fruit-Nut-Caramel-Pizza',
          imageUrl: 'https://i.ibb.co/P9rqrr2/Fruit-Nut-Caramel-Pizza.png',
          price: 2090.00,
  description:'Delightful dessert pizza featuring a caramel sauce base topped with a combination of fresh fruits, nuts, and possibly other sweet toppings, resulting in a deliciously indulgent and fruity treat.'
        },
        {
          id: 22,
          name: 'Gankukul-Daiya-Pizza',
          imageUrl: 'https://i.ibb.co/FVsnMJT/Gankukul-Daiya-Pizza.png',
          price: 2090.00,
  description:'Flavorful pizza with a zesty tomato sauce base, seasoned chicken pieces, melted cheese, and potentially other spicy toppings, offering a delicious and fiery pizza option.'
        },
        {
          id: 23,
          name: 'Hot-Spicy-Chicken-Pizza',
          imageUrl: 'https://i.ibb.co/3YYhPbJ/Hot-Spicy-Chicken-Pizza.png',
          price: 2390.00,
  description:'Mouthwatering pizza with a spicy tomato sauce base, tender and seasoned chicken pieces, melted cheese, and potentially other fiery toppings, delivering a delicious and zesty pizza experience.'
        },
        {
          id: 24,
          name: 'Jaffna-Mutton-Pizza',
          imageUrl: 'https://i.ibb.co/wWJJ0Hy/Jaffna-Mutton-Pizza.png',
          price: 2090.00,
          description: 'Tender pieces of sheep meat on a pizza crust with tomato sauce, cheese, and other toppings, delivering a delicious and distinctively flavorful pizza experience.'
        },
        {
          id: 25,
          name: 'Mogul-Shashlik-Pizza',
          imageUrl: 'https://i.ibb.co/6mzmMMw/Mogul-Shashlik-Pizza.png',
          price: 2090.00,
          description: 'Paneer, bell pepper, onion, and coriander leaves atop a Mogul Shashlik-inspired pizza offer a delightful blend of flavors and Mogul influences.'
        },
        {
          id: 26,
          name: 'Tom-Yum-Pizza',
          imageUrl: 'https://i.ibb.co/fQKpxKy/Tom-Yum-Pizza.png',
          price: 2090.00,
          description: 'Prawns, Squid, Crab Meat, and Oyster Mushrooms is a fusion delight, blending the bold flavors of Tom Yum soup with delectable seafood toppings on a pizza crust.'
        },
        {
          id: 27,
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
          id: 28,
          name: 'Fresh-Fruit-Salad',
          imageUrl: 'https://i.ibb.co/NnB2NfJ/Fresh-Fruit-Salad.png',
          price: 350.00,
          description:'Variety of ripe and juicy fresh fruits, offering a naturally sweet and healthy treat for a delightful finish to any meal.'
        },
      
      {
        id: 29,
        name: 'Chocolate-Mousse',
        imageUrl: 'https://i.ibb.co/Z1yk9s7/Chocolate-Mousse.png',
        price: 350.00,
        description: 'Smooth chocolate cream, topped with whipped cream or chocolate shavings, providing a rich and indulgent treat.'
      },
      {
          id: 30,
          name: 'Cream-Caramel',
          imageUrl: 'https://i.ibb.co/jHLj0FM/Cream-Caramel.png',
          price: 350.00,
  description:'Luscious layer of caramelized sugar on the bottom, topped with a creamy custard, offering a delightful and silky sweet treat.'
        },
        {
          id: 31,
          name: 'Gulab-Jamun',
          imageUrl: 'https://i.ibb.co/bR86PVw/Gulab-Jamun.png',
          price: 350.00,
  description:'Soft, deep-fried dumplings soaked in a fragrant sugar syrup, offering a delightful and syrupy-sweet indulgence.'
        },
        {
          id: 32,
          name: 'Mango-Pudding',
          imageUrl: 'https://i.ibb.co/GT3g2KN/Mango-Pudding.png',
          price: 350.00,
  description:'Ripe mango puree, milk or cream, sugar, and gelatin, resulting in a smooth and fruity treat perfect for mango lovers.'
        },
        {
          id: 33,
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

<div className='menu-container' >
    <Tab.Group>
    <Tab.List className="tab-list">
      {products.map((category) => (
        <Tab key={category.title} as={Fragment}>
          {({ selected }) => (
            <button
              className={`tab-item ${selected ? 'active' : ''}`}
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
          <motion.div className="menu-items" initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}>
            {category.items.map((item) => (
              <ProducCard key={item.id} item={item}  />
            ))}
          </motion.div>
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
  
  </div>
 
  )
}

export default Menu
