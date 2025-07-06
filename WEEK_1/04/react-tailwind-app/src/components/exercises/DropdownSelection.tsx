import React, { useState } from "react";
import { Select, Card } from "../ui";
import type { SelectOption } from "../../types";

const fruitOptions: SelectOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
];

export const DropdownSelection: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = useState<string>("");

  const selectedOption = fruitOptions.find(
    (option) => option.value === selectedFruit
  );

  return (
    <Card title="Exercise 8: Dropdown Selection">
      <div className="space-y-4">
        <Select
          value={selectedFruit}
          onChange={setSelectedFruit}
          options={fruitOptions}
          placeholder="Choose a fruit..."
          label="Select your favorite fruit"
        />
        <p className="text-center text-gray-700">
          Selected fruit:{" "}
          <span className="font-semibold text-blue-600">
            {selectedOption?.label || "None"}
          </span>
        </p>
        {selectedFruit && (
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {selectedOption?.label}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};
