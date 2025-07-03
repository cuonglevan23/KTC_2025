import React from 'react';
import LikeButton from './LikeButton';
import Rating from './Rating';
import SlideWithThumb from './SlideWithThumb';
import ButtonTabs from './ButtonTabs';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Homework Session2
          </h1>
        </div>

        {/* Components Container */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <LikeButton />
          <Rating />
          <SlideWithThumb />
          <ButtonTabs />
        </div>
      </div>
    </div>
  );
};

export default HomePage;