import { useState, useCallback } from 'react';

/**
 * Hook để quản lý input field với validation
 */
export const useInputField = (initialValue: string = '', validator?: (value: string) => boolean) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string>('');

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
    
    if (validator && !validator(newValue)) {
      setError('Invalid input');
    } else {
      setError('');
    }
  }, [validator]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError('');
  }, [initialValue]);

  const isValid = !error && (validator ? validator(value) : true);

  return {
    value,
    error,
    isValid,
    handleChange,
    reset,
    setValue
  };
};
