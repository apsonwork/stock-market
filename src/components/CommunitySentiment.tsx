"use client"

import React from 'react';

const CommunitySentiment: React.FC = () => {
  const bullishPercentage = 81;
  const bearishPercentage = 19;
  const totalVotes = 3.7;

  return (
    <div className="bg-white px-4 pt-4 pb-4 border-b border-gray-200">
        <div className='flex items-center mb-3 gap-2'>
      <h2 className="text-xs font-semibold text-gray-900 ">Community Sentiment</h2>
      <span className='text-11 font-normal text-gray-500'>{totalVotes}M votes</span>
        </div>
      
      <div className="mb-2">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>{bullishPercentage}% Bullish</span>
        </div>
        
        {/* Progress bar container */}
        <div className="h-2 bg-red-500 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${bullishPercentage}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
          <span className="text-xs font-medium text-gray-900">Bullish</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
          <span className="text-xs font-medium text-gray-900">Bearish</span>
        </div>
      </div>
    </div>
  );
};

export default CommunitySentiment; 