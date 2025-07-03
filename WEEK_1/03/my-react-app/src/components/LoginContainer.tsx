import React from 'react';
import './LoginContainer.css';

interface LoginButtonProps {
  icon?: React.ReactNode;
  text: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ 
  icon, 
  text, 
  variant = 'secondary', 
  onClick 
}) => {
  return (
    <button 
      className={`login-button ${variant}`}
      onClick={onClick}
    >
      {icon && <span className="login-button-icon">{icon}</span>}
      <span className="login-button-text">{text}</span>
      {variant === 'primary' && <span className="login-button-arrow">→</span>}
    </button>
  );
};

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LoginContainer: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  const handleAppleLogin = () => {
    console.log('Continue with Apple clicked');
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Continue with Facebook clicked');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="mobile-indicator">
            <div className="signal-bars"></div>
            <div className="time">9:41</div>
            <div className="battery"></div>
          </div>
        </div>
        
        <div className="login-content">
          <div className="login-title">Welcome</div>
          <div className="login-subtitle">
            Sign in to your account or create a new one to get started
          </div>
          
          <div className="login-buttons">
            <LoginButton 
              text="Get started" 
              variant="primary"
              onClick={handleGetStarted}
            />
            
            <LoginButton 
              icon={<AppleIcon />}
              text="Continue with Apple" 
              variant="primary"
              onClick={handleAppleLogin}
            />
            
            <LoginButton 
              icon={<GoogleIcon />}
              text="Continue with Google" 
              onClick={handleGoogleLogin}
            />
            
            <LoginButton 
              icon={<FacebookIcon />}
              text="Continue with Facebook" 
              onClick={handleFacebookLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
