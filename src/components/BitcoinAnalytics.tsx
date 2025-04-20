"use client"

import React from 'react';
import PercentageBar from './PercentageBar';
import { useTheme } from '@/context/ThemeContext';

const BitcoinAnalytics: React.FC = () => {
  const { theme } = useTheme();
  
  const cardBgColor = theme === 'dark' ? 'bg-[#2A2E39]' : 'bg-[#F8FAFD]';
  const textColor = theme === 'dark' ? 'text-[#D1D4DC]' : 'text-black-100';
  const secondaryTextColor = theme === 'dark' ? 'text-[#9598A1]' : 'text-gray-500';

  return (
    <div className={` px-6 pt-2`}>
      <h2 className={`text-lg font-semibold mb-4 ${textColor}`}>Nabil Bank Analytics</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Addresses by Holdings */}
        <div className={`${cardBgColor} p-4 rounded-lg`}>
          <h3 className={`text-sm ${textColor} mb-3`}>Previous 3 Days Close Price</h3>
          <PercentageBar 
            segments={[
              { label: "04-15", value: 479.73, percentage: 479.73, color: "blue" },
              { label: "04-16", value: 498.92, percentage: 498.92, color: "green" },
              { label: "04-17", value: 500.35, percentage: 500.35, color: "orange" },
            ]} 
          />
        </div>

        {/* Whale Holdings */}
        <div className={`${cardBgColor} p-4 rounded-lg`}>
          <h3 className={`text-sm ${textColor} mb-3`}>52 Week High / 52 Week Low</h3>
          <PercentageBar 
            segments={[
              { label: "High", percentage: 50, value: 700.00, color: "blue" },
              { label: "Low", percentage: 50, value: 419.00, color: "green" }
            ]} 
          />
        </div>

        {/* Addresses by Time Held */}
        <div className={`${cardBgColor} p-4 rounded-lg`}>
          <h3 className={`text-sm ${textColor} mb-3`}>Addresses by Time Held</h3>
          <PercentageBar 
            segments={[
              { label: "Cruisers", value: 21.49, percentage: 21.49, color: "blue" },
              { label: "Traders", value: 4.34, percentage: 4.34, color: "green" },
              { label: "Holders", value: 74.17, percentage: 74.17, color: "orange" }
            ]} 
          />
        </div>

        {/* Bitcoin Average Transaction Fees */}
        <div className={`${cardBgColor} p-4 rounded-lg`}>
          <h3 className={`text-sm ${textColor} mb-3`}>NBL Average Transaction Fees (30d)</h3>
          <div className="flex flex-col justify-between">
            <span className={`text-base font-bold ${textColor} mb-1`}>NPR 0.9754</span>
            <span className={`text-xs font-medium ${secondaryTextColor}`}>0.000012</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinAnalytics; 