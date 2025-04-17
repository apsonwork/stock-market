"use client"

import React, { useState } from 'react';

const NewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'top' | 'latest'>('top');

  return (
    <div className="bg-white p-4">
      {/* Tab Navigation */}
      <div className="relative flex mb-4 bg-[#EFF2F5] rounded-lg p-1">
        <button
          onClick={() => setActiveTab('top')}
          className={`relative flex-1 py-2 text-sm text-xs transition-colors duration-300 rounded-md z-10 ${
            activeTab === 'top' ? 'text-gray-900' : 'text-gray-500 font-medium'
          }`}
        >
          Top
        </button>
        <button
          onClick={() => setActiveTab('latest')}
          className={`relative flex-1 py-2 text-sm text-xs transition-colors duration-300 rounded-md z-10 ${
            activeTab === 'latest' ? 'text-gray-900' : 'text-gray-500 font-medium'
          }`}
        >
          Latest
        </button>
        {/* Sliding background */}
        <div
          className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-md transition-all duration-300 ease-in-out ${
            activeTab === 'top' ? 'left-1' : 'left-[calc(50%+2px)]'
          }`}
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'top' ? (
          // Top News Content
          <div className="space-y-4">
            <div className=''>
            <div className="px-1 transition-colors border-b pb-3 border-border-light">
              <div className='flex items-center gap-2 mb-2'>
              <img className='w-6 h-6 rounded-full' src="https://s3.coinmarketcap.com/static-gravity/image/fba756c012164c6c9d23f93906d30875.jpg" alt="avatar frame"/>
              <p className='text-sm text-gray-500'>Ram Bahadhur Panday</p>
              <p className="text-11 font-normal text-gray-500">2 hours ago</p>
              </div>
              <h3 className="text-sm font-medium text-gray-900">🧠 3.7M votes — and 81% are bullish on BTC. <br/>

Sentiment is loud. <br/>

But remember: euphoria ≠ breakout. <br/>

Watch the $86K level </h3>
              <img className='w-full h-40 rounded-lg object-cover mt-2' src="https://s3.coinmarketcap.com/static-gravity/thumbnail/large/0e3aa5e1320442c8a1d982bde3247561.png" loading="lazy" decoding="async" alt="image"></img>
            </div>
            </div>
            <div className="px-1   transition-colors border-b pb-3 border-border-light">
              <div className='flex items-center gap-2 mb-2'>
              <img className='w-6 h-6 rounded-full' src="https://s3.coinmarketcap.com/static-gravity/image/fba756c012164c6c9d23f93906d30875.jpg" alt="avatar frame"/>
              <p className='text-sm text-gray-500'>Hari Singh</p>
              <p className="text-11 font-normal text-gray-500">2 hours ago</p>
              </div>
              <h3 className="text-sm font-medium text-gray-900">BTC train is moving, those who want to go to the moon, get on Ride on the DOGEMARS train👇👇 👇y gfh hgg</h3>
              <img className='w-full h-40 rounded-lg object-cover mt-2' src="https://s3.coinmarketcap.com/static-gravity/thumbnail/large/dc0f3aa391df44559830669c773fe45d.jpg" loading="lazy" decoding="async" alt="image"></img>
            </div>
          </div>
        ) : (
          // Latest News Content
          <div className="space-y-4">
                        <div className="px-1   transition-colors border-b pb-3 border-border-light">
              <div className='flex items-center gap-2 mb-2'>
              <img className='w-6 h-6 rounded-full' src="https://s3.coinmarketcap.com/static-gravity/image/fba756c012164c6c9d23f93906d30875.jpg" alt="avatar frame"/>
              <p className='text-sm text-gray-500'>Hari Singh</p>
              <p className="text-11 font-normal text-gray-500">2 hours ago</p>
              </div>
              <h3 className="text-sm font-medium text-gray-900">BTC train is moving, those who want to go to the moon, get on Ride on the DOGEMARS train👇👇 👇y gfh hgg</h3>
              <img className='w-full h-40 rounded-lg object-cover mt-2' src="https://s3.coinmarketcap.com/static-gravity/thumbnail/large/dc0f3aa391df44559830669c773fe45d.jpg" loading="lazy" decoding="async"  alt="image"></img>
            </div>
            <div className=''>
            <div className="px-1 transition-colors border-b pb-3 border-border-light">
              <div className='flex items-center gap-2 mb-2'>
              <img className='w-6 h-6 rounded-full' src="https://s3.coinmarketcap.com/static-gravity/image/2b0fd7d35bbb4c3ea831dea150b907e6.png" alt="avatar frame"/>
              <p className='text-sm text-gray-500'>Ram Bahadhur Panday</p>
              <p className="text-11 font-normal text-gray-500">2 hours ago</p>
              </div>
              <h3 className="text-sm font-medium text-gray-900">🧠 3.7M votes — and 81% are bullish on BTC. <br/>

Sentiment is loud. <br/>

But remember: euphoria ≠ breakout. <br/>

Watch the $86K level </h3>
              <img className='w-full h-40 rounded-lg object-cover mt-2' src="https://s3.coinmarketcap.com/static-gravity/thumbnail/large/0e3aa5e1320442c8a1d982bde3247561.png" loading="lazy" decoding="async" alt="image"></img>
            </div>
            </div>

            <div className=''>
            <div className="px-1 transition-colors border-b pb-3 border-border-light">
              <div className='flex items-center gap-2 mb-2'>
              <img className='w-6 h-6 rounded-full' src="https://s3.coinmarketcap.com/static-gravity/image/2b0fd7d35bbb4c3ea831dea150b907e6.png" alt="avatar frame"/>
              <p className='text-sm text-gray-500'>Ram Bahadhur Panday</p>
              <p className="text-11 font-normal text-gray-500">2 hours ago</p>
              </div>
              <h3 className="text-sm font-medium text-gray-900">🧠 3.7M votes — and 81% are bullish on BTC. <br/>

Sentiment is loud. <br/>

But remember: euphoria ≠ breakout. <br/>

Watch the $86K level </h3>
              <img className='w-full h-40 rounded-lg object-cover mt-2' src="https://s3.coinmarketcap.com/static-gravity/thumbnail/large/0e3aa5e1320442c8a1d982bde3247561.png" loading="lazy" decoding="async" alt="image"></img>
            </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSection; 