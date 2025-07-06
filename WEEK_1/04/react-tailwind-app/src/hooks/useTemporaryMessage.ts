import { useState, useCallback, useEffect } from 'react';

/**
 * Hook để quản lý temporary message với auto-hide
 */
export const useTemporaryMessage = (duration: number = 2000) => {
  const [message, setMessage] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  const showMessage = useCallback((text: string) => {
    setMessage(text);
    setIsVisible(true);
  }, []);

  const hideMessage = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setMessage(''), 300); // Delay to allow fade-out animation
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideMessage();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, hideMessage]);

  return {
    message,
    isVisible,
    showMessage,
    hideMessage
  };
};
