import React from "react";
import { useInputField } from "../../hooks";
import { Input, Card } from "../ui";

export const InputFieldTracker: React.FC = () => {
  const { value, handleChange, reset } = useInputField("");

  return (
    <Card title="Exercise 2: Input Field Tracker">
      <div className="space-y-4">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Type something..."
          className="w-full"
        />
        <p className="text-center text-gray-700">
          You typed:{" "}
          <span className="font-semibold text-blue-600">
            {value || "nothing"}
          </span>
        </p>
        {value && (
          <button
            onClick={reset}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Clear
          </button>
        )}
      </div>
    </Card>
  );
};
