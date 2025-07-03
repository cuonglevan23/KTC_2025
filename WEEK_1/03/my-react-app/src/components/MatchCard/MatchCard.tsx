import React from 'react';
import type { MatchCardProps } from '../../types/cards';
import './MatchCard.css';

const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1"/>
    <circle cx="19" cy="12" r="1"/>
    <circle cx="5" cy="12" r="1"/>
  </svg>
);

const MatchCard: React.FC<MatchCardProps> = ({
  teamA,
  teamB,
  scoreA,
  scoreB,
  flagA,
  flagB,
  isLive = false,
  time = "0:0"
}) => {
  return (
    <div className="match-card">
      <div className="match-card-header">
        <div className="match-time">
          {isLive && <span className="live-indicator">●</span>}
          {time}
        </div>
        <button className="match-more-btn">
          <MoreIcon />
        </button>
      </div>
      
      <div className="match-teams">
        <div className="team">
          <div className="team-info">
            {flagA && <span className="flag">{flagA}</span>}
            <span className="team-name">{teamA}</span>
          </div>
        </div>
        
        <div className="score">
          <span className="score-value">{scoreA} : {scoreB}</span>
        </div>
        
        <div className="team">
          <div className="team-info">
            {flagB && <span className="flag">{flagB}</span>}
            <span className="team-name">{teamB}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
