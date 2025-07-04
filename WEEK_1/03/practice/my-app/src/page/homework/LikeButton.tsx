import React, { useState } from 'react';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">LikeButton</h2>
      
      <div className="flex items-center space-x-3">
        <button
          onClick={handleLike}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
            isLiked 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="text-lg">👍</span>
        </button>
        
        <span className="text-gray-700 select-none">
          {isLiked ? 'Thank you !' : 'Click like if this post is useful to you !'}
        </span>
      </div>
    </div>
  );
};

export default LikeButton;