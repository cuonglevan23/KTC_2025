import React from "react";
import { useTemporaryMessage } from "../../hooks";
import { Button, Card } from "../ui";

export const DoubleClickMessage: React.FC = () => {
  const { message, isVisible, showMessage } = useTemporaryMessage(2000);

  const handleDoubleClick = () => {
    showMessage("Double-clicked!");
  };

  return (
    <Card title="Exercise 7: Double Click Message">
      <div className="space-y-4">
        <Button onDoubleClick={handleDoubleClick} className="w-full">
          Double-click me!
        </Button>
        <div className="text-center min-h-[24px]">
          {isVisible && (
            <p
              className={`
              text-green-600 font-semibold transition-opacity duration-300
              ${isVisible ? "opacity-100" : "opacity-0"}
            `}
            >
              {message}
            </p>
          )}
        </div>
        <p className="text-xs text-gray-500 text-center">
          Message will disappear after 2 seconds
        </p>
      </div>
    </Card>
  );
};
