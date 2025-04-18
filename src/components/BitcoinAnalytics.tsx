"use client"

import React from 'react';
import PercentageBar from './PercentageBar';

const BitcoinAnalytics: React.FC = () => {
  return (
    <div className="bg-white px-6 pt-2 ">
      <h2 className="text-xl font-semibold mb-4">Nabil Bank Analytics</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Addresses by Holdings */}
        <div className="bg-[#F8FAFD] p-4 rounded-lg">
          <h3 className="text-sm  text-black-100 mb-3">Previous 3 Days Close Price</h3>
          <PercentageBar 
            segments={[
              { label: "2025-04-15", value: 479.73, percentage: 479.73, color: "blue" },
              { label: "2025-04-16", value: 498.92, percentage: 498.92, color: "green" },
              { label: "2025-04-17", value: 500.35, percentage: 500.35, color: "orange" },
            ]} 
          />
        </div>

        {/* Whale Holdings */}
        <div className="bg-[#F8FAFD] p-4 rounded-lg">
          <h3 className="text-sm  text-black-100 mb-3">52 Week High / 52 Week Low</h3>
          <PercentageBar 
            segments={[
              { label: "High", percentage: 50, value: 700.00, color: "blue" },
              { label: "Low", percentage: 50, value: 419.00, color: "green" }
            ]} 
          />
        </div>

        {/* Addresses by Time Held */}
        <div className="bg-[#F8FAFD] p-4 rounded-lg">
          <h3 className="text-sm  text-black-100 mb-3">Addresses by Time Held</h3>
          <PercentageBar 
            segments={[
              { label: "Cruisers", value: 21.49, percentage: 21.49, color: "blue" },
              { label: "Traders", value: 4.34, percentage: 4.34, color: "green" },
              { label: "Holders", value: 74.17, percentage: 74.17, color: "orange" }
            ]} 
          />
        </div>

        {/* Bitcoin Average Transaction Fees */}
        <div className="bg-[#F8FAFD] p-4 rounded-lg">
          <h3 className="text-sm  text-black-100 mb-3">Bitcoin Average Transaction Fees (30d)</h3>
          <div className="flex flex-col justify-between ">
            <span className="text-base font-bold text-black-100 mb-1">$0.9754</span>
            <span className="text-xs font-medium text-gray-500">0.000012 BTC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinAnalytics; 