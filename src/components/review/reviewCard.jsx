import React from 'react';

function ReviewCard({ review }) {
    return (
        <div className="review-card">
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <p>Date: {review.date}</p>
            <p>Value: {review.value}</p>
        </div>
    );
}

export default ReviewCard;
