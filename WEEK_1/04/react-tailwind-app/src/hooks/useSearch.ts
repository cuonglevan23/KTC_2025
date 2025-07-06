import { useState, useCallback, useMemo } from 'react';

/**
 * Hook để quản lý search functionality
 */
export const useSearch = <T>(items: T[], searchKey?: keyof T) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;

    return items.filter(item => {
      const searchValue = searchKey 
        ? String(item[searchKey])
        : String(item);
      
      return searchValue.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [items, searchTerm, searchKey]);

  const reset = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    searchTerm,
    filteredItems,
    handleSearchChange,
    reset,
    hasResults: filteredItems.length > 0,
    resultCount: filteredItems.length
  };
};
