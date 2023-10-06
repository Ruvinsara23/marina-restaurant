import React, { useEffect, useState } from 'react';
import ReviewCard from './reviewCard';
import axios from 'axios'; // Import your ReviewCard component

const Review=()=> {
    const [reviews, setReviews] = useState([]);
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
      fetch('http://localhost/web/review/yt1.php')
        .then(response => response.json())
        .then(data => setFeedbackData(data))
        .catch(error => console.error('Error fetching feedback data:', error));
    }, []);
  
    return (
      <div>
      <h1>review</h1>
        {feedbackData.map(feedback => (
          <div key={feedback.id}>
            {/* Display feedback details */}
            <p>Name: {feedback.name}</p>
            <p>Rate: {feedback.rate}</p>
            <p>Review: {feedback.review}</p>
          </div>
        ))}
      </div>
    );
  
}

export default Review;