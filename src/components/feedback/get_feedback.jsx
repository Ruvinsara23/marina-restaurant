
import { useEffect } from 'react';
import React from 'react'
import { useState } from 'react';
import ReviewCard from '../review/reviewCard';

const GetFeedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost/web/review/get_reviews.php') 
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

  return (
    <div className='abd'>
      <h1>What Our customer Says</h1>

          <div className='about-review-container'>
              {reviews.map((review, index) => (
                  <ReviewCard key={index}  review={review}/>
              ))}
          </div>

    </div>
  )
}

export default GetFeedback;
