"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChartRightSection from '@/components/ChartRightSection';
import AITechnicalAnalysis from '@/components/AITechnicalAnalysis';
import MarketTicker from '@/components/MarketTicker';

declare global {
  interface Window {
    TradingView: any;
    Datafeeds: any;
  }
}

// Complete market data
const marketData = {
  "Hotels And Tourism": {
    "n": "Hotels And Tourism",
    "v": 6590.39,
    "pc": 0.39,
    "t": 91039158.9,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 6
  },
  "Finance": {
    "n": "Finance",
    "v": 2567.31,
    "pc": 0.72,
    "t": 242473303.1,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 9
  },
  "NEPSE": {
    "n": "NEPSE",
    "v": 2722.73,
    "pc": 0.98,
    "t": 10797363282.32,
    "si": 0,
    "d": "2025/04/17 03:00:00",
    "o": 0
  },
  "Banking": {
    "n": "Banking",
    "v": 1382.75,
    "pc": 1.14,
    "t": 416753414,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 4
  },
  "Sensitive": {
    "n": "Sensitive",
    "v": 458.22,
    "pc": 1.41,
    "t": 3988641449.2,
    "si": 0,
    "d": "2025/04/17 03:00:00",
    "o": 1
  },
  "Sen. Float": {
    "n": "Sen. Float",
    "v": 154.2,
    "pc": 1.33,
    "t": 3988641449.2,
    "si": 0,
    "d": "2025/04/17 03:00:00",
    "o": 3
  },
  "Manu.and Pro.": {
    "n": "Manu.and Pro.",
    "v": 7093.2,
    "pc": 0.05,
    "t": 196620412.4,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 13
  },
  "Hydropower": {
    "n": "Hydropower",
    "v": 3577.66,
    "pc": 1.13,
    "t": 5303351586.1,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 8
  },
  "Non-Life Insurance": {
    "n": "Non-Life Insurance",
    "v": 12595.35,
    "pc": 0.96,
    "t": 129820060.5,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 11
  },
  "Others": {
    "n": "Others",
    "v": 2412.13,
    "pc": 0.37,
    "t": 647029507.2,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 14
  },
  "Trading": {
    "n": "Trading",
    "v": 4558.54,
    "pc": -0.15,
    "t": 13036771.3,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 5
  },
  "Mutual Fund": {
    "n": "Mutual Fund",
    "v": 19.52,
    "pc": 0.62,
    "t": 15423415.82,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 15
  },
  "Life Insurance": {
    "n": "Life Insurance",
    "v": 13416.76,
    "pc": 0.84,
    "t": 531171092.4,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 12
  },
  "Microfinance": {
    "n": "Microfinance",
    "v": 4865.64,
    "pc": 0.63,
    "t": 346083987.8,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 10
  },
  "Investment": {
    "n": "Investment",
    "v": 117.24,
    "pc": 2.99,
    "t": 1936218919.1,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 16
  },
  "Float": {
    "n": "Float",
    "v": 183.74,
    "pc": 1.03,
    "t": 10511150557.8,
    "si": 0,
    "d": "2025/04/17 03:00:00",
    "o": 2
  },
  "Development Bank": {
    "n": "Development Bank",
    "v": 5677.32,
    "pc": 1.35,
    "t": 657552345,
    "si": 1,
    "d": "2025/04/17 03:00:00",
    "o": 7
  }
};

export default function EditPage() {
  const container = useRef<HTMLDivElement>(null);
  const [widget, setWidget] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "charting_library/charting_library.standalone.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const datafeedScript = document.createElement("script");
      datafeedScript.src = "datafeeds/udf/dist/bundle.js";
      datafeedScript.async = true;
      document.body.appendChild(datafeedScript);

      datafeedScript.onload = () => {
        if (!container.current) return;

        const tvWidget = new window.TradingView.widget({
          fullscreen: false,
          symbol: "AAPL",
          interval: "1D",
          container: container.current,
          datafeed: new window.Datafeeds.UDFCompatibleDatafeed(
            "https://demo-feed-data.tradingview.com",
            undefined,
            {
              maxResponseLength: 1000,
              expectedOrder: "latestFirst",
            }
          ),
          library_path: "charting_library/",
          locale: "en",
          theme: "Dark",
          autosize: false,
          height: "100%",
          width: "100%",
          toolbar_bg: "#1e222d",
          overrides: {
            "paneProperties.backgroundType": "solid",
            "paneProperties.background": "#131722",
            "paneProperties.gridProperties.color": "#2a2e39",
            "paneProperties.gridProperties.vertLinesVisible": false,
            "paneProperties.gridProperties.horzLinesVisible": false,
            "scalesProperties.lineColor": "#2a2e39",
            "scalesProperties.textColor": "#d1d4dc",
            "mainSeriesProperties.style": 3,
            "mainSeriesProperties.areaStyle.color1": "rgba(41, 98, 255, 0.1)",
            "mainSeriesProperties.areaStyle.color2": "rgba(41, 98, 255, 0.05)",
            "mainSeriesProperties.areaStyle.linecolor": "#2962FF",
            "mainSeriesProperties.areaStyle.linestyle": 0,
            "mainSeriesProperties.areaStyle.linewidth": 2,
            "mainSeriesProperties.areaStyle.priceSource": "close",
            "mainSeriesProperties.candleStyle.upColor": "#26a69a",
            "mainSeriesProperties.candleStyle.downColor": "#ef5350",
            "mainSeriesProperties.candleStyle.borderUpColor": "#26a69a",
            "mainSeriesProperties.candleStyle.borderDownColor": "#ef5350",
            "mainSeriesProperties.candleStyle.wickUpColor": "#26a69a",
            "mainSeriesProperties.candleStyle.wickDownColor": "#ef5350",
            "chartProperties.background": "#131722",
            "chartProperties.crossHairProperties.color": "#9598A1",
            "chartProperties.crossHairProperties.width": 1,
            "chartProperties.crossHairProperties.style": 2,
            "chartProperties.crossHairProperties.dashStyle": [2, 2],
            "chartProperties.vertGridProperties.color": "#2a2e39",
            "chartProperties.horzGridProperties.color": "#2a2e39",
            "chartProperties.crossHairProperties.vertLine.color": "#9598A1",
            "chartProperties.crossHairProperties.horzLine.color": "#9598A1"
          },
          loading_screen: {
            backgroundColor: "#131722",
            foregroundColor: "#2962FF"
          }
        });

        tvWidget.onChartReady(() => {
          const chart = tvWidget.activeChart();
          chart.crossHairMoved().subscribe(null, (param: any) => {
            console.log("Price:", param.price, "Time:", new Date(param.time * 1000));
          });
        });

        setWidget(tvWidget);
      };
    };

    return () => {
      const scripts = document.querySelectorAll("script");
      scripts.forEach((script) => {
        if (script.src.includes("charting_library") || script.src.includes("datafeeds")) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div className="bg-[#131722] overflow-hidden h-screen">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-[#EFF2F5] rounded-lg px-3 py-2 text-xs text-gray-500 hover:text-gray-900 transition-colors duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Exit
        </button>
      </div>
      <div className="flex h-full">
        <div className='w-[70%]'>
        <div className="flex h-[70vh]">
          <div className="w-full h-full">
            <div ref={container} className="w-full h-full" />
          </div>
        </div>
        <div className="ml-2 my-4">
          <div className="w-full flex flex-col gap-4">
            <MarketTicker data={marketData} />
            <AITechnicalAnalysis />
          </div>
        </div>
      </div>

      <div className="w-[30%] p-4">
            <ChartRightSection />
          </div>
        </div>
    </div>
  );
} 