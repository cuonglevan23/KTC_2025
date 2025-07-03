export interface MatchCardProps {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  flagA?: string;
  flagB?: string;
  isLive?: boolean;
  time?: string;
}

export interface TeamCardProps {
  teamName: string;
  logo?: string;
  description?: string;
}

export interface UserCardProps {
  name: string;
  avatar?: string;
  cardNumber?: string;
  cardType?: 'visa' | 'mastercard';
  isHidden?: boolean;
}

export interface DashboardCardProps {
  title: string;
  subtitle?: string;
  progress?: number;
  status?: 'highlight' | 'feeds' | 'default';
  value?: string | number;
}

export interface CardProps {
  variant: 'match' | 'team' | 'user' | 'dashboard';
  data: MatchCardProps | TeamCardProps | UserCardProps | DashboardCardProps;
  onClick?: () => void;
}
