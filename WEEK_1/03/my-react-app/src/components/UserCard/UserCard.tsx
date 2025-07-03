import React from 'react';
import type { UserCardProps } from '../../types/cards';
import './UserCard.css';

const VisaIcon = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
    <rect width="24" height="16" rx="4" fill="#1a1f71"/>
    <path d="M8.5 5.5L7 10.5H5.5L4.5 6.5C4.4 6.1 4.2 5.8 3.8 5.6C3.2 5.3 2.5 5.1 1.8 5V4.5H4.8C5.3 4.5 5.7 4.8 5.8 5.3L6.5 8.5L8.5 4.5H10L8.5 5.5Z" fill="white"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const UserCard: React.FC<UserCardProps> = ({
  name,
  avatar,
  cardNumber,
  cardType = 'visa',
  isHidden = false
}) => {
  const formatCardNumber = (number: string) => {
    if (isHidden) {
      return `**** **** **** ${number.slice(-4)}`;
    }
    return number.replace(/(.{4})/g, '$1 ').trim();
  };

  return (
    <div className="user-card">
      <div className="user-info">
        <div className="user-avatar">
          {avatar ? (
            <img src={avatar} alt={name} className="avatar-image" />
          ) : (
            <div className="avatar-placeholder">
              {name.split(' ').map(n => n.charAt(0)).join('')}
            </div>
          )}
        </div>
        
        <div className="user-details">
          <h3 className="user-name">{name}</h3>
          {cardNumber && (
            <div className="card-info">
              <div className="card-type">
                {cardType === 'visa' && <VisaIcon />}
              </div>
              <span className="card-number">
                {formatCardNumber(cardNumber)}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {isHidden && (
        <div className="privacy-icon">
          <EyeOffIcon />
        </div>
      )}
    </div>
  );
};

export default UserCard;
