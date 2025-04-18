"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChartRightSection from '@/components/ChartRightSection';

declare global {
  interface Window {
    TradingView: any;
    Datafeeds: any;
  }
}

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
    <div className="fixed inset-0 bg-[#131722]">
      <div className="absolute top-4 right-4">
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
        <div className="w-[70%] h-[90vh]">
          <div ref={container} className="w-full h-full" />
        </div>
        <div className="w-[30%] p-4">
          <ChartRightSection />
        </div>
      </div>
    </div>
  );
} 