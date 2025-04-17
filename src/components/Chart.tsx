"use client"

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    TradingView: any;
    Datafeeds: any;
  }
}

const Chart: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [widget, setWidget] = useState<any>(null);
  const [interval, setInterval] = useState<string>("1D");

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
          interval: interval,
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
          disabled_features: ["use_localstorage_for_settings"],
          enabled_features: ["study_templates"],
          theme: "Light",
          autosize: true,
          height: "100%",
          width: "100%",
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
  }, [interval]);

  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
    if (widget) {
      widget.chart().setResolution(newInterval);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Bitcoin to USD Chart</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => handleIntervalChange("1D")}
            className={`px-3 py-1 rounded ${interval === "1D" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
          >
            1D
          </button>
          <button 
            onClick={() => handleIntervalChange("1W")}
            className={`px-3 py-1 rounded ${interval === "1W" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
          >
            1W
          </button>
          <button 
            onClick={() => handleIntervalChange("1M")}
            className={`px-3 py-1 rounded ${interval === "1M" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
          >
            1M
          </button>
          <button 
            onClick={() => handleIntervalChange("1Y")}
            className={`px-3 py-1 rounded ${interval === "1Y" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
          >
            1Y
          </button>
        </div>
      </div>
      
      <div className="h-[500px] rounded-lg overflow-hidden">
        <div ref={container} className="w-full h-full" />
      </div>
      
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-500">24h Low</p>
          <p className="font-semibold">$83,314.85</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-500">24h High</p>
          <p className="font-semibold">$85,428.28</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-500">24h Change</p>
          <p className="font-semibold text-green-500">+0.39%</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-500">24h Volume</p>
          <p className="font-semibold">$24.03B</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
