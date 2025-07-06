import React from "react";
import { useHover } from "../../hooks";
import { Card } from "../ui";

export const HoverHighlight: React.FC = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <Card title="Exercise 4: Hover Highlight">
      <div className="space-y-4">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`
            p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer text-center
            ${
              isHovered
                ? "bg-yellow-200 border-yellow-400 transform scale-105"
                : "bg-white border-gray-300"
            }
          `}
        >
          <p className="text-gray-700 font-medium">
            {isHovered ? "🎉 Hovering!" : "👋 Hover me!"}
          </p>
        </div>
        <p className="text-center text-sm text-gray-500">
          Status: {isHovered ? "Hovered" : "Not hovered"}
        </p>
      </div>
    </Card>
  );
};
