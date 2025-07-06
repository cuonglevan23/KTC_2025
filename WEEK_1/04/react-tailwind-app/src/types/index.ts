// Common types used across the application
export interface SelectOption {
  value: string;
  label: string;
}

export interface FormData {
  [key: string]: string | number | boolean;
}

export type KeyboardEventHandler = (event: React.KeyboardEvent<HTMLInputElement>) => void;
export type ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type SubmitEventHandler = (event: React.FormEvent<HTMLFormElement>) => void;
export type ClickEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
