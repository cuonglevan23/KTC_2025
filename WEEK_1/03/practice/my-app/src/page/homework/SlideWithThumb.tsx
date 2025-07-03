import React, { useState } from 'react';

const SlideWithThumb = () => {
  const images = [
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(2);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev > 0 ? prev - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev < images.length - 1 ? prev + 1 : 0
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Slide with Thumb</h2>
      
      {/* Main Image Display */}
      <div className="relative mb-4">
        <div className="flex items-center justify-center">
          <button
            onClick={handlePrevious}
            className="absolute left-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
          >
            <span className="text-gray-600">❮</span>
          </button>
          
          <div className="w-80 h-60 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <button
            onClick={handleNext}
            className="absolute right-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
          >
            <span className="text-gray-600">❯</span>
          </button>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
              index === currentImageIndex
                ? 'border-orange-400'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideWithThumb;