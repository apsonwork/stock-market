import Header from '@/components/Header';
import PriceStats from '@/components/PriceStats';
import Chart from '@/components/Chart';
import MarketData from '@/components/MarketData';
import About from '@/components/About';
import NewsSection from '@/components/NewsSection';
import CommunitySentiment from '@/components/CommunitySentiment';
import SocialLinks from '@/components/SocialLinks';
import TradingViewChart from '@/components/TradingViewChart';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 overflow-hidden">
        <div className="grid grid-cols-12 h-[calc(100vh-65px)]">
          <div className="col-span-3 min-w-[329px] overflow-y-auto border-r border-gray-200">
            <PriceStats />
            <SocialLinks />
          </div>
          <div className="col-span-6 overflow-y-auto">
            <Chart />
          </div>
          <div className="col-span-3 min-w-[329px] overflow-y-auto border-l border-gray-200">
            <CommunitySentiment />
            <NewsSection />
          </div>
        </div>
      </main>
    </div>
  );
} 