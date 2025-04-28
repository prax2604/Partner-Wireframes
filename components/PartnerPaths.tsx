import React, { useState } from 'react';
import Link from 'next/link';
import { FiDollarSign, FiBriefcase, FiUsers, FiShare2, FiHelpCircle } from 'react-icons/fi';

interface PathCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  perfectFor: string[];
  benefits: string[];
  color: string;
}

const PathCard: React.FC<PathCardProps> = ({ 
  title, 
  description, 
  icon, 
  perfectFor, 
  benefits, 
  color 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className={`h-[450px] perspective-1000 cursor-pointer group ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d rotate-y-0 group-[.is-flipped]:rotate-y-180">
        {/* Front of card */}
        <div className={`absolute w-full h-full bg-white rounded-xl shadow-card p-6 border-t-4 ${color} backface-hidden`}>
          <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full ${color.replace('border', 'bg')} bg-opacity-10 text-primary`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="mt-auto">
            <p className="text-gray-500 text-sm font-medium mb-2">Perfect for:</p>
            <ul className="text-gray-600 text-sm space-y-1">
              {perfectFor.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="absolute bottom-6 right-6">
            <span className="text-primary text-sm font-medium">
              Tap to see benefits
            </span>
          </div>
        </div>
        
        {/* Back of card */}
        <div className={`absolute w-full h-full bg-white rounded-xl shadow-card p-6 border-t-4 ${color} backface-hidden rotate-y-180`}>
          <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
          
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
          
          <div className="absolute bottom-6 right-6">
            <button 
              className="btn-sm bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              Learn More
            </button>
          </div>
          
          <div className="absolute bottom-6 left-6">
            <span className="text-gray-500 text-sm">
              Tap to flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartnerPaths: React.FC = () => {
  const partnerPaths: PathCardProps[] = [
    {
      title: "Generate Passive Income",
      description: "Earn commissions by referring clients to our platform with minimal ongoing effort required.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
        </svg>
      ),
      perfectFor: [
        "Website owners and bloggers",
        "SEO specialists",
        "Anyone looking for passive income"
      ],
      benefits: [
        "Earn without active involvement after setup",
        "Multiple integration options (links, banners, APIs)",
        "Regular passive commissions",
        "No need for trading expertise",
        "Simple, low-maintenance income stream"
      ],
      color: "border-primary"
    },
    {
      title: "For Trading Professionals",
      description: "Leverage your trading expertise and knowledge to generate additional income streams.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      ),
      perfectFor: [
        "Experienced/professional traders",
        "Technical analysts and strategists",
        "Trading educators and mentors"
      ],
      benefits: [
        "Monetize your trading knowledge",
        "Access to premium analytical tools",
        "Higher commission rates for trading experts",
        "Multiple income streams (education, signals, community)",
        "Professional development opportunities"
      ],
      color: "border-deriv-blue"
    },
    {
      title: "Monetize Your Audience",
      description: "Turn your following into a revenue stream by promoting our trading platform to your audience.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      ),
      perfectFor: [
        "Content creators and influencers",
        "Trading educators with an audience",
        "Social media financial personalities"
      ],
      benefits: [
        "Custom content and promotional materials",
        "Co-marketing opportunities",
        "Dedicated partner support manager",
        "Exclusive events and webinars",
        "Revenue from your existing audience"
      ],
      color: "border-gold"
    },
    {
      title: "Refer Your Network",
      description: "Introduce your contacts to our platform and earn rewards for successful referrals.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
      ),
      perfectFor: [
        "Financial professionals",
        "Business networkers",
        "Anyone with a relevant network"
      ],
      benefits: [
        "Simple referral process",
        "Personalized referral links and codes",
        "Competitive one-time commissions",
        "No technical knowledge required",
        "Professional referral materials"
      ],
      color: "border-silver"
    },
    {
      title: "Just Exploring?",
      description: "Not sure which path is right for you? Start here to explore all partnership options.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
        </svg>
      ),
      perfectFor: [
        "Those new to partnership programs",
        "Curious about different options",
        "Anyone evaluating opportunities"
      ],
      benefits: [
        "Compare all partnership options",
        "Personalized guidance from our team",
        "Educational resources to get started",
        "Flexible path selection",
        "Find the best fit for your skills/assets"
      ],
      color: "border-gray-400"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">PARTNER PATHS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Choose Your Path to Success</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer multiple partnership opportunities tailored to your skills, assets, and goals.
            Select the path that best fits your situation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerPaths.map((path, index) => (
            <PathCard 
              key={index}
              title={path.title}
              description={path.description}
              icon={path.icon}
              perfectFor={path.perfectFor}
              benefits={path.benefits}
              color={path.color}
            />
          ))}
        </div>
      </div>
      
      {/* CSS for card flip effect */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 0.375rem;
          transition: all 0.2s;
        }
      `}</style>
    </section>
  );
};

export default PartnerPaths; 