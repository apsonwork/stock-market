import React from 'react';

const Chart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Bitcoin to USD Chart</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">1D</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">1W</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">1M</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">1Y</button>
        </div>
      </div>
      
      <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Chart will be displayed here</p>
      </div>
      
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-500">24h Low</p>
          <p className="font-semibold">$83,314.85</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-500">24h High</p>
          <p className="font-semibold">$85,428.28</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-500">24h Change</p>
          <p className="font-semibold text-green-500">+0.39%</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-500">24h Volume</p>
          <p className="font-semibold">$24.03B</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
