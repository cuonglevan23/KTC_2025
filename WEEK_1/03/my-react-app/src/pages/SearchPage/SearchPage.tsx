import React, { useState } from 'react';
import { SearchInput, SearchResultCard, Pagination } from '../../components';
import { useSearch } from '../../hooks';
import type { SearchResult } from '../../types';
import './SearchPage.css';

const SearchPage: React.FC = () => {
  const [selectedType] = useState<string>('all');
  const { results, loading, error, currentPage, totalPages, totalItems, search, changePage } = useSearch();

  const handleSearch = (query: string, type: string = selectedType) => {
    if (query.trim()) {
      search(query, type);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    console.log('Result clicked:', result);
    // Handle result click - could open modal, navigate, etc.
  };

  return (
    <div className="search-page">
      <div className="search-page-header">
        <h1 className="search-page-title">Universal Search</h1>
        <p className="search-page-subtitle">
          Search across web, crypto, and more with our powerful search engine
        </p>
      </div>

      <div className="search-inputs-container">
        <SearchInput
          placeholder="Search anything..."
          onSearch={(query: string) => handleSearch(query, 'all')}
          variant="default"
        />
        
        <SearchInput
          placeholder="Search"
          onSearch={(query: string) => handleSearch(query, 'general')}
          variant="default"
        />
        
        <SearchInput
          onSearch={(query: string) => handleSearch(query, 'general')}
          variant="default"
        />
        
        <SearchInput
          onSearch={(query: string) => handleSearch(query, 'web')}
          variant="web"
        />
        
        <SearchInput
          onSearch={(query: string) => handleSearch(query, 'crypto')}
          variant="crypto"
        />
        
        <SearchInput
          type="tel"
          variant="phone"
        />
        
        <SearchInput
          onSearch={(query: string) => handleSearch(query, 'web')}
          variant="web"
        />
      </div>

      {loading && (
        <div className="search-loading">
          <div className="loading-spinner"></div>
          <p>Searching...</p>
        </div>
      )}

      {error && (
        <div className="search-error">
          <p>Error: {error}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="search-results-container">
          <div className="search-results-header">
            <h2>Search Results</h2>
            <div className="search-results-count">
              Found {totalItems} results
            </div>
          </div>
          
          <div className="search-results">
            {results.map((result: SearchResult) => (
              <SearchResultCard
                key={result.id}
                result={result}
                onClick={handleResultClick}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              onPageChange={changePage}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
