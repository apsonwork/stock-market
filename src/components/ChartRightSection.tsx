"use client"

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const ChartRightSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell' | 'hold'>('buy');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { theme } = useTheme();

  const stockData = {
    buy: [
      { sn: 1, stock: 'ADBL', ltp: 291.96, change: 0.69 },
      { sn: 2, stock: 'CZBIL', ltp: 212.68, change: 1.41 },
      { sn: 3, stock: 'GBIME', ltp: 222.62, change: 1.27 },
      { sn: 4, stock: 'JFL', ltp: 506.95, change: 0.35 },
      { sn: 5, stock: 'JSLBB', ltp: 1478, change: 1.30 },
    ],
    sell: [
      { sn: 1, stock: 'GMFIL', ltp: 506.05, change: -0.75 },
      { sn: 2, stock: 'SJCL', ltp: 333.7, change: -0.53 },
      { sn: 3, stock: 'TRH', ltp: 1052.11, change: -0.98 },
      { sn: 4, stock: 'NICL', ltp: 450.25, change: -1.25 },
      { sn: 5, stock: 'PRVU', ltp: 1200.50, change: -0.85 },
    ],
    hold: [
      { sn: 1, stock: 'MERO', ltp: 701.33, change: 0.39 },
      { sn: 2, stock: 'NBL', ltp: 450.20, change: 0.15 },
      { sn: 3, stock: 'SCB', ltp: 850.75, change: 0.25 },
      { sn: 4, stock: 'HBL', ltp: 1200.00, change: 0.10 },
      { sn: 5, stock: 'NICA', ltp: 950.50, change: 0.20 },
    ]
  };

  // Buy Signal data
  const buySignals = [
    { date: '2024-03-15', pricePoint: '2440' },
    { date: '2024-03-18', pricePoint: '2500' }
  ];

  const bgColor = theme === 'dark' ? 'bg-[#1E222D]' : 'bg-[#F8FAFD]';
  const textColor = theme === 'dark' ? 'text-[#D1D4DC]' : 'text-gray-900';
  const secondaryTextColor = theme === 'dark' ? 'text-[#9598A1]' : 'text-gray-500';
  const tabBgColor = theme === 'dark' ? 'bg-[#2A2E39]' : 'bg-[#EFF2F5]';
  const tabIndicatorColor = theme === 'dark' ? 'bg-[#131722]' : 'bg-white';
  const positiveColor = theme === 'dark' ? 'text-[#26A69A]' : 'text-green-500';
  const negativeColor = theme === 'dark' ? 'text-[#EF5350]' : 'text-red-500';
  const inputBgColor = theme === 'dark' ? 'bg-[#2A2E39]' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-[#2A2E39]' : 'border-gray-200';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      console.log('Sending question:', question);
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      console.log('Received response:', data);

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get response from ChatGPT');
      }

      if (!data.response) {
        throw new Error('No response received from ChatGPT');
      }

      setResponse(data.response);
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
      setQuestion('');
    }
  };

  return (
    <div className="h-full flex flex-col gap-4">
      {/* Current Strategy Section */}
      <div className={`${bgColor} p-4 rounded-lg`}>
        <h3 className={`text-sm font-semibold mb-2 ${textColor}`}>Current Strategy</h3>
        <div className="space-y-3">
          <div>
            <div className={`${secondaryTextColor} text-11 font-normal mb-1`}>TRAILING STOP LOSS (SELL)</div>
            <div className={`${secondaryTextColor} text-11 font-normal mb-1`}>CURRENT MARKET STAGE</div>
            <div className={`${positiveColor} text-11 font-medium`}>Advancing</div>
          </div>
          <div>
            <div className={`${secondaryTextColor} text-11 font-normal mb-1`}>Immediate Demand Zone</div>
            <div className={`${textColor} text-sm font-semibold`}>2440-2500</div>
          </div>
          <div>
            <div className={`${secondaryTextColor} text-11 font-normal mb-1`}>Immediate Supply Zone</div>
            <div className={`${textColor} text-sm font-semibold`}>2650-2700</div>
          </div>
          <div>
            <div className={`${secondaryTextColor} text-11 font-normal mb-1`}>Sell Only If Closing Below</div>
            <div className={`${textColor} text-sm font-semibold`}>2650</div>
          </div>
        </div>
      </div>

      {/* Buy/Sell/Hold Section */}
      <div className={`${bgColor} p-4 rounded-lg`}>
        <div className={`relative flex mb-4 ${tabBgColor} rounded-lg p-1`}>
          <button
            onClick={() => setActiveTab('buy')}
            className={`relative flex-1 py-2 text-11 transition-colors duration-300 rounded-md z-10 ${
              activeTab === 'buy' ? textColor : `${secondaryTextColor} font-normal`
            }`}
          >
            BUY
          </button>
          <button
            onClick={() => setActiveTab('sell')}
            className={`relative flex-1 py-2 text-11 transition-colors duration-300 rounded-md z-10 ${
              activeTab === 'sell' ? textColor : `${secondaryTextColor} font-normal`
            }`}
          >
            SELL
          </button>
          <button
            onClick={() => setActiveTab('hold')}
            className={`relative flex-1 py-2 text-11 transition-colors duration-300 rounded-md z-10 ${
              activeTab === 'hold' ? textColor : `${secondaryTextColor} font-normal`
            }`}
          >
            HOLD
          </button>
          {/* Sliding background */}
          <div
            className={`absolute h-[calc(100%-8px)] w-[calc(33.33%-4px)] ${tabIndicatorColor} rounded-md transition-all duration-300 ease-in-out ${
              activeTab === 'buy' ? 'left-1' : 
              activeTab === 'sell' ? 'left-[calc(33.33%+2px)]' : 
              'left-[calc(66.66%+3px)]'
            }`}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`text-left text-11 ${secondaryTextColor}`}>
                <th className="pb-2">S.N</th>
                <th className="pb-2">Stock</th>
                <th className="pb-2">LTP</th>
                <th className="pb-2">Change</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {stockData[activeTab].map((stock) => (
                <tr key={stock.sn}>
                  <td className={`py-1 text-11 ${textColor}`}>{stock.sn}</td>
                  <td className={`py-1 text-11 font-semibold ${textColor}`}>{stock.stock}</td>
                  <td className={`py-1 text-11 font-semibold ${textColor}`}>{stock.ltp}</td>
                  <td className={`py-1 text-11 ${stock.change >= 0 ? positiveColor : negativeColor}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buy Signal Section */}
      <div className={`${bgColor} p-4 rounded-lg`}>
        <h3 className={`text-sm font-semibold mb-2 ${textColor}`}>Buy Signal</h3>
        <div className="space-y-3">
          {buySignals.map((signal, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <div className={`${secondaryTextColor} text-11 font-normal`}>Signal Date</div>
                <div className={`${textColor} text-sm font-semibold`}>{signal.date}</div>
              </div>
              <div className="text-right">
                <div className={`${secondaryTextColor} text-11 font-normal`}>Buy Price Point</div>
                <div className={`${positiveColor} text-sm font-semibold`}>{signal.pricePoint}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Box Section */}
      <div className={`${bgColor} p-4 rounded-lg border ${borderColor} flex flex-col justify-between h-full`}>
        <div className="flex items-center gap-2 mb-4">
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
            <h3 className={`text-sm font-semibold ${textColor}`}>AI Assistant</h3>
            <p className={`text-11 ${secondaryTextColor}`}>Ask me anything about the market</p>
          </div>
        </div>
        <div className={`space-y-4 max-h-[200px] overflow-y-auto mb-4 ${theme === 'dark' ? 'scrollbar-thumb-[#2A2E39]' : 'scrollbar-thumb-gray-200'} scrollbar-track-transparent scrollbar-thin`}>
          {error && (
            <div className="flex justify-start">
              <div className={`max-w-[80%] rounded-lg p-3 ${theme === 'dark' ? 'bg-[#2A2E39]' : 'bg-gray-100'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-5 h-5 rounded-full bg-red-500 flex items-center justify-center`}>
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className={`text-11 font-semibold ${theme === 'dark' ? 'text-red-400' : 'text-red-500'}`}>Error</span>
                </div>
                <p className={`text-11 font-normal ${theme === 'dark' ? 'text-red-300' : 'text-red-600'}`}>
                  {error}
                </p>
              </div>
            </div>
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className={`max-w-[80%] rounded-lg p-3 ${theme === 'dark' ? 'bg-[#2A2E39]' : 'bg-gray-100'}`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2962FF] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#2962FF] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#2962FF] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          {response && (
            <div className="flex justify-end">
              <div className={`max-w-[80%] rounded-lg p-3 ${theme === 'dark' ? 'bg-[#2962FF]' : 'bg-blue-500'}`}>
                <p className={`text-11 font-normal ${textColor}`}>{response}</p>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask me anything"
            className={`flex-1 px-4 py-2 rounded-lg text-11 font-normal ${theme === 'dark' ? 'bg-[#2A2E39] text-[#D1D4DC] placeholder-[#9598A1]' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-[#2962FF]`}
          />
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className={`px-4 py-2 rounded-lg text-white text-11 font-medium transition-colors duration-200 ${
              isLoading || !question.trim() ? 'opacity-50 cursor-not-allowed' : ''
            } ${theme === 'dark' ? 'bg-[#2A2E39]' : 'bg-blue-500'} ${theme === 'dark' ? 'hover:bg-[#2A2E39]' : 'hover:bg-blue-600'}`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChartRightSection; 