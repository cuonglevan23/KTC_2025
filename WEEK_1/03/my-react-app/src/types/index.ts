export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  icon?: React.ReactNode;
  type?: 'text' | 'search' | 'tel';
  variant?: 'default' | 'crypto' | 'web' | 'phone';
  disabled?: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url?: string;
  type: 'web' | 'crypto' | 'general';
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AppState {
  user: User | null;
  isLoading: boolean;
  searchResults: SearchResult[];
  currentPage: number;
  totalPages: number;
}

// Export card types
export * from './cards';
