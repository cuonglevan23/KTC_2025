// Types for News components
export interface NewsArticle {
  id: number;
  title: string;
  image: string;
  views: number;
  viewText: string;
}

export interface NewsGridProps {
  articles: NewsArticle[];
}
