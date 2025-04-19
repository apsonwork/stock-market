"use client"

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface AITechnicalAnalysisProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  widget: any;
}

const AITechnicalAnalysis: React.FC<AITechnicalAnalysisProps> = ({ widget }) => {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [analysisData, setAnalysisData] = useState<any>(null);
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-[#1E222D]' : 'bg-[#F8FAFD]';
  const textColor = theme === 'dark' ? 'text-[#D1D4DC]' : 'text-gray-900';
  const secondaryTextColor = theme === 'dark' ? 'text-[#9598A1]' : 'text-gray-500';
  const borderColor = theme === 'dark' ? 'border-[#2A2E39]' : 'border-gray-200';

  const handleAnalyze = async () => {
    if (!widget) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Draw support line
      const startPoint1 = { time: 1518138685, price: 149 };
      const endPoint1 = { time: 1522199485, price: 167 };

      widget.activeChart().createMultipointShape([startPoint1, endPoint1], {
        shape: "trend_line",
        lock: true,
        disableSelection: true,
        disableSave: true,
        overrides: {
          linecolor: theme === 'dark' ? "#2962FF" : "#2962FF",
          linewidth: 2,
          showLabel: true,
          showPrice: true,
          text: "Support Line",
          textcolor: theme === 'dark' ? "#2962FF" : "#2962FF",
          fontsize: 12,
          bold: true,
        },
      });

      // Draw resistance line
      const startPoint2 = { time: 1518138685, price: 175 };
      const endPoint2 = { time: 1522199485, price: 185 };

      widget.activeChart().createMultipointShape([startPoint2, endPoint2], {
        shape: "trend_line",
        lock: true,
        disableSelection: true,
        disableSave: true,
        overrides: {
          linecolor: theme === 'dark' ? "#EF5350" : "#EF5350",
          linewidth: 2,
          showLabel: true,
          showPrice: true,
          text: "Resistance Line",
          textcolor: theme === 'dark' ? "#EF5350" : "#EF5350",
          fontsize: 12,
          bold: true,
        },
      });

      // Draw rectangle
      widget.activeChart().createMultipointShape(
        [
          { time: 1508116285, price: 157 },
          { time: 1520817085, price: 149 }
        ],
        {
          shape: 'rectangle',
          disableSelection: false,
          disableSave: false,
          overrides: {
            backgroundColor: theme === 'dark' ? 'rgba(41, 98, 255, 0.1)' : 'rgba(41, 98, 255, 0.1)',
            borderColor: theme === 'dark' ? '#2962FF' : '#2962FF',
            borderWidth: 1,
            showLabel: true,
            text: "Support Zone",
            textcolor: theme === 'dark' ? '#2962FF' : '#2962FF',
            fontsize: 12,
            bold: true,
          }
        }
      );

      // Set analysis data
      setAnalysisData({
        currentTrend: "Bullish",
        supportLevel: "2,450",
        resistanceLevel: "2,650",
        rsi: "65",
        macd: "Positive",
        volume: "High",
        movingAverage: "2,550",
        volatility: "Medium",
        marketSentiment: "Positive"
      });
    } catch (error) {
      console.error('Error drawing analysis:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} h-full flex flex-col`}>
      <div className={`flex items-center justify-between p-4 border-b ${borderColor}`}>
        <div className="flex items-center gap-2">
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
        <button
          onClick={handleAnalyze}
          disabled={isLoading || !widget}
          className={`px-3 py-1 rounded-lg text-xs font-medium ${
            isLoading || !widget
              ? 'bg-gray-400 cursor-not-allowed'
              : theme === 'dark'
              ? 'bg-[#2962FF] hover:bg-[#1E4BD8]'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white transition-colors duration-200`}
        >
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[121px] scrollbar-light">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2962FF] animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-[#2962FF] animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-[#2962FF] animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        ) : analysisData ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>Current Trend</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.currentTrend}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>Support Level</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.supportLevel}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>Resistance Level</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.resistanceLevel}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>RSI</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.rsi}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>MACD</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.macd}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>Volume</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.volume}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>Moving Average</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.movingAverage}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>Volatility</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.volatility}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-11 ${secondaryTextColor}`}>Market Sentiment</span>
              <span className={`text-11 font-semibold ${textColor}`}>{analysisData.marketSentiment}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">

            <p className={`text-sm font-normal ${secondaryTextColor}`}>Click <b>Analyze</b> to generate technical analysis.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AITechnicalAnalysis; 