import React, { useState } from 'react';
import { 
  MatchCard, 
  TeamCard, 
  UserCard, 
  DashboardCard, 
  Pagination 
} from '../../components';
import type { 
  MatchCardProps, 
  TeamCardProps, 
  UserCardProps, 
  DashboardCardProps 
} from '../../types/cards';
import './CardsPage.css';

// Mock data for demonstration
const mockMatches: MatchCardProps[] = [
  {
    teamA: "Real Madrid",
    teamB: "Barcelona", 
    scoreA: 2,
    scoreB: 1,
    flagA: "🇪🇸",
    flagB: "🇪🇸",
    isLive: true,
    time: "75:30"
  },
  {
    teamA: "Manchester United",
    teamB: "Liverpool",
    scoreA: 0,
    scoreB: 0,
    flagA: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    flagB: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    isLive: false,
    time: "Today 15:00"
  },
  {
    teamA: "Bayern Munich",
    teamB: "Borussia Dortmund",
    scoreA: 3,
    scoreB: 2,
    flagA: "🇩🇪",
    flagB: "🇩🇪",
    isLive: false,
    time: "Final"
  },
  {
    teamA: "Paris Saint-Germain",
    teamB: "Olympique Marseille",
    scoreA: 1,
    scoreB: 1,
    flagA: "🇫🇷",
    flagB: "🇫🇷",
    isLive: true,
    time: "45:00"
  },
  {
    teamA: "Juventus",
    teamB: "AC Milan",
    scoreA: 2,
    scoreB: 0,
    flagA: "🇮🇹",
    flagB: "🇮🇹",
    isLive: false,
    time: "Tomorrow 20:45"
  },
  {
    teamA: "Arsenal",
    teamB: "Chelsea",
    scoreA: 1,
    scoreB: 3,
    flagA: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    flagB: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    isLive: false,
    time: "Final"
  }
];

const mockTeams: TeamCardProps[] = [
  {
    teamName: "Real Madrid",
    logo: "👑",
    description: "14-time Champions League winners"
  },
  {
    teamName: "Barcelona", 
    logo: "🔵",
    description: "More than a club"
  },
  {
    teamName: "Manchester United",
    logo: "👹",
    description: "The Red Devils"
  },
  {
    teamName: "Liverpool",
    logo: "🔴",
    description: "You'll Never Walk Alone"
  },
  {
    teamName: "Bayern Munich",
    logo: "⚪",
    description: "Mia san mia"
  },
  {
    teamName: "Paris Saint-Germain",
    logo: "🔵",
    description: "Ici c'est Paris"
  }
];

const mockUsers: UserCardProps[] = [
  {
    name: "John Doe",
    avatar: "👨‍💼",
    cardNumber: "**** 1234",
    cardType: "visa"
  },
  {
    name: "Jane Smith", 
    avatar: "👩‍💻",
    cardNumber: "**** 5678",
    cardType: "mastercard"
  },
  {
    name: "Mike Johnson",
    avatar: "👨‍🎨",
    cardNumber: "**** 9012",
    cardType: "visa",
    isHidden: true
  },
  {
    name: "Sarah Wilson",
    avatar: "👩‍🔬",
    cardNumber: "**** 3456",
    cardType: "mastercard"
  },
  {
    name: "Alex Brown",
    avatar: "👨‍🏫",
    cardNumber: "**** 7890",
    cardType: "visa"
  },
  {
    name: "Emma Davis",
    avatar: "👩‍⚕️",
    cardNumber: "**** 2468",
    cardType: "mastercard"
  }
];

const mockDashboard: DashboardCardProps[] = [
  {
    title: "Total Revenue",
    subtitle: "$45,231",
    progress: 75,
    status: "highlight"
  },
  {
    title: "Active Users", 
    subtitle: "2,345",
    progress: 60,
    status: "feeds"
  },
  {
    title: "Conversion Rate",
    subtitle: "3.24%",
    progress: 45,
    status: "default"
  },
  {
    title: "Monthly Growth",
    subtitle: "+12.5%",
    progress: 85,
    status: "highlight"
  },
  {
    title: "Support Tickets",
    subtitle: "142",
    progress: 30,
    status: "feeds"
  },
  {
    title: "Server Uptime",
    subtitle: "99.9%",
    progress: 99,
    status: "highlight"
  }
];

const CARDS_PER_PAGE = 4;

type CardType = 'matches' | 'teams' | 'users' | 'dashboard';

const CardsPage: React.FC = () => {
  const [currentCardType, setCurrentCardType] = useState<CardType>('matches');
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentData = () => {
    switch (currentCardType) {
      case 'matches': return mockMatches;
      case 'teams': return mockTeams;
      case 'users': return mockUsers;
      case 'dashboard': return mockDashboard;
      default: return [];
    }
  };

  const currentData = getCurrentData();
  const totalPages = Math.ceil(currentData.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedData = currentData.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handleCardTypeChange = (type: CardType) => {
    setCurrentCardType(type);
    setCurrentPage(1); // Reset to first page when changing card type
  };

  const renderCards = () => {
    switch (currentCardType) {
      case 'matches':
        return paginatedData.map((match, index) => (
          <MatchCard 
            key={`match-${startIndex + index}`}
            {...(match as MatchCardProps)}
          />
        ));
      case 'teams':
        return paginatedData.map((team, index) => (
          <TeamCard 
            key={`team-${startIndex + index}`}
            {...(team as TeamCardProps)}
          />
        ));
      case 'users':
        return paginatedData.map((user, index) => (
          <UserCard 
            key={`user-${startIndex + index}`}
            {...(user as UserCardProps)}
          />
        ));
      case 'dashboard':
        return paginatedData.map((dashboard, index) => (
          <DashboardCard 
            key={`dashboard-${startIndex + index}`}
            {...(dashboard as DashboardCardProps)}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <div className="cards-page">
      <div className="cards-page-header">
        <h1>Card Components Demo</h1>
        <p>Showcase of all card types with pagination</p>
      </div>

      <div className="card-type-tabs">
        <button
          className={`tab-button ${currentCardType === 'matches' ? 'active' : ''}`}
          onClick={() => handleCardTypeChange('matches')}
        >
          Match Cards ({mockMatches.length})
        </button>
        <button
          className={`tab-button ${currentCardType === 'teams' ? 'active' : ''}`}
          onClick={() => handleCardTypeChange('teams')}
        >
          Team Cards ({mockTeams.length})
        </button>
        <button
          className={`tab-button ${currentCardType === 'users' ? 'active' : ''}`}
          onClick={() => handleCardTypeChange('users')}
        >
          User Cards ({mockUsers.length})
        </button>
        <button
          className={`tab-button ${currentCardType === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleCardTypeChange('dashboard')}
        >
          Dashboard Cards ({mockDashboard.length})
        </button>
      </div>

      <div className="cards-grid">
        {renderCards()}
      </div>

      {totalPages > 1 && (
        <div className="cards-pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      <div className="cards-info">
        <h3>Features:</h3>
        <ul>
          <li><strong>Match Cards:</strong> Live score updates, team flags, timing</li>
          <li><strong>Team Cards:</strong> Team logos, descriptions, branding</li>
          <li><strong>User Cards:</strong> Credit card display, privacy controls</li>
          <li><strong>Dashboard Cards:</strong> Progress indicators, status colors</li>
          <li><strong>Pagination:</strong> Navigate through large datasets</li>
          <li><strong>Responsive:</strong> Mobile and desktop optimized</li>
        </ul>
      </div>
    </div>
  );
};

export default CardsPage;
