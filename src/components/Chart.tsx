"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

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
  const router = useRouter();
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-[#1E222D]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-[#D1D4DC]' : 'text-gray-900';
  const buttonBgColor = theme === 'dark' ? 'bg-[#2A2E39]' : 'bg-[#EFF2F5]';
  const buttonTextColor = theme === 'dark' ? 'text-[#9598A1]' : 'text-gray-500';
  const buttonHoverTextColor = theme === 'dark' ? 'text-[#D1D4DC]' : 'text-gray-900';
  const buttonActiveBgColor = theme === 'dark' ? 'bg-[#131722]' : 'bg-white';

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
          theme: theme === 'dark' ? "Dark" : "Light",
          autosize: true,
          height: "100%",
          width: "100%",
          toolbar_bg: theme === 'dark' ? "#1e222d" : "#f8fafd",
          overrides: {
            "paneProperties.backgroundType": "solid",
            "paneProperties.background": theme === 'dark' ? "#131722" : "#ffffff",
            "paneProperties.gridProperties.color": theme === 'dark' ? "#2a2e39" : "#e0e3eb",
            "paneProperties.gridProperties.vertLinesVisible": false,
            "paneProperties.gridProperties.horzLinesVisible": false,
            "scalesProperties.lineColor": theme === 'dark' ? "#2a2e39" : "#e0e3eb",
            "scalesProperties.textColor": theme === 'dark' ? "#d1d4dc" : "#131722",
            "mainSeriesProperties.style": 3, // 3 is for area chart
            "mainSeriesProperties.areaStyle.color1": theme === 'dark' ? "rgba(41, 98, 255, 0.1)" : "rgba(41, 98, 255, 0.1)",
            "mainSeriesProperties.areaStyle.color2": theme === 'dark' ? "rgba(41, 98, 255, 0.05)" : "rgba(41, 98, 255, 0.05)",
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
            "chartProperties.background": theme === 'dark' ? "#131722" : "#ffffff",
            "chartProperties.crossHairProperties.color": theme === 'dark' ? "#9598A1" : "#131722",
            "chartProperties.crossHairProperties.width": 1,
            "chartProperties.crossHairProperties.style": 2,
            "chartProperties.crossHairProperties.dashStyle": [2, 2],
            "chartProperties.vertGridProperties.color": theme === 'dark' ? "#2a2e39" : "#e0e3eb",
            "chartProperties.horzGridProperties.color": theme === 'dark' ? "#2a2e39" : "#e0e3eb",
            "chartProperties.crossHairProperties.vertLine.color": theme === 'dark' ? "#9598A1" : "#131722",
            "chartProperties.crossHairProperties.horzLine.color": theme === 'dark' ? "#9598A1" : "#131722"
          },
          loading_screen: {
            backgroundColor: theme === 'dark' ? "#131722" : "#ffffff",
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
  }, [interval, theme]);

  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
    if (widget) {
      widget.chart().setResolution(newInterval);
    }
  };

  const handleEditClick = () => {
    router.push('/edit');
  };

  return (
    <div className={`px-6 pt-6`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-xl font-semibold ${textColor}`}>Nabil Bank Chart</h2>
        <div className="flex items-center gap-4">
          <div className={`relative flex ${buttonBgColor} rounded-lg p-1 px-3 gap-5`}>
            <button 
              onClick={() => handleIntervalChange("1D")}
              className={`relative flex-1 py-2 text-xs transition-colors duration-300 rounded-md z-10 ${
                interval === "1D" ? `${textColor}` : `${buttonTextColor} font-medium`
              }`}
            >
              1D
            </button>
            <button 
              onClick={() => handleIntervalChange("1W")}
              className={`relative flex-1 py-2 text-xs transition-colors duration-300 rounded-md z-10 ${
                interval === "1W" ? `${textColor}` : `${buttonTextColor} font-medium`
              }`}
            >
              1W
            </button>
            <button 
              onClick={() => handleIntervalChange("1M")}
              className={`relative flex-1 py-2 text-xs transition-colors duration-300 rounded-md z-10 ${
                interval === "1M" ? `${textColor}` : `${buttonTextColor} font-medium`
              }`}
            >
              1M
            </button>
            <button 
              onClick={() => handleIntervalChange("1Y")}
              className={`relative flex-1 py-2 text-xs transition-colors duration-300 rounded-md z-10 ${
                interval === "1Y" ? `${textColor}` : `${buttonTextColor} font-medium`
              }`}
            >
              1Y
            </button>
            {/* Sliding background */}
            <div
              className={`absolute h-[calc(100%-8px)] w-[calc(25%-4px)] ${buttonActiveBgColor} rounded-md transition-all duration-300 ease-in-out ${
                interval === "1D" ? "left-1" :
                interval === "1W" ? "left-[calc(25%+3px)]" :
                interval === "1M" ? "left-[calc(50%+5px)]" :
                "left-[calc(75%)]"
              }`}
            />
          </div>
          <button
            onClick={handleEditClick}
            className={`relative flex items-center gap-2 ${buttonBgColor} rounded-lg px-3 py-2 text-xs ${buttonTextColor} hover:${buttonHoverTextColor} transition-colors duration-300`}
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            TradingView
          </button>
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
