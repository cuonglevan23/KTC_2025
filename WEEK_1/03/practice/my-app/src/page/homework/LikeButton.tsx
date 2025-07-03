import React, { useState } from 'react';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">LikeButton</h2>
      <button
        onClick={handleLike}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          isLiked 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <span className="text-lg">👍</span>
        <span>{isLiked ? 'Thank you !' : 'Like'}</span>
      </button>
    </div>
  );
};

export default LikeButton;