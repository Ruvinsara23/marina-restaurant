import React from 'react'
import Stars from '../../../assets/starts.png';
import './feedback.style.scss';





const feedback = [
  {
    id: "feedback-1",
    content:
      "I had a wonderful dining experience at Restaurant Marina last night. The food was absolutely delicious, and the service was top-notch. I started with the calamari fritti, which was perfectly cooked and seasoned.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/YXy5C8g/people01.png',
  },
  {
    id: "feedback-2",
    content:
      "I've been to Restaurant Marina several times, and I've never been disappointed. The seafood is the best in town, and the other dishes on the menu are also excellent. The staff is always friendly and attentive, and the atmosphere is warm and inviting.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/qdPz6Bk/people02.png',
  },
  {
    id: "feedback-3",
    content:
      "I recently discovered Restaurant Marina, and it has quickly become my new favorite restaurant. The food is consistently delicious, and the service is always excellent. I've tried several different dishes on the menu, and they've all been amazing. ",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/7KkvtKx/people03.png',
  },
  {
    id: "feedback-1",
    content:
      " I celebrated my anniversary at Restaurant Marina last night, and it was the perfect evening. The food was exquisite, the service was impeccable, and the atmosphere was elegant and romantic. I would highly recommend Restaurant Marina for any special occasion",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: 'https://i.ibb.co/BrT5gQs/Ellipse-4.png',
  },
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img:'https://i.ibb.co/BGV6FyN/Ellipse-5.png',
  },
];

const Feedback = () => {
  const generateFeedbackCard = ({ img, name, content, id }) => {
    return (
      <div className='fcard' key={id}>
        <div className='profileimg-container'>
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
