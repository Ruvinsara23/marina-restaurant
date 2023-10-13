import React from 'react'
import OurStory from '../../assets/story.jpg'
import Mission from '../../assets/mission.jpg'
import ReviewForm from '../../components/feedback/feedback'
import GetFeedback from '../../components/feedback/get_feedback'

import './about-us.scss'
import Footer from '../../components/footer/footer'
import {motion} from "framer-motion"


const AboutUs = () => {
  return (
    <motion.div className='about-container' initial={{ opacity: 0, scale: 0.5 }}
   animate={{ opacity: 1, scale: 1 }}
   transition={{
     duration: 0.6,
     delay: 0.3,
     ease: [0, 0.71, 0.2, 1.01]
   }}>
<div className='our-story-container'>
<div className='our-story'>
<h1>Our Story</h1><br></br>
<p>

Milano is a family-owned and operated restaurant that has been serving up authentic Italian cuisine since 1970. Our story began when our grandparents, Maria and Giovanni, immigrated to the United States from Italy. They were determined to share their love of food and culture with their new home, so they opened a small restaurant in their neighborhood.</p>

<p>Maria and Giovanni's cooking was a hit, and soon Milano became a popular destination for locals and tourists alike. Their secret ingredients were simple: fresh, high-quality ingredients and a passion for cooking</p>.

</div>
<img src={OurStory} alt='our story' className='mission-img' />
</div>
<div className='mission-container'>
<img src={Mission} alt='mission ' className='mission-imga' />
<div className='mission'>
<h1>Our Mission</h1><br></br>
<p>

Our mission is to provide our customers with a memorable dining experience. We use only the freshest ingredients and our chefs are passionate about creating delicious food. We hope you enjoy your meal at our restaurant.</p>.

</div>

</div>
<div className='about-review-container'>
<GetFeedback />

<div className='revew-form'>
<h2>Enter your <br></br>  feedback</h2>
<ReviewForm />
</div>

</div>

<Footer />
 
</motion.div>


  )
}

export default AboutUs
