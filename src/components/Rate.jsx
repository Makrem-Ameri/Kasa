
import React from 'react';
import '../styles/Rate.css'
const Rate = ({ rating }) => {
  const onStars = Array.from({ length: rating }).map((_, index) => (
    <span key={index} className="star_on">★</span>
  ));

  const offStars = Array.from({ length: 5 - rating }).map((_, index) => (
    <span key={index} className="star_off">★</span>
  ));

  return (
    <div className="rating">
      {onStars}
      {offStars}
    </div>
  );
};

export default Rate;
