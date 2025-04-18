"use client"

import React from 'react';

interface Segment {
  label: string;
  percentage: number;
  value: number;
  color: 'blue' | 'green' | 'orange';
}

interface PercentageBarProps {
  segments: Segment[];
}

const PercentageBar: React.FC<PercentageBarProps> = ({ segments }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center">
                <div className={`w-1.5 h-1.5 ${colorClasses[segment.color]} rounded-full mr-1`} />
                <span className="text-xs font-medium text-gray-500">{segment.label}</span>
              </div>
              <span className="text-sm font-bold mt-2">NPR {segment.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden flex">
        {segments.map((segment, index) => (
          <div 
            key={index}
            className={`h-full ${colorClasses[segment.color]} transition-all duration-500 ease-out`}
            style={{ width: `${segment.percentage}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default PercentageBar; 