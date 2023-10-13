import './home.styles.scss';
import React from 'react';
import hero from '../../assets/Group 2919w.png'
import Bestselling from './sections/bestselling';
import def from '../../assets/def.png'
import lmn from '../../assets/lmn.png'
import Feedback from './sections/feedback';
import Features from './sections/features';
import { RoughNotation} from 'react-rough-notation';
import { motion } from "framer-motion";
import Footer from '../../components/footer/footer';



const Homepage = () => {
  return (
    <div>
   <div className='hero'>
   <div className='caption'>
    
   <h1  > 
   <RoughNotation type="underline" show={true} color="#05C066" strokeWidth='4' animationDuration='2000'>
   Delicious <span className='tapered' > &nbsp;Food </span><br></br> </RoughNotation>
     
 
      
      Made with <br></br>
        
    
   
     Love.
       
   
   </h1><br></br>
   <motion.p className="p-header" initial={{ opacity: 0, scale: 0.5 }}
   animate={{ opacity: 1, scale: 1 }}
   transition={{
     duration: 0.6,
     delay: 0.3,
     ease: [0, 0.71, 0.2, 1.01]
   }}>Welcome to Milano restaurant ! At our restaurant, we are passionate aboutbr<br></br> serving you exceptional  cuisine that is prepared with utmost care and affection.<br></br>Our talented chefs combine fresh, high-quality ingredients with their culinary <br></br>expertise to create dishes that are not only delicious but also a testament<br></br> to their love for cooking.  Indulge in our mouthwatering<br></br> creations and experience the joy of dining on food made with love.
        </motion.p><br></br>
        <button class="primary">Order Now</button>
        
   </div>
   
   <motion.img className="box"
   initial={{ opacity: 0, scale: 0.5 }}
   animate={{ opacity: 1, scale: 1 }}
   transition={{
     duration: 0.6,
     delay: 0.3,
     ease: [0, 0.71, 0.2, 1.01]
   }} src={hero} alt='header'  class="hero-img" />
   </div>
   <div class="best-selling-product-container">
   <h1 >Our Best Selling <span class="colored-word"> Products</span></h1>
      <Bestselling />
    </div>
    <div className='best-selling-product-container'>
    <img src={def} alt='header'  className='offer' />
    <img src={lmn} alt='header'  className='offer-md' />
    </div>
    <div class="best-selling-product-container">
   <h1 >What people are saying  <span class="colored-word"> about us </span></h1>
      <Feedback />
    </div>
    <div class="best-selling-product-container">
   <h1 >Experience Our Convenient   <span class="colored-word"> Features</span></h1>
      <Features />
    </div>
    <div className="ctcontainer">
    <div className='text'>
      <h2 className="heading">Let’s try our service now!</h2>
      <p >
      Experience our convenient features, including seamless ordering, secure payment, fast delivery, and the delight of savoring the best food crafted by skilled chefs.
      </p></div>
      <div className="button-container">
      <button>Get start</button>
    </div>
    </div>
    <Footer />
   </div>
  ) 
}

export default Homepage;
