import React from 'react';

const PriceStats: React.FC = () => {
  return (
    <div className="bg-white px-4 pt-4">
      <div className="flex flex-col mb-4">
        <div className="flex items-center">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="w-6 h-6 mr-2"
          />
          <div className='flex items-center'>
            <h1 className="text-lg font-semibold pr-1">Nabil Bank</h1>
            <p className="text-xs font-normal text-gray-400">NBL</p>
          </div>
        </div>
        <div className='flex items-center mt-3'>
          <p className="text-32 font-bold">NPR 493.20</p> &nbsp;&nbsp;
          <p className="text-xs text-green-500 tracking-wide">+0.39%</p>
        </div>
      </div>
      <div className='mb-5'>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="px-1 py-2 border border-gray-200 rounded-lg">
          <p className="text-gray-500 text-11 font-normal text-center mb-1">Market Price</p>
          <div className='flex items-center justify-center gap-1'>
            <p className="text-sm font-semibold">NPR 493.20</p>
            <p className="text-green-500 text-11">+0.39%</p>
          </div>
        </div>
        <div className="px-1 py-2 border border-gray-200  rounded-lg">
          <p className="text-gray-500 text-11 font-normal text-center mb-1">Volume (24h)</p>
          <div className='flex items-center justify-center gap-1'>
            <p className="text-sm font-semibold">54,656 kitta</p>
            <p className="text-green-500 text-11">+10.44%</p>
          </div>
        </div>
      </div>
      <div className="px-1 py-2 border border-gray-200 rounded-lg">
          <p className="text-gray-500 text-11 font-normal text-center mb-1">Market Capitalization</p>
          <div className='flex items-center justify-center gap-1'>
            <p className="text-sm font-semibold">NPR 133,764,388,689.92</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default PriceStats;
