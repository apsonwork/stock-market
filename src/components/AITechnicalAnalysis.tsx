"use client"

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const AITechnicalAnalysis: React.FC = () => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-[#1E222D]' : 'bg-[#F8FAFD]';
  const textColor = theme === 'dark' ? 'text-[#D1D4DC]' : 'text-gray-900';
  const secondaryTextColor = theme === 'dark' ? 'text-[#9598A1]' : 'text-gray-500';
  const borderColor = theme === 'dark' ? 'border-[#2A2E39]' : 'border-gray-200';

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} h-full flex flex-col`}>
      <div className={`flex items-center gap-2 p-4 border-b ${borderColor}`}>
        <div className={`w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-[#2962FF]' : 'bg-blue-500'} flex items-center justify-center`}>
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <div>
          <h3 className={`text-sm font-semibold ${textColor}`}>AI Technical Analysis</h3>
          <p className={`text-11 ${secondaryTextColor}`}>Get detailed market analysis.</p>
        </div>
      </div>
      <div className="p-4 overflow-y-auto h-[121px] scrollbar-light">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>Current Trend</span>
            <span className={`text-11 font-semibold ${textColor}`}>Bullish</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>Support Level</span>
            <span className={`text-11 font-semibold ${textColor}`}>2,450</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>Resistance Level</span>
            <span className={`text-11 font-semibold ${textColor}`}>2,650</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>RSI</span>
            <span className={`text-11 font-semibold ${textColor}`}>65</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>MACD</span>
            <span className={`text-11 font-semibold ${textColor}`}>Positive</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>Volume</span>
            <span className={`text-11 font-semibold ${textColor}`}>High</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>Moving Average</span>
            <span className={`text-11 font-semibold ${textColor}`}>2,550</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>Volatility</span>
            <span className={`text-11 font-semibold ${textColor}`}>Medium</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-11 ${secondaryTextColor}`}>Market Sentiment</span>
            <span className={`text-11 font-semibold ${textColor}`}>Positive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITechnicalAnalysis; 