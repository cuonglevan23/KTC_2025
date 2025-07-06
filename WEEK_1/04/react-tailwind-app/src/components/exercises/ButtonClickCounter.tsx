import React from "react";
import { useCounter } from "../../hooks";
import { Button, Card } from "../ui";

export const ButtonClickCounter: React.FC = () => {
  const { count, increment, reset } = useCounter(0);

  return (
    <Card title="Exercise 1: Button Click Counter">
      <div className="space-y-4">
        <Button onClick={increment} className="w-full">
          Click Me
        </Button>
        <p className="text-center text-gray-700">
          Clicked:{" "}
          <span className="font-semibold text-blue-600">{count} times</span>
        </p>
        {count > 0 && (
          <Button
            onClick={reset}
            variant="secondary"
            size="sm"
            className="w-full"
          >
            Reset
          </Button>
        )}
      </div>
    </Card>
  );
};
