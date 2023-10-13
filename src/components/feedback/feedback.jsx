import React, { useState } from 'react';
import './feedback.style.scss'
// import { collection,getDocs,addDoc } from 'firebase/firestore'
import { Rating } from 'primereact/rating';
// import { db } from '../../utils/firebase.utils';
// import Review from '../review/review';

const defaultFormFields={
    value:5,
    name:'',
    review:'',
}

const ReviewForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
  const {value,name,review,}=formFields


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
          value,
          name,
          review,
      };

      const response = await fetch('http://localhost/web/review/add_reviews.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (response.ok) {
          const responseData = await response.json();
          console.log('Response from server:', responseData);
      } else {
          console.error('Error submitting review');
      }
  } catch (error) {
      console.error('Error submitting review:', error);
  }

    setFormFields(defaultFormFields);
};
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  };
    
  
    return (
        <div className='review-continer'>
        
        <div className="review-card">
        <form onSubmit={handleSubmit} className='form-about-container' >
        <Rating className="review" value={value} onChange={handleChange} cancel={false} color='yellow' name='value' />
        <div class="namee">
                <p class="feedback-p">Enter Your Name</p>
                <textarea class="name1" type='text' 
                value={name} 
                required onChange={handleChange} 
                name='name' ></textarea>
            </div>
            <div class="txt">
                <p class="feedback-p">Your Feedback</p>
                <textarea class="textar" placeholder="Describe your experience.."value={review} 
                required onChange={handleChange} 
                name='review'></textarea><br></br>
                <button  class="btn" type="submit">SUBMIT</button>
            </div>
        </form>
    </div>
    
    </div>
    )}

export default ReviewForm;
