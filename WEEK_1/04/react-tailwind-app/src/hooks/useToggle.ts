import { useState, useCallback } from 'react';

/**
 * Hook để quản lý toggle state
 */
export const useToggle = (initialValue: boolean = false) => {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsOn(prev => !prev);
  }, []);

  const turnOn = useCallback(() => {
    setIsOn(true);
  }, []);

  const turnOff = useCallback(() => {
    setIsOn(false);
  }, []);

  return {
    isOn,
    toggle,
    turnOn,
    turnOff
  };
};
