import React from 'react';
import type { SearchResult } from '../../types';
import './SearchResultCard.css';

interface SearchResultCardProps {
  result: SearchResult;
  onClick?: (result: SearchResult) => void;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ result, onClick }) => {
  const handleClick = () => {
    onClick?.(result);
  };

  const getTypeIcon = () => {
    switch (result.type) {
      case 'web':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        );
      case 'crypto':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
          </svg>
        );
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        );
    }
  };

  return (
    <div className={`search-result-card ${result.type}`} onClick={handleClick}>
      <div className="search-result-header">
        <div className="search-result-icon">
          {getTypeIcon()}
        </div>
        <div className="search-result-type">
          {result.type.toUpperCase()}
        </div>
      </div>
      
      <div className="search-result-content">
        <h3 className="search-result-title">{result.title}</h3>
        {result.description && (
          <p className="search-result-description">{result.description}</p>
        )}
        {result.url && (
          <div className="search-result-url">{result.url}</div>
        )}
      </div>
    </div>
  );
};

export default SearchResultCard;
