import React from "react";
import { useInputField, useKeyboardTracker } from "../../hooks";
import { Input, Card } from "../ui";

export const KeyPressDisplay: React.FC = () => {
  const { value, handleChange } = useInputField("");
  const { lastKey, handleKeyDown } = useKeyboardTracker();

  return (
    <Card title="Exercise 6: Key Press Display">
      <div className="space-y-4">
        <Input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type and press keys..."
        />
        <p className="text-center text-gray-700">
          Last key:{" "}
          <span className="font-mono font-semibold text-blue-600">
            {lastKey || "None"}
          </span>
        </p>
        {lastKey && (
          <div className="text-xs text-gray-500 text-center">
            Key code: {lastKey}
          </div>
        )}
      </div>
    </Card>
  );
};
