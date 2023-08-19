import React, { useEffect, useState } from 'react';
import ReviewCard from './reviewCard'; // Import your ReviewCard component

const Review=()=> {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch data from PHP endpoint
        fetch('https://github.com/Ruvinsara23/marina-restaurant/blob/main/src/components/review/review.php')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
        <h1>Hello</h1>
            {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
            ))}
        </div>
    );
}

export default Review;