import React from 'react';
import Image from 'next/image';

interface RegionPayoutProps {
  region: string;
  amount: string;
}

const RegionPayout: React.FC<RegionPayoutProps> = ({ region, amount }) => (
  <div className="flex-1 min-w-[200px]">
    <div className="text-gray-600 mb-1">{region}</div>
    <div className="text-2xl font-bold text-primary">{amount}</div>
  </div>
);

interface PayoutCardProps {
  amount: string;
  month: string;
  partnerType: string;
  region: string;
  background: string;
}

const PayoutCard: React.FC<PayoutCardProps> = ({ amount, month, partnerType, region, background }) => {
  return (
    <div className={`rounded-xl overflow-hidden ${background} shadow-lg`}>
      <div className="p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-sm opacity-80 mb-1">Top Payout</div>
            <div className="text-3xl font-bold">{amount}</div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-80 mb-1">{month}</div>
            <div className="text-sm font-semibold bg-white/20 rounded-full px-3 py-1">
              {partnerType}
            </div>
          </div>
        </div>
        <div className="text-sm mt-auto opacity-80">Region: {region}</div>
      </div>
    </div>
  );
};

const TopPayouts: React.FC = () => {
  const regionPayouts = [
    { region: "South Asia", amount: "$23,643.52" },
    { region: "Southeast Asia", amount: "$18,983.92" },
    { region: "Latin America & Caribbean", amount: "$20,722.76" },
    { region: "Africa", amount: "$15,919.88" },
  ];

  const payouts: PayoutCardProps[] = [
    {
      amount: "$87,529",
      month: "March 2023",
      partnerType: "Trading Professional",
      region: "Southeast Asia",
      background: "bg-gradient-to-br from-primary to-primary-dark"
    },
    {
      amount: "$64,215",
      month: "February 2023",
      partnerType: "Content Creator",
      region: "Europe",
      background: "bg-gradient-to-br from-deriv-blue to-deriv-darkblue"
    },
    {
      amount: "$51,702",
      month: "January 2023",
      partnerType: "Affiliate",
      region: "Middle East",
      background: "bg-gradient-to-br from-deriv-blue to-deriv-darkblue"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">TOP EARNERS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Recent Top Payouts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our top-performing partners are earning. Your success story could be next.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {payouts.map((payout, index) => (
            <PayoutCard
              key={index}
              amount={payout.amount}
              month={payout.month}
              partnerType={payout.partnerType}
              region={payout.region}
              background={payout.background}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-deriv-lightgray rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">What Factors Determine Your Earnings?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <strong>Active Clients</strong> - The number of clients you refer who actively trade
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <strong>Trading Volume</strong> - The amount your referred clients trade
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <strong>Partnership Tier</strong> - Your tier level (Starter, Silver, Gold, Diamond)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <strong>Trading Instruments</strong> - The products your clients trade
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-4 text-center">Average Monthly Earnings by Partner Type</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Trading Professionals</span>
                    <span className="font-medium">$5,400</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Content Creators</span>
                    <span className="font-medium">$4,800</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-deriv-blue rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Affiliates</span>
                    <span className="font-medium">$3,600</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gold rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Referral Partners</span>
                    <span className="font-medium">$1,800</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-silver rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                * Based on partners in Diamond tier with 10+ active clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPayouts; 