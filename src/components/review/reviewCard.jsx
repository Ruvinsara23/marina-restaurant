import React from 'react';
import { FaStar } from 'react-icons/fa';
import './reviewCard.style.scss'

import People from '../../assets/user (1).png'
function ReviewCard({ review }) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(
            <FaStar
              key={i}
              className={i < review.value ? 'star-filled' : 'star-empty'}
            />
          );
        }
        return stars;
      };
    
      return (
        <div className='fcard'>
       
        <div className='profileimgs-container'>
        <img src={People} alt='profile'  className='ab-profile'/>
          <div className='namec-container'>
            <p>{review.name}</p>
            <div className='point'><p>{review.value}.0</p>
            <div className="stars">{renderStars()}</div>
          </div>
        </div>

        </div>
        <p>{review.review}</p>
      </div>

      );
    };
     
   


export default ReviewCard;
