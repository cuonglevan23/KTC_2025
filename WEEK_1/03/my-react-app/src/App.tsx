import { useState } from 'react';
import { SearchPage, CardsPage } from './pages';
import LoginContainer from './components/LoginContainer';
import './App.css';

function App() {
  const [showDemo, setShowDemo] = useState(false);
  const [currentView, setCurrentView] = useState<'login' | 'search' | 'cards'>('search');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login': return <LoginContainer />;
      case 'search': return <SearchPage />;
      case 'cards': return <CardsPage />;
      default: return <SearchPage />;
    }
  };

  const getNextView = () => {
    switch (currentView) {
      case 'login': return 'search';
      case 'search': return 'cards';
      case 'cards': return 'login';
      default: return 'search';
    }
  };

  const getViewLabel = () => {
    switch (getNextView()) {
      case 'login': return 'Login';
      case 'search': return 'Search';
      case 'cards': return 'Cards';
      default: return 'Search';
    }
  };

  return (
    <>
      {renderCurrentView()}
      
      {/* Demo responsive controls */}
      <div className="demo-controls">
        <button 
          className="demo-button"
          onClick={() => setCurrentView(getNextView())}
        >
          Switch to {getViewLabel()} Page
        </button>
        
        <button 
          className="demo-button"
          onClick={() => setShowDemo(!showDemo)}
        >
          {showDemo ? 'Hide' : 'Show'} Info
        </button>
        
        {showDemo && (
          <div className="demo-info">
            <h3>Project Structure:</h3>
            <ul>
              <li><strong>LoginContainer:</strong> Social auth buttons, responsive design</li>
              <li><strong>SearchInput:</strong> Multiple variants (default, web, crypto, phone)</li>
              <li><strong>Card Components:</strong> Match, Team, User, Dashboard cards</li>
              <li><strong>Pagination:</strong> Full-featured with responsive design</li>
              <li><strong>SearchResults:</strong> Card-based layout with type indicators</li>
              <li><strong>TypeScript:</strong> Full type safety throughout</li>
              <li><strong>Responsive:</strong> Mobile-first design</li>
            </ul>
            <p><strong>Current View:</strong> {currentView.charAt(0).toUpperCase() + currentView.slice(1)} Page</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App
