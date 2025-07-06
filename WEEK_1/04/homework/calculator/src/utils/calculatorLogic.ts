import type { CalculatorState, CalculatorAction } from '../types';

export const initialState: CalculatorState = {
  currentValue: '0',
  previousValue: '',
  operation: null,
  waitingForOperand: false,
  display: '0'
};

export const calculatorReducer = (state: CalculatorState, action: CalculatorAction): CalculatorState => {
  switch (action.type) {
    case 'INPUT_NUMBER': {
      const { payload } = action;
      
      if (state.waitingForOperand) {
        return {
          ...state,
          currentValue: payload,
          waitingForOperand: false,
          display: payload
        };
      }
      
      const newValue = state.currentValue === '0' ? payload : state.currentValue + payload;
      return {
        ...state,
        currentValue: newValue,
        display: newValue
      };
    }
    
    case 'INPUT_DECIMAL': {
      if (state.waitingForOperand) {
        return {
          ...state,
          currentValue: '0.',
          waitingForOperand: false,
          display: '0.'
        };
      }
      
      if (state.currentValue.includes('.')) {
        return state;
      }
      
      const newValue = state.currentValue + '.';
      return {
        ...state,
        currentValue: newValue,
        display: newValue
      };
    }
    
    case 'INPUT_OPERATOR': {
      const { payload } = action;
      
      if (state.previousValue === '') {
        return {
          ...state,
          operation: payload,
          previousValue: state.currentValue,
          waitingForOperand: true
        };
      }
      
      if (state.waitingForOperand) {
        return {
          ...state,
          operation: payload
        };
      }
      
      const result = calculate(state.previousValue, state.currentValue, state.operation);
      
      return {
        ...state,
        currentValue: result,
        previousValue: result,
        operation: payload,
        waitingForOperand: true,
        display: result
      };
    }
    
    case 'CALCULATE': {
      if (state.operation === null || state.waitingForOperand) {
        return state;
      }
      
      const result = calculate(state.previousValue, state.currentValue, state.operation);
      
      return {
        ...state,
        currentValue: result,
        previousValue: '',
        operation: null,
        waitingForOperand: true,
        display: result
      };
    }
    
    case 'CLEAR': {
      return initialState;
    }
    
    default:
      return state;
  }
};

const calculate = (firstOperand: string, secondOperand: string, operation: string | null): string => {
  const first = parseFloat(firstOperand);
  const second = parseFloat(secondOperand);
  
  if (isNaN(first) || isNaN(second)) return '0';
  
  switch (operation) {
    case '+':
      return String(first + second);
    case '-':
      return String(first - second);
    case '×':
      return String(first * second);
    case '÷':
      if (second === 0) return 'Error';
      return String(first / second);
    default:
      return secondOperand;
  }
};
