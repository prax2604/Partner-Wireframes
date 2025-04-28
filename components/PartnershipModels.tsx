import React from 'react';
import Link from 'next/link';

interface PartnershipModelProps {
  title: string;
  description: string;
  icon: JSX.Element;
  perfectFor: string[];
  learnMoreLink: string;
  color: string;
}

const PartnershipModelCard: React.FC<PartnershipModelProps> = ({
  title,
  description,
  icon,
  perfectFor,
  learnMoreLink,
  color
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 ${color} hover:shadow-lg transition-shadow duration-300`}>
      <div className="p-6">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${color.replace('border', 'bg')} bg-opacity-10 text-primary mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Perfect for:</h4>
          <ul className="space-y-1">
            {perfectFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          href={learnMoreLink} 
          className="inline-block text-primary font-medium hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
};

const PartnershipModels: React.FC = () => {
  const partnershipModels: PartnershipModelProps[] = [
    {
      title: "Revenue Share",
      description: "Earn a percentage of the revenue generated from your referred clients' trading activity.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
        </svg>
      ),
      perfectFor: [
        "Partners focusing on high-value clients",
        "Those with expertise in trading education",
        "Long-term partnership builders"
      ],
      learnMoreLink: "/partners/revenue-share",
      color: "border-primary"
    },
    {
      title: "Turnover",
      description: "Receive commissions based on the total trading volume your clients generate, regardless of profitability.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
        </svg>
      ),
      perfectFor: [
        "Partners with active trader networks",
        "Those preferring volume-based earnings",
        "Market analysts and strategists"
      ],
      learnMoreLink: "/partners/turnover",
      color: "border-deriv-blue"
    },
    {
      title: "CPA (Cost Per Acquisition)",
      description: "Get a fixed payment for each qualified client you refer to Deriv, with competitive rates.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      ),
      perfectFor: [
        "Content creators and influencers",
        "Website owners seeking simple earnings",
        "Those with large audience reach"
      ],
      learnMoreLink: "/partners/cpa",
      color: "border-gold"
    },
    {
      title: "Master Partner",
      description: "Build your own network of sub-partners and earn from their performance and client acquisitions.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
      ),
      perfectFor: [
        "Broker businesses looking to expand",
        "Partnership network builders",
        "Those with industry connections"
      ],
      learnMoreLink: "/partners/master",
      color: "border-silver"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">PARTNERSHIP OPTIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Choose How You Earn With Deriv</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple ways to partner, one platform for success. Select the partnership model that aligns with your goals and expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipModels.map((model, index) => (
            <PartnershipModelCard
              key={index}
              title={model.title}
              description={model.description}
              icon={model.icon}
              perfectFor={model.perfectFor}
              learnMoreLink={model.learnMoreLink}
              color={model.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipModels; 