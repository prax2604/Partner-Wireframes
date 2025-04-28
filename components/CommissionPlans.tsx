import React from 'react';
import Link from 'next/link';

interface CommissionTierProps {
  name: string;
  multiplier: string;
  requirements: string[];
  color: string;
}

const CommissionTier: React.FC<CommissionTierProps> = ({ name, multiplier, requirements, color }) => {
  return (
    <div className={`bg-white rounded-xl shadow-card overflow-hidden border-t-4 ${color}`}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="text-2xl font-bold text-primary mb-4">{multiplier}</div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Requirements:</h4>
          <ul className="space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CommissionPlans: React.FC = () => {
  const tiers = [
    {
      name: "Starter",
      multiplier: "Base Rate",
      requirements: [
        "Open to all new partners",
        "No minimum client requirements",
        "Basic marketing tools access"
      ],
      color: "border-gray-400"
    },
    {
      name: "Silver",
      multiplier: "1.1x Multiplier",
      requirements: [
        "5+ active clients per month",
        "Monthly volume of $10,000+",
        "3+ months of partnership"
      ],
      color: "border-silver"
    },
    {
      name: "Gold",
      multiplier: "1.15x Multiplier",
      requirements: [
        "15+ active clients per month",
        "Monthly volume of $50,000+",
        "6+ months of partnership"
      ],
      color: "border-gold"
    },
    {
      name: "Diamond",
      multiplier: "1.2x Multiplier",
      requirements: [
        "30+ active clients per month",
        "Monthly volume of $100,000+",
        "12+ months of partnership"
      ],
      color: "border-primary"
    }
  ];

  const baseRates = [
    { type: "Forex", rate: "Up to 30%", description: "Major, minor, and exotic currency pairs" },
    { type: "Commodities", rate: "Up to 25%", description: "Metals, energy, and agricultural products" },
    { type: "Cryptocurrencies", rate: "Up to 35%", description: "Bitcoin, Ethereum, and other digital assets" },
    { type: "Indices", rate: "Up to 20%", description: "Global market indices and volatility indices" },
    { type: "Stocks", rate: "Up to 15%", description: "Shares of major global companies" }
  ];

  return (
    <section className="py-16 bg-deriv-lightgray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">EARNING POTENTIAL</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Transparent Commission Structure</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our tiered commission structure rewards your growth with increasing rates as you progress.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Base Commission Rates</h3>
          <div className="bg-white rounded-xl overflow-hidden shadow-card">
            <table className="w-full">
              <thead>
                <tr className="bg-deriv-darkblue text-white">
                  <th className="py-4 px-6 text-left">Product Type</th>
                  <th className="py-4 px-6 text-left">Commission Rate</th>
                  <th className="py-4 px-6 text-left hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {baseRates.map((rate, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 font-medium">{rate.type}</td>
                    <td className="py-4 px-6 text-primary font-bold">{rate.rate}</td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">{rate.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Commission Tier Multipliers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <CommissionTier 
                key={index}
                name={tier.name}
                multiplier={tier.multiplier}
                requirements={tier.requirements}
                color={tier.color}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Want to understand how much you could earn?</p>
            <Link 
              href="#earnings-calculator" 
              className="btn bg-primary hover:bg-primary-dark text-white inline-flex items-center"
            >
              Try Our Earnings Calculator
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommissionPlans; 