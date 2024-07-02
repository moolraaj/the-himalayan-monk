'use client'
import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <div key={index} className="star filled"></div>
        ))}
      {halfStar && <div className="star half-filled"></div>}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <div key={index} className="star"></div>
        ))}
    </div>
  );
};

export default StarRating;
