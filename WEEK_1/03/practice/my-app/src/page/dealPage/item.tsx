import React, { useState } from 'react';

interface ItemProps {
  thumbnail: string;
  shop_name: string;
  title: string;
  price: string;
  price_sale: string;
  sale: number;
  sold: number;
  review: number;
  discount_off: string;
}

const Item = ({
  thumbnail,
  shop_name,
  title,
  price,
  price_sale,
  sale,
  sold,
  review,
  discount_off,
}: ItemProps) => {
  const [currentRating, setCurrentRating] = useState(review);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (rating: number) => {
    setCurrentRating(rating);
  };

  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden max-w-xs mx-auto">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {sale > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{sale}%
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 uppercase mb-2">{shop_name}</div>
        
        <div className="flex items-center mb-2">
          <span className="text-green-600 text-xl font-bold mr-2">{price}</span>
          {price_sale && (
            <>
              <span className="text-gray-400 text-sm line-through mr-2">{price_sale}</span>
              <span className="text-red-500 text-sm font-medium">{discount_off}</span>
            </>
          )}
        </div>
        
        <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 leading-5">{title}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, index) => {
              const starIndex = index + 1;
              return (
                <span
                  key={index}
                  className={`text-sm cursor-pointer transition-colors duration-200 ${
                    starIndex <= (hoverRating || currentRating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => handleStarClick(starIndex)}
                  onMouseEnter={() => handleStarHover(starIndex)}
                  onMouseLeave={handleStarLeave}
                >
                  ★
                </span>
              );
            })}
          </div>
          <span className="text-xs text-gray-500 ml-2">({currentRating}/5)</span>
        </div>
        
        <div className="w-full bg-yellow-400 h-1 rounded mb-2"></div>
        
        <div className="text-xs text-gray-500">Sold: {sold}</div>
      </div>
    </div>
  );
};

export default Item;