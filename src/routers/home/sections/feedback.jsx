import React from 'react'
import Stars from '../../../assets/starts.png';
import './feedback.style.scss';





const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/YXy5C8g/people01.png',
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/qdPz6Bk/people02.png',
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/7KkvtKx/people03.png',
  },
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/YXy5C8g/people01.png',
  },
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/YXy5C8g/people01.png',
  },
];

const Feedback = () => {
  const generateFeedbackCard = ({ img, name, content, id }) => {
    return (
      <div className='fcard' key={id}>
        <div className='profile-container'>
          <img src={img} alt='profile' />
          <div className='name-container'>
            <p>{name}</p>
            <div className='point'><p>5.0</p>
            <img src={Stars} alt='stars' /></div>
          </div>
        </div>
        <p>{content}</p>
      </div>
    );
  };

  return (
    <div id="feedbackContainer" className='fcard-container'>
      {feedback.map(generateFeedbackCard)}
    </div>
  );
};

export default Feedback;
