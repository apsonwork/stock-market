"use client"

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const PriceStats: React.FC = () => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-[#131722]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-[#D1D4DC]' : 'text-gray-900';
  const secondaryTextColor = theme === 'dark' ? 'text-[#9598A1]' : 'text-gray-500';
  const borderColor = theme === 'dark' ? 'border-[#2A2E39]' : 'border-gray-200';
  const positiveColor = theme === 'dark' ? 'text-green-400' : 'text-green-600';

  return (
    <div className={`${bgColor} p-4 rounded-lg border ${borderColor}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-7 h-7">
          <Image
            src="/images/logo.jpeg"
            alt="Nabil Bank"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className={`${textColor} font-semibold`}>Nabil Bank</h2>
          <p className={`${secondaryTextColor} text-sm`}>NBL</p>
        </div>
      </div>
      <div className='flex items-center mt-3'>
        <p className={`text-32 font-bold ${textColor}`}>NPR 493.20</p> &nbsp;&nbsp;
        <p className={`text-xs ${positiveColor} tracking-wide`}>+0.39%</p>
      </div>
      <div className='mb-5'>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className={`px-1 py-2 border ${borderColor} rounded-lg`}>
            <p className={`${secondaryTextColor} text-11 font-normal text-center mb-1`}>Market Price</p>
            <div className='flex items-center justify-center gap-1'>
              <p className={`text-sm font-semibold ${textColor}`}>NPR 493.20</p>
              <p className={`${positiveColor} text-11`}>+0.39%</p>
            </div>
          </div>
          <div className={`px-1 py-2 border ${borderColor} rounded-lg`}>
            <p className={`${secondaryTextColor} text-11 font-normal text-center mb-1`}>Volume (24h)</p>
            <div className='flex items-center justify-center gap-1'>
              <p className={`text-sm font-semibold ${textColor}`}>54,656 kitta</p>
              <p className={`${positiveColor} text-11`}>+10.44%</p>
            </div>
          </div>
        </div>
        <div className={`px-1 py-2 border ${borderColor} rounded-lg`}>
          <p className={`${secondaryTextColor} text-11 font-normal text-center mb-1`}>Market Capitalization</p>
          <div className='flex items-center justify-center gap-1'>
            <p className={`text-sm font-semibold ${textColor}`}>NPR 133,764,388,689.92</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceStats;
