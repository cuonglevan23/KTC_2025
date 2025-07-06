import React, { useState } from 'react';
import { NewsGrid } from '../../components';
import { mockNewsData, additionalNewsData } from '../../data/mockData';
import type { NewsArticle } from '../../types';
import './NewsPage.css';

const NewsPage: React.FC = () => {
  const [allNews, setAllNews] = useState<NewsArticle[]>(mockNewsData);
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    if (!showAll) {
      setAllNews([...mockNewsData, ...additionalNewsData]);
      setShowAll(true);
    } else {
      setAllNews(mockNewsData);
      setShowAll(false);
    }
  };

  return (
    <div className="news-page">
      <div className="news-page-container">
        <NewsGrid 
          articles={allNews}
          title="TIN MỚI"
          showViewAll={true}
          onViewAll={handleViewAll}
        />
        
        {showAll && (
          <div className="news-page-note">
            <p>Hiển thị tất cả tin tức ({allNews.length} bài viết)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
