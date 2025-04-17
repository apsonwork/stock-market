import React from 'react';

const PriceStats: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src="/bitcoin-logo.png"
            alt="Bitcoin"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">Bitcoin</h1>
            <p className="text-gray-500">BTC</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">$84,615.30</p>
          <p className="text-green-500">+0.39%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Market Cap</p>
          <p className="text-xl font-semibold">$1.67T</p>
          <p className="text-green-500 text-sm">+0.39%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Volume (24h)</p>
          <p className="text-xl font-semibold">$24.03B</p>
          <p className="text-green-500 text-sm">+10.44%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Circulating Supply</p>
          <p className="text-xl font-semibold">19.85M BTC</p>
          <p className="text-gray-500 text-sm">94.54%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-500">All Time High</p>
          <p className="text-xl font-semibold">$109,114.88</p>
          <p className="text-red-500 text-sm">-22.45%</p>
        </div>
      </div>
    </div>
  );
};

export default PriceStats;
