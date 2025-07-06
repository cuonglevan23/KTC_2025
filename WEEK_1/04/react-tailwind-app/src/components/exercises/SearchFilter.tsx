import React from "react";
import { useSearch } from "../../hooks";
import { Input, Card } from "../ui";

const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

export const SearchFilter: React.FC = () => {
  const {
    searchTerm,
    filteredItems,
    handleSearchChange,
    reset,
    hasResults,
    resultCount,
  } = useSearch(items);

  return (
    <Card title="Exercise 10: Search Filter">
      <div className="space-y-4">
        <div className="relative">
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search fruits..."
            label="Search"
          />
          {searchTerm && (
            <button
              onClick={reset}
              className="absolute right-2 top-8 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        <div className="text-sm text-gray-600">
          {searchTerm ? (
            <span>
              Found {resultCount} result{resultCount !== 1 ? "s" : ""}
              {searchTerm && ` for "${searchTerm}"`}
            </span>
          ) : (
            <span>Showing all {items.length} items</span>
          )}
        </div>

        <div className="max-h-40 overflow-y-auto">
          {hasResults ? (
            <ul className="space-y-2">
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-50 rounded border hover:bg-gray-100 transition-colors"
                >
                  {searchTerm ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.replace(
                          new RegExp(`(${searchTerm})`, "gi"),
                          '<mark class="bg-yellow-200">$1</mark>'
                        ),
                      }}
                    />
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-4 text-gray-500">
              <p>No fruits found matching "{searchTerm}"</p>
              <button
                onClick={reset}
                className="text-blue-600 hover:text-blue-800 underline text-sm mt-2"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
