export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description?: string;
  unit?: string;
  inStock: boolean;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  productCount?: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: string;
}

export interface SearchResult {
  products: Product[];
  categories: Category[];
  total: number;
  page: number;
  limit: number;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  statusCode: number;
}

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'rating' | 'newest';
  search?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LayoutProps extends ComponentProps {
  title?: string;
  description?: string;
}
