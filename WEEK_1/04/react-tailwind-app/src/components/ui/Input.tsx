import React from "react";
import type { ChangeEventHandler, KeyboardEventHandler } from "../../types";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: KeyboardEventHandler;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  error?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  type = "text",
  error,
  label,
  required = false,
  disabled = false,
  className = "",
}) => {
  const handleChange: ChangeEventHandler = (event) => {
    onChange(event.target.value);
  };

  const baseClasses =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200";
  const errorClasses = error
    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed"
    : "bg-white";

  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`${baseClasses} ${errorClasses} ${disabledClasses}`}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};
