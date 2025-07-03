import React from 'react';
import type { SearchInputProps } from '../../types';
import './SearchInput.css';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const CryptoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
  </svg>
);

const WebIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const EmojiIcon = () => (
  <span className="emoji-icon">😊</span>
);

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  value = "",
  onChange,
  onSearch,
  type = "text",
  variant = "default",
  disabled = false
}) => {
  const [inputValue, setInputValue] = React.useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(inputValue);
  };

  const getIcon = () => {
    switch (variant) {
      case 'crypto':
        return <CryptoIcon />;
      case 'web':
        return <WebIcon />;
      case 'phone':
        return <PhoneIcon />;
      default:
        return <SearchIcon />;
    }
  };

  const getRightIcon = () => {
    switch (variant) {
      case 'crypto':
        return <MenuIcon />;
      case 'web':
        return <EmojiIcon />;
      case 'phone':
        return <PhoneIcon />;
      default:
        return null;
    }
  };

  const getPlaceholder = () => {
    switch (variant) {
      case 'crypto':
        return 'Search crypto';
      case 'web':
        return 'Search in the web';
      case 'phone':
        return 'Phone number';
      default:
        return placeholder;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`search-input-form ${variant}`}>
      <div className={`search-input-container ${variant} ${disabled ? 'disabled' : ''}`}>
        <div className="search-input-icon">
          {getIcon()}
        </div>
        
        <input
          type={type}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={getPlaceholder()}
          disabled={disabled}
          className="search-input-field"
        />
        
        {getRightIcon() && (
          <div className="search-input-right-icon">
            {getRightIcon()}
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchInput;
