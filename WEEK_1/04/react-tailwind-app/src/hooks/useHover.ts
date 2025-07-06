import { useState, useCallback } from 'react';

/**
 * Hook để quản lý hover state
 */
export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  };
};
