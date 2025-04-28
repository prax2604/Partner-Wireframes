import React from 'react';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

interface TierBenefitsProps {
  onCompareClick: () => void;
}

interface TierCardProps {
  name: string;
  multiplier: string;
  requirement: string;
  benefits: string[];
  color: string;
  buttonText: string;
  buttonLink: string;
}

const TierCard: React.FC<TierCardProps> = ({
  name,
  multiplier,
  requirement,
  benefits,
  color,
  buttonText,
  buttonLink
}) => (
  <div className={`bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 ${color} flex flex-col`}>
    <div className="p-6 flex-grow">
      <div className="text-xl font-bold mb-2">{name}</div>
      <div className="text-4xl font-bold text-primary mb-4">{multiplier}</div>
      <div className="bg-deriv-lightgray rounded-lg p-3 mb-6 text-sm">
        {requirement}
      </div>
      
      <ul className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1"><FiCheck /></span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="p-6 pt-0">
      <Link href={buttonLink} className="btn btn-secondary w-full text-center">
        {buttonText}
      </Link>
    </div>
  </div>
);

const TierBenefits: React.FC<TierBenefitsProps> = ({ onCompareClick }) => {
  const tiers = [
    {
      name: "Bronze",
      multiplier: "100%",
      requirement: "Starting tier for all partners",
      benefits: [
        "Basic commission rates",
        "Standard support",
        "Marketing materials",
        "Performance reports"
      ],
      color: "border-bronze",
      buttonText: "Start Here",
      buttonLink: "/register"
    },
    {
      name: "Silver",
      multiplier: "105%",
      requirement: "$500 in commissions",
      benefits: [
        "5% commission boost",
        "Priority support",
        "Enhanced reporting",
        "Advanced marketing materials"
      ],
      color: "border-silver",
      buttonText: "Learn More",
      buttonLink: "/tiers/silver"
    },
    {
      name: "Gold",
      multiplier: "110%",
      requirement: "$1,000 in commissions",
      benefits: [
        "10% commission boost",
        "Dedicated account manager",
        "Website support",
        "Educational content access"
      ],
      color: "border-gold",
      buttonText: "Learn More",
      buttonLink: "/tiers/gold"
    },
    {
      name: "Platinum",
      multiplier: "115%",
      requirement: "$5,000 in commissions",
      benefits: [
        "15% commission boost",
        "Strategic business reviews",
        "Financial content support",
        "121 Program eligibility"
      ],
      color: "border-platinum",
      buttonText: "Learn More",
      buttonLink: "/tiers/platinum"
    },
    {
      name: "Invitation Only",
      multiplier: "120%",
      requirement: "By invitation only",
      benefits: [
        "20% commission boost",
        "VIP support services",
        "121 Partner Program",
        "Custom solutions"
      ],
      color: "border-primary",
      buttonText: "Contact Us",
      buttonLink: "/contact"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Success with Partner Tiers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear rewards for your growth and achievement
          </p>
        </div>
        
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-6">
            {tiers.map((tier, index) => (
              <div key={index} className="w-64 lg:w-auto">
                <TierCard {...tier} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={onCompareClick}
            className="btn btn-secondary"
          >
            Compare All Tier Benefits
          </button>
        </div>
      </div>
    </section>
  );
};

export default TierBenefits; 