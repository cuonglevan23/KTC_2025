// Search API simulation
export const searchApi = {
  search: async (query: string, page: number = 1, type: string = 'all'): Promise<{
    results: Array<{
      id: string;
      title: string;
      description: string;
      url: string;
      type: 'web' | 'crypto' | 'general';
    }>;
    totalPages: number;
    totalItems: number;
  }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock data
    const allResults = [
      {
        id: '1',
        title: 'React Documentation',
        description: 'A JavaScript library for building user interfaces',
        url: 'https://reactjs.org',
        type: 'web' as const
      },
      {
        id: '2',
        title: 'Bitcoin Price',
        description: 'Current Bitcoin price and market information',
        url: 'https://bitcoin.org',
        type: 'crypto' as const
      },
      {
        id: '3',
        title: 'TypeScript Handbook',
        description: 'Learn TypeScript with this comprehensive guide',
        url: 'https://typescriptlang.org',
        type: 'web' as const
      },
      {
        id: '4',
        title: 'Ethereum Smart Contracts',
        description: 'Build decentralized applications on Ethereum',
        url: 'https://ethereum.org',
        type: 'crypto' as const
      },
      {
        id: '5',
        title: 'Vite Build Tool',
        description: 'Next generation frontend tooling',
        url: 'https://vitejs.dev',
        type: 'web' as const
      },
      {
        id: '6',
        title: 'Solana Blockchain',
        description: 'High-performance blockchain for crypto apps',
        url: 'https://solana.com',
        type: 'crypto' as const
      }
    ];
    
    // Filter by type if specified
    let filteredResults = allResults;
    if (type !== 'all') {
      filteredResults = allResults.filter(item => item.type === type);
    }
    
    // Filter by query
    if (query) {
      filteredResults = filteredResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Pagination
    const itemsPerPage = 3;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const results = filteredResults.slice(startIndex, endIndex);
    
    return {
      results,
      totalPages: Math.ceil(filteredResults.length / itemsPerPage),
      totalItems: filteredResults.length
    };
  }
};
