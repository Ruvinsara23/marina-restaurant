import { useEffect } from 'react';
import React from 'react'
import { useState } from 'react';

const GetFeedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost/web/review/get_reviews.php') // Replace with the actual path
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

  return (
    <div>
      <h1>This getFfeedback</h1>

          <div>
              <h2>Reviews</h2>
              {reviews.map((review, index) => (
                  <div key={index} className="review-card">
                      <h3>{review.name}</h3>
                      <p>{review.review}</p>
                      <p>Value: {review.value}</p>
                  </div>
              ))}
          </div>

    </div>
  )
}

export default GetFeedback;
