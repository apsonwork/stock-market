"use client"

import Header from '@/components/Header';
import PriceStats from '@/components/PriceStats';
import Chart from '@/components/Chart';
import NewsSection from '@/components/NewsSection';
import CommunitySentiment from '@/components/CommunitySentiment';
import SocialLinks from '@/components/SocialLinks';
import BitcoinAnalytics from '@/components/BitcoinAnalytics';
import AdSection from '@/components/AdSection';
import ChartRightSection from '@/components/ChartRightSection';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-[#131722]' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-[#2A2E39]' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${bgColor} flex flex-col`}>
      <Header />

      <main className="flex-1 overflow-hidden">
        <div className="flex h-[calc(100vh-65px)]">
          <div className={`shrink-0 w-[390px] min-w-[329px] overflow-y-auto border-r ${borderColor}`}>
            <PriceStats />
            <SocialLinks />
            <CommunitySentiment />
            <AdSection />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="flex h-full">
              <div className="flex-1 flex flex-col">
                <Chart />
                <BitcoinAnalytics />
              </div>
              <div className="w-[300px] shrink-0 p-4">
                <ChartRightSection />
              </div>
            </div>
          </div>
          <div className={`shrink-0 w-[390px] min-w-[329px] overflow-y-auto border-l ${borderColor} hidden xl:block scrollbar-light`}>
            <NewsSection />
            <AdSection />
          </div>
        </div>
      </main>
    </div>
  );
} 