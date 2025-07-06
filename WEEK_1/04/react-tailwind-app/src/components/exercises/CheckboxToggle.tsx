import React from "react";
import { useToggle } from "../../hooks";
import { Checkbox, Card } from "../ui";

export const CheckboxToggle: React.FC = () => {
  const { isOn: isChecked, toggle } = useToggle(false);

  return (
    <Card title="Exercise 9: Checkbox Toggle">
      <div className="space-y-4">
        <div className="flex justify-center">
          <Checkbox checked={isChecked} onChange={toggle} label="Toggle me" />
        </div>
        <p className="text-center text-gray-700">
          Checkbox is:{" "}
          <span
            className={`font-semibold ${
              isChecked ? "text-green-600" : "text-red-600"
            }`}
          >
            {isChecked ? "checked" : "unchecked"}
          </span>
        </p>
        <div className="text-center">
          <span
            className={`
            inline-block px-3 py-1 rounded-full text-sm
            ${
              isChecked
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }
          `}
          >
            {isChecked ? "✓ Enabled" : "✗ Disabled"}
          </span>
        </div>
      </div>
    </Card>
  );
};
