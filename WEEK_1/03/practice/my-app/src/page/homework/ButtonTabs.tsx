import React, { useState } from 'react';

const ButtonTabs = () => {
  const [activeTab, setActiveTab] = useState('METHOD');

  const tabs = [
    { id: 'HISTORY', label: 'HISTORY' },
    { id: 'APPROACH', label: 'APPROACH' },
    { id: 'CULTURE', label: 'CULTURE' },
    { id: 'METHOD', label: 'METHOD' }
  ];

  const tabContent = {
    HISTORY: 'History content goes here...',
    APPROACH: 'Approach content goes here...',
    CULTURE: 'Culture content goes here...',
    METHOD: 'Method content goes here...'
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Button Tabs</h2>
      
      {/* Tab Buttons */}
      <div className="flex space-x-1 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-50 p-6 rounded-lg min-h-32">
        <p className="text-gray-700">
          {tabContent[activeTab as keyof typeof tabContent]}
        </p>
      </div>
    </div>
  );
};

export default ButtonTabs;