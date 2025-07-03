import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(1);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    setHoverRating(starIndex);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Rating</h2>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((starIndex) => (
          <button
            key={starIndex}
            onClick={() => handleStarClick(starIndex)}
            onMouseEnter={() => handleStarHover(starIndex)}
            onMouseLeave={handleStarLeave}
            className="text-2xl focus:outline-none transition-colors"
          >
            <span
              className={`${
                starIndex <= (hoverRating || rating)
                  ? 'text-orange-400'
                  : 'text-gray-300'
              }`}
            >
              ★
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;