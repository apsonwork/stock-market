import React from 'react';

const MarketData: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Bitcoin Markets</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exchange</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pair</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume (24h)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Binance</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">BTC/USDT</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$84,649.62</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$8.2B</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Coinbase</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">BTC/USD</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$84,615.30</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$3.1B</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kraken</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">BTC/USD</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$84,620.15</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1.8B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketData;
