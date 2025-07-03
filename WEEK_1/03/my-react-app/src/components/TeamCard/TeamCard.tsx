import React from 'react';
import type { TeamCardProps } from '../../types/cards';
import './TeamCard.css';

const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1"/>
    <circle cx="19" cy="12" r="1"/>
    <circle cx="5" cy="12" r="1"/>
  </svg>
);

const TeamCard: React.FC<TeamCardProps> = ({
  teamName,
  logo,
  description
}) => {
  return (
    <div className="team-card">
      <div className="team-card-header">
        <div className="team-logo">
          {logo ? (
            <img src={logo} alt={teamName} className="logo-image" />
          ) : (
            <div className="logo-placeholder">
              {teamName.charAt(0)}
            </div>
          )}
        </div>
        <button className="team-more-btn">
          <MoreIcon />
        </button>
      </div>
      
      <div className="team-content">
        <h3 className="team-name">{teamName}</h3>
        {description && (
          <p className="team-description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
