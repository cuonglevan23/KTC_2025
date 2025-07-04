import React, { useState } from 'react';

const ButtonAccordions = () => {
  // State for Single Accordions (only one can be open at a time)
  const [activeSingleAccordion, setActiveSingleAccordion] = useState<string | null>('APPROACH');

  // State for Multi Accordions (multiple can be open)
  const [activeMultiAccordions, setActiveMultiAccordions] = useState<string[]>(['HISTORY', 'APPROACH', 'METHOD']);

  const accordionItems = [
    {
      id: 'HISTORY',
      title: 'HISTORY',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.'
    },
    {
      id: 'APPROACH',
      title: 'APPROACH',
      content: 'Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      id: 'CULTURE',
      title: 'CULTURE',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
    },
    {
      id: 'METHOD',
      title: 'METHOD',
      content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    }
  ];

  const handleSingleAccordionClick = (id: string) => {
    setActiveSingleAccordion(activeSingleAccordion === id ? null : id);
  };

  const handleMultiAccordionClick = (id: string) => {
    if (activeMultiAccordions.includes(id)) {
      setActiveMultiAccordions(activeMultiAccordions.filter(item => item !== id));
    } else {
      setActiveMultiAccordions([...activeMultiAccordions, id]);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Button Accordions</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Single Accordions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Single Accordions</h3>
          <div className="space-y-2">
            {accordionItems.map((item) => (
              <div key={`single-${item.id}`} className="border border-gray-200 rounded-none">
                <button
                  onClick={() => handleSingleAccordionClick(item.id)}
                  className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                    activeSingleAccordion === item.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.title}
                </button>
                {activeSingleAccordion === item.id && (
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Multi Accordions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Multi Accordions</h3>
          <div className="space-y-2">
            {accordionItems.map((item) => (
              <div key={`multi-${item.id}`} className="border border-gray-200 rounded-none">
                <button
                  onClick={() => handleMultiAccordionClick(item.id)}
                  className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                    activeMultiAccordions.includes(item.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.title}
                </button>
                {activeMultiAccordions.includes(item.id) && (
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonAccordions;