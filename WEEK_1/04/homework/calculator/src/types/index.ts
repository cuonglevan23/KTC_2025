export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: string | null;
  waitingForOperand: boolean;
  display: string;
}

export type CalculatorAction = 
  | { type: 'INPUT_NUMBER'; payload: string }
  | { type: 'INPUT_OPERATOR'; payload: string }
  | { type: 'CALCULATE' }
  | { type: 'CLEAR' }
  | { type: 'INPUT_DECIMAL' };

export interface CalculatorButtonProps {
  onClick: () => void;
  className?: string;
  children: string | number;
  type?: 'number' | 'operator' | 'function';
}
