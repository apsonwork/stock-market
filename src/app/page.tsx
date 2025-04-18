import Header from '@/components/Header';
import PriceStats from '@/components/PriceStats';
import Chart from '@/components/Chart';
import MarketData from '@/components/MarketData';
import About from '@/components/About';
import NewsSection from '@/components/NewsSection';
import CommunitySentiment from '@/components/CommunitySentiment';
import SocialLinks from '@/components/SocialLinks';
import TradingViewChart from '@/components/TradingViewChart';
import BitcoinAnalytics from '@/components/BitcoinAnalytics';
import AdSection from '@/components/AdSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 overflow-hidden">
        <div className="flex h-[calc(100vh-65px)]">
          <div className="shrink-0 w-[390px] min-w-[329px] overflow-y-auto border-r border-gray-200">
            <PriceStats />
            <SocialLinks />
            <CommunitySentiment />
            <AdSection />
          </div>
          <div className="flex-1 overflow-y-auto">
            <Chart />
            <BitcoinAnalytics />
          </div>
          <div className="shrink-0 w-[390px] min-w-[329px] overflow-y-auto border-l border-gray-200 hidden xl:block">
            <NewsSection />
            <AdSection />
          </div>
        </div>
      </main>
    </div>
  );
} 