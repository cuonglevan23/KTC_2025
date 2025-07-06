import React from "react";
import { useToggle } from "../../hooks";
import { Button, Card } from "../ui";

export const ToggleSwitch: React.FC = () => {
  const { isOn, toggle } = useToggle(false);

  return (
    <Card title="Exercise 3: Toggle Switch">
      <div className="space-y-4">
        <Button
          onClick={toggle}
          variant={isOn ? "danger" : "success"}
          className="w-full"
        >
          Turn {isOn ? "OFF" : "ON"}
        </Button>
        <p className="text-center text-gray-700">
          State:{" "}
          <span
            className={`font-semibold ${
              isOn ? "text-green-600" : "text-red-600"
            }`}
          >
            {isOn ? "ON" : "OFF"}
          </span>
        </p>
      </div>
    </Card>
  );
};
