import React from 'react';
import type { DashboardCardProps } from '../../types/cards';
import './DashboardCard.css';

const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1"/>
    <circle cx="19" cy="12" r="1"/>
    <circle cx="5" cy="12" r="1"/>
  </svg>
);

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  progress = 0,
  status = 'default',
  value
}) => {
  return (
    <div className={`dashboard-card ${status}`}>
      <div className="dashboard-card-header">
        <div className="status-tabs">
          <span className={`status-tab ${status === 'highlight' ? 'active' : ''}`}>
            Highlight
          </span>
          <span className={`status-tab ${status === 'feeds' ? 'active' : ''}`}>
            Feeds
          </span>
        </div>
        
        <button className="dashboard-more-btn">
          <MoreIcon />
        </button>
      </div>
      
      <div className="dashboard-content">
        <h3 className="dashboard-title">{title}</h3>
        {subtitle && (
          <p className="dashboard-subtitle">{subtitle}</p>
        )}
        
        {progress > 0 && (
          <div className="progress-section">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="progress-value">{progress}%</span>
          </div>
        )}
        
        {value && (
          <div className="dashboard-value">
            {value}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
