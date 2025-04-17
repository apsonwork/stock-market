"use client"

import React from 'react';
import PercentageBar from './PercentageBar';

const BitcoinAnalytics: React.FC = () => {
  return (
    <div className="bg-white px-6 pt-2 ">
      <h2 className="text-xl font-semibold mb-4">Bitcoin Analytics</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Addresses by Holdings */}
        <div className="bg-[#F8FAFD] p-4 rounded-lg">
          <h3 className="text-sm  text-black-100 mb-4">Addresses by Holdings</h3>
          <PercentageBar 
            segments={[
              { label: "$0 - $1k", percentage: 79.73, color: "blue" },
              { label: "$1k - $100k", percentage: 18.92, color: "green" },
              { label: "$100k+", percentage: 1.35, color: "orange" }
            ]} 
          />
        </div>

        {/* Whale Holdings */}
        <div className="bg-[#F8FAFD] p-4 rounded-lg">
          <h3 className="text-sm  text-black-100 mb-4">Whale Holdings</h3>
          <PercentageBar 
            segments={[
              { label: "Whales", percentage: 1.25, color: "blue" },
              { label: "Others", percentage: 98.75, color: "green" }
            ]} 
          />
        </div>

        {/* Addresses by Time Held */}
        <div className="bg-[#F8FAFD] p-4 rounded-lg">
          <h3 className="text-sm  text-black-100 mb-4">Addresses by Time Held</h3>
          <PercentageBar 
            segments={[
              { label: "Cruisers", percentage: 21.49, color: "blue" },
              { label: "Traders", percentage: 4.34, color: "green" },
              { label: "Holders", percentage: 74.17, color: "orange" }
            ]} 
          />
        </div>

        {/* Bitcoin Average Transaction Fees */}
        <div className="bg-[#F8FAFD] p-4 rounded-lg">
          <h3 className="text-sm  text-black-100 mb-4">Bitcoin Average Transaction Fees (30d)</h3>
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