import React from 'react';
import type { NewsArticle } from '../../types/news';
import './NewsCard.css';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={article.image} alt={article.title} />
      </div>
      <div className="news-card-content">
        <h3 className="news-card-title">{article.title}</h3>
        <div className="news-card-views">
          {article.viewText}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
