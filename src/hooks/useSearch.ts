import { useState, useMemo } from 'react';

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  category?: string;
}

export const useSearch = <T extends SearchableItem>(items: T[]) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;

    const lowercaseQuery = query.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      (item.category && item.category.toLowerCase().includes(lowercaseQuery))
    );
  }, [items, query]);

  const clearSearch = () => {
    setQuery('');
  };

  return {
    query,
    setQuery,
    isOpen,
    setIsOpen,
    filteredItems,
    clearSearch,
    hasResults: filteredItems.length > 0,
    isSearching: query.trim().length > 0
  };
};