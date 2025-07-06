import { useState, useCallback } from 'react';

/**
 * Hook để quản lý keyboard events
 */
export const useKeyboardTracker = () => {
  const [lastKey, setLastKey] = useState<string>('');

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    setLastKey(event.key);
  }, []);

  const reset = useCallback(() => {
    setLastKey('');
  }, []);

  return {
    lastKey,
    handleKeyDown,
    reset
  };
};
