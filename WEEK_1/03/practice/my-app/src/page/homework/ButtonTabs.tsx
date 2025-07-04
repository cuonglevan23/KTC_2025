import React, { useState } from 'react';

const ButtonTabs = () => {
  const [activeTopTab, setActiveTopTab] = useState('METHOD');
  const [activeBottomTab, setActiveBottomTab] = useState('CULTURE');

  const tabs = [
    { id: 'HISTORY', label: 'HISTORY' },
    { id: 'APPROACH', label: 'APPROACH' },
    { id: 'CULTURE', label: 'CULTURE' },
    { id: 'METHOD', label: 'METHOD' }
  ];

  const topTabContent = {
    HISTORY: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
    APPROACH: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    CULTURE: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    METHOD: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
  };

  const bottomTabContent = {
    HISTORY: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    APPROACH: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    CULTURE: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.',
    METHOD: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-8">Button Tabs</h2>
      
      {/* First Tab Section */}
      <div className="mb-16">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTopTab(tab.id)}
              className={`px-8 py-3 text-sm font-medium transition-colors ${
                activeTopTab === tab.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-center px-4">
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-base">
            {topTabContent[activeTopTab as keyof typeof topTabContent]}
          </p>
        </div>
      </div>

      {/* Second Tab Section */}
      <div>
        {/* Tab Buttons with underline style */}
        <div className="flex justify-center mb-8">
          <div className="flex border-b-2 border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveBottomTab(tab.id)}
                className={`px-8 py-3 text-sm font-medium transition-colors relative ${
                  activeBottomTab === tab.id
                    ? 'text-green-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeBottomTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="text-center px-4">
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-base">
            {bottomTabContent[activeBottomTab as keyof typeof bottomTabContent]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ButtonTabs;