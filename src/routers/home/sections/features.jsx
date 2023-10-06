import React from 'react'
import './features.styles.scss'


const features = [
    {
      id: "features-1",
      content:
        "Simplify your meal experience with a seamless and user-friendly ordering process",
      title: "Easy to Order",
      img: 'https://i.ibb.co/d5X6q2j/Group-2913.png',
    },
    {
      id: "features-2",
      content:
        "Rest assured with our top-notch security measures for safe and worry-free transactions",
      title: "Secure Payment",
      img: 'https://i.ibb.co/tY9XrXM/Group-2914.png',
    },
    {
      id: "features-3",
      content:
        "Enjoy your favorite dishes delivered to your doorstep promptly with our swift and reliable service",
      title: "Fast Delivery",
      img: 'https://i.ibb.co/58FNg2j/Group-2915.png',
    },
    {
      id: "features-1",
      content:
        "Indulge in a gastronomic delight with our carefully crafted menu prepared by our talented chefs",
      title: "Best Food",
      img: 'https://i.ibb.co/k41sVmm/Group-2916.png',
    },
    
  ];


const Features = () => {
    const generatefeaturesCard = ({ img, title, content, id }) => {
        return (
          <div className='fearturecard' key={id}>
          <img src={img} alt='feature' />
          <p>{title}</p>
           <div className='content'>{content}</div>
          </div>
        );
      };


  return (
    <div>
    <div id="feedbackContainer" className='fearturecard-container'>
    {features.map(generatefeaturesCard)}
  </div>
    </div>
  )
}

export default Features
