import React, { useState } from 'react';
import './feedback.style.scss'
import { collection,getDocs,addDoc } from 'firebase/firestore'
import { Rating } from 'primereact/rating';
import { db } from '../../utils/firebase.utils';
import Review from '../review/review';

const defaultFormFields={
    value:5,
    name:'',
    review:'',
}

const ReviewForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
  const {value,name,review,}=formFields

  const userDataCollection=collection(db,"review")

  const handleSubmit = async(event) => {

    event.preventDefault();

    try {
        await addDoc(userDataCollection, {
          name,
          value,
          review,
          createdAt: new Date().toISOString(), // You 
        });
  
    
      
  
        console.log('Review submitted successfully!');
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
        <div className="review">
        <h1>Submit your review</h1>
        <form onSubmit={handleSubmit}>
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
                name='review'></textarea>
                <button  class="btn" type="submit">SUBMIT</button>
            </div>
        </form>

        <Review />
    </div>
    )}

export default ReviewForm;
