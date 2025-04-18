"use client"

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme } = useTheme();
  
  const textColor = theme === 'dark' ? 'text-[#D1D4DC]' : 'text-gray-500';
  const secondaryTextColor = theme === 'dark' ? 'text-[#9598A1]' : 'text-gray-500';
  const progressBgColor = theme === 'dark' ? 'bg-[#2A2E39]' : 'bg-gray-100';

  const colorClasses = {
    blue: theme === 'dark' ? 'bg-[#2962FF]' : 'bg-blue-500',
    green: theme === 'dark' ? 'bg-[#26A69A]' : 'bg-green-500',
    orange: theme === 'dark' ? 'bg-[#FF9800]' : 'bg-orange-500'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center">
                <div className={`w-1.5 h-1.5 ${colorClasses[segment.color]} rounded-full mr-1`} />
                <span className={`text-xs font-medium ${secondaryTextColor}`}>{segment.label}</span>
              </div>
              <span className={`text-xs font-bold mt-2 ${textColor}`}>NPR {segment.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`h-1 ${progressBgColor} rounded-full overflow-hidden flex`}>
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