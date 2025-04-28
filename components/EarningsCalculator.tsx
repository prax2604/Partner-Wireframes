import React, { useState } from 'react';

const EarningsCalculator: React.FC = () => {
  const [partnerType, setPartnerType] = useState('affiliate');
  const [clientCount, setClientCount] = useState(5);
  const [avgVolume, setAvgVolume] = useState(1000);
  const [partnerTier, setPartnerTier] = useState('starter');
  
  // Calculate earnings based on inputs
  const calculateEarnings = () => {
    let baseRate = 0;
    
    // Base rates by partner type
    switch(partnerType) {
      case 'affiliate':
        baseRate = 0.2; // 20%
        break;
      case 'trading-professional':
        baseRate = 0.25; // 25%
        break;
      case 'content-creator':
        baseRate = 0.3; // 30%
        break;
      default:
        baseRate = 0.15; // 15%
    }
    
    // Tier multipliers
    let tierMultiplier = 1;
    switch(partnerTier) {
      case 'silver':
        tierMultiplier = 1.1;
        break;
      case 'gold':
        tierMultiplier = 1.15;
        break;
      case 'diamond':
        tierMultiplier = 1.2;
        break;
      default:
        tierMultiplier = 1;
    }
    
    // Calculate total commission
    const totalCommission = avgVolume * clientCount * baseRate * tierMultiplier;
    
    return {
      monthly: totalCommission.toFixed(2),
      yearly: (totalCommission * 12).toFixed(2)
    };
  };
  
  const earnings = calculateEarnings();

  return (
    <section id="earnings-calculator" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">CALCULATE YOUR POTENTIAL</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Earnings Calculator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimate your potential earnings based on your partner type, client base, and trading volume.
          </p>
        </div>
        
        <div className="bg-deriv-lightgray rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Partner Type</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                >
                  <option value="affiliate">Affiliate (Passive Income)</option>
                  <option value="trading-professional">Trading Professional</option>
                  <option value="content-creator">Content Creator</option>
                  <option value="referral">Referral Partner</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Number of Active Clients</label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={clientCount} 
                  onChange={(e) => setClientCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-gray-600 text-sm mt-1">
                  <span>1</span>
                  <span>{clientCount} clients</span>
                  <span>50</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Average Trading Volume per Client ($/month)</label>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100"
                  value={avgVolume} 
                  onChange={(e) => setAvgVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-gray-600 text-sm mt-1">
                  <span>$100</span>
                  <span>${avgVolume.toLocaleString()}</span>
                  <span>$10,000</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Partner Tier</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={partnerTier}
                  onChange={(e) => setPartnerTier(e.target.value)}
                >
                  <option value="starter">Starter (Base Rate)</option>
                  <option value="silver">Silver (1.1x)</option>
                  <option value="gold">Gold (1.15x)</option>
                  <option value="diamond">Diamond (1.2x)</option>
                </select>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-card p-6">
              <h3 className="text-xl font-bold mb-6 text-center">Your Potential Earnings</h3>
              
              <div className="mb-8">
                <h4 className="text-gray-600 text-sm font-medium">Monthly Income</h4>
                <div className="text-4xl font-bold text-primary">${earnings.monthly}</div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-gray-600 text-sm font-medium">Yearly Income</h4>
                <div className="text-4xl font-bold text-deriv-blue">${earnings.yearly}</div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">
                  * This calculator provides an estimate. Actual earnings may vary based on market conditions, 
                  client activity, and other factors.
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <button className="btn bg-primary hover:bg-primary-dark text-white">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator; 