import React, { useReducer } from "react";
import { calculatorReducer, initialState } from "../utils/calculatorLogic";
import type { CalculatorButtonProps } from "../types";
import styles from "./Calculator.module.css";

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  onClick,
  className = "",
  children,
  type = "number",
}) => {
  const getButtonClass = () => {
    switch (type) {
      case "operator":
        return styles.operatorButton;
      case "function":
        return styles.functionButton;
      default:
        return styles.numberButton;
    }
  };

  return (
    <button
      className={`${styles.button} ${getButtonClass()} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Calculator: React.FC = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleNumber = (number: string) => {
    dispatch({ type: "INPUT_NUMBER", payload: number });
  };

  const handleOperator = (operator: string) => {
    dispatch({ type: "INPUT_OPERATOR", payload: operator });
  };

  const handleDecimal = () => {
    dispatch({ type: "INPUT_DECIMAL" });
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE" });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{state.display}</div>

      <div className={styles.buttonGrid}>
        {/* Row 1 */}
        <CalculatorButton onClick={() => handleNumber("7")}>7</CalculatorButton>
        <CalculatorButton onClick={() => handleNumber("8")}>8</CalculatorButton>
        <CalculatorButton onClick={() => handleNumber("9")}>9</CalculatorButton>
        <CalculatorButton onClick={() => handleOperator("÷")} type="operator">
          ÷
        </CalculatorButton>

        {/* Row 2 */}
        <CalculatorButton onClick={() => handleNumber("4")}>4</CalculatorButton>
        <CalculatorButton onClick={() => handleNumber("5")}>5</CalculatorButton>
        <CalculatorButton onClick={() => handleNumber("6")}>6</CalculatorButton>
        <CalculatorButton onClick={() => handleOperator("×")} type="operator">
          ×
        </CalculatorButton>

        {/* Row 3 */}
        <CalculatorButton onClick={() => handleNumber("1")}>1</CalculatorButton>
        <CalculatorButton onClick={() => handleNumber("2")}>2</CalculatorButton>
        <CalculatorButton onClick={() => handleNumber("3")}>3</CalculatorButton>
        <CalculatorButton onClick={() => handleOperator("-")} type="operator">
          -
        </CalculatorButton>

        {/* Row 4 */}
        <CalculatorButton onClick={() => handleNumber("0")}>0</CalculatorButton>
        <CalculatorButton onClick={handleDecimal}>.</CalculatorButton>
        <CalculatorButton onClick={handleClear} type="function">
          C
        </CalculatorButton>
        <CalculatorButton onClick={() => handleOperator("+")} type="operator">
          +
        </CalculatorButton>

        {/* Row 5 */}
        <CalculatorButton
          onClick={handleCalculate}
          type="function"
          className={styles.equalsButton}
        >
          =
        </CalculatorButton>
      </div>
    </div>
  );
};
