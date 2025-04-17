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
          disabled_features: [
            "use_localstorage_for_settings",
            "header_widget",
            "left_toolbar",
            "context_menus",
            "control_bar",
            "edit_buttons_in_legend",
            "border_around_the_chart",
            "main_series_scale_menu",
            "symbol_search_hot_key",
            "symbol_info",
            "timeframes_toolbar",
            "volume_force_overlay",
            "create_volume_indicator_by_default",
            "display_market_status",
            "remove_library_container_border",
            "chart_property_page_background",
            "chart_property_page_scales",
            "chart_property_page_style",
            "chart_property_page_timezone_sessions",
            "compare_symbol",
            "drawing_templates",
            "format_button_in_legend",
            "go_to_date",
            "hide_left_toolbar_by_default",
            "hide_right_toolbar_by_default",
            "legend_context_menu",
            "show_chart_property_page",
            "show_control_bar",
            "show_interval_dialog_on_key_press",
            "show_logo_on_all_charts",
            "symbol_search",
            "timezone_menu",
            "trading_notifications",
            "use_localstorage_for_settings",
            "volume_force_overlay"
          ],
          enabled_features: [],
          theme: "Light",
          autosize: true,
          height: "100%",
          width: "100%",
          toolbar_bg: "#f8fafc",
          overrides: {
            "paneProperties.backgroundType": "solid",
            "paneProperties.background": "#ffffff",
            "paneProperties.gridProperties.color": "#F0F3FA",
            "scalesProperties.lineColor": "#F0F3FA",
            "mainSeriesProperties.style": 3, // 3 is for area chart
            "mainSeriesProperties.areaStyle.color1": "rgba(41, 98, 255, 0.2)",
            "mainSeriesProperties.areaStyle.color2": "rgba(41, 98, 255, 0.05)",
            "mainSeriesProperties.areaStyle.linecolor": "#2962FF",
            "mainSeriesProperties.areaStyle.linestyle": 0,
            "mainSeriesProperties.areaStyle.linewidth": 2,
            "mainSeriesProperties.areaStyle.priceSource": "close"
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
  }, [interval]);

  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
    if (widget) {
      widget.chart().setResolution(newInterval);
    }
  };

  return (
    <div className="bg-white px-6 pt-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Bitcoin to USD Chart</h2>
        <div className="relative flex bg-[#EFF2F5] rounded-lg p-1 px-3 gap-5">
          <button 
            onClick={() => handleIntervalChange("1D")}
            className={`relative flex-1 py-2 text-xs transition-colors duration-300 rounded-md z-10 ${
              interval === "1D" ? "text-gray-900" : "text-gray-500 font-medium"
            }`}
          >
            1D
          </button>
          <button 
            onClick={() => handleIntervalChange("1W")}
            className={`relative flex-1 py-2 text-xs transition-colors duration-300 rounded-md z-10 ${
              interval === "1W" ? "text-gray-900" : "text-gray-500 font-medium"
            }`}
          >
            1W
          </button>
          <button 
            onClick={() => handleIntervalChange("1M")}
            className={`relative flex-1 py-2 text-xs transition-colors duration-300 rounded-md z-10 ${
              interval === "1M" ? "text-gray-900" : "text-gray-500 font-medium"
            }`}
          >
            1M
          </button>
          <button 
            onClick={() => handleIntervalChange("1Y")}
            className={`relative flex-1 py-2 text-xs transition-colors duration-300 rounded-md z-10 ${
              interval === "1Y" ? "text-gray-900" : "text-gray-500 font-medium"
            }`}
          >
            1Y
          </button>
          {/* Sliding background */}
          <div
            className={`absolute h-[calc(100%-8px)] w-[calc(25%-4px)] bg-white rounded-md transition-all duration-300 ease-in-out ${
              interval === "1D" ? "left-1" :
              interval === "1W" ? "left-[calc(25%+3px)]" :
              interval === "1M" ? "left-[calc(50%+5px)]" :
              "left-[calc(75%)]"
            }`}
          />
        </div>
      </div>
      
      <div className="h-[500px] rounded-lg overflow-hidden">
        <div ref={container} className="w-full h-full" />
      </div>
      
      {/* <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </div> */}
    </div>
  );
};

export default Chart;
