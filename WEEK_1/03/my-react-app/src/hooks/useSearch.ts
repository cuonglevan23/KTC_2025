import { useState, useCallback } from 'react';
import type { SearchResult } from '../types';
import { searchApi } from '../services/api';

interface UseSearchResult {
  results: SearchResult[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  search: (query: string, type?: string) => Promise<void>;
  changePage: (page: number) => Promise<void>;
  clearResults: () => void;
}

export const useSearch = (): UseSearchResult => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [lastQuery, setLastQuery] = useState('');
  const [lastType, setLastType] = useState('all');

  const search = useCallback(async (query: string, type: string = 'all') => {
    setLoading(true);
    setError(null);
    setCurrentPage(1);
    setLastQuery(query);
    setLastType(type);

    try {
      const response = await searchApi.search(query, 1, type);
      setResults(response.results);
      setTotalPages(response.totalPages);
      setTotalItems(response.totalItems);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResults([]);
      setTotalPages(0);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  }, []);

  const changePage = useCallback(async (page: number) => {
    if (page === currentPage) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await searchApi.search(lastQuery, page, lastType);
      setResults(response.results);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [currentPage, lastQuery, lastType]);

  const clearResults = useCallback(() => {
    setResults([]);
    setCurrentPage(1);
    setTotalPages(0);
    setTotalItems(0);
    setError(null);
    setLastQuery('');
    setLastType('all');
  }, []);

  return {
    results,
    loading,
    error,
    currentPage,
    totalPages,
    totalItems,
    search,
    changePage,
    clearResults
  };
};
