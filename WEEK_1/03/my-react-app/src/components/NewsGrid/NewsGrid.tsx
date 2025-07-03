import React from 'react';
import './NewsGrid.css';
import NewsCard from '../NewsCard/NewsCard';

const mockNewsData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz',
    views: 140,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12',
    views: 127,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chip Snapdragon 720',
    views: 55,
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    title: 'Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa',
    views: 55,
  },
];

const NewsGrid = () => {
  return (
    <div className="news-grid">
      <h2 className="news-header">TIN MỚI</h2>
      <div className="news-cards">
        {mockNewsData.map((news) => (
          <NewsCard key={news.id} image={news.image} title={news.title} views={news.views} />
        ))}
      </div>
      <a href="#" className="news-more">Xem thêm</a>
    </div>
  );
};

export default NewsGrid;
