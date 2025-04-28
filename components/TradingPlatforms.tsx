import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PlatformCardProps {
  name: string;
  description: string;
  imageSrc: string;
  features: string[];
  platforms: string[];
  color: string;
  learnMoreUrl: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  name,
  description,
  imageSrc,
  features,
  platforms,
  color,
  learnMoreUrl
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className={`h-3 ${color}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={`${name} platform screenshot`}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Key features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="text-xs uppercase font-semibold text-gray-400 mb-2">Available on:</h4>
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
        
        <Link 
          href={learnMoreUrl} 
          className="inline-block text-primary font-medium hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
};

const TradingPlatforms: React.FC = () => {
  const platforms: PlatformCardProps[] = [
    {
      name: "Deriv MT5",
      description: "The world's leading trading platform with Deriv's exclusive synthetic indices.",
      imageSrc: "/images/platforms/mt5.png",
      features: [
        "24/7 synthetic indices trading",
        "Advanced charting tools",
        "Expert advisors and indicators",
        "Powerful risk management tools"
      ],
      platforms: ["Windows", "macOS", "Android", "iOS", "Web"],
      color: "bg-primary",
      learnMoreUrl: "https://deriv.com/deriv-mt5/"
    },
    {
      name: "Deriv cTrader",
      description: "Advanced platform with copy trading capabilities and fast execution.",
      imageSrc: "/images/platforms/ctrader.png",
      features: [
        "Copy trading functionality",
        "Fast execution speeds",
        "Extensive technical analysis tools",
        "Customizable interface"
      ],
      platforms: ["Windows", "macOS", "Android", "iOS", "Web"],
      color: "bg-deriv-blue",
      learnMoreUrl: "https://deriv.com/deriv-ctrader/"
    },
    {
      name: "Deriv X",
      description: "Customizable platform with TradingView charting for precision trading.",
      imageSrc: "/images/platforms/derivx.png",
      features: [
        "Integrated TradingView charts",
        "110+ technical indicators",
        "Customizable workspace",
        "Advanced order types"
      ],
      platforms: ["Windows", "macOS", "Android", "iOS", "Web"],
      color: "bg-gold",
      learnMoreUrl: "https://deriv.com/deriv-x/"
    },
    {
      name: "Deriv Trader",
      description: "Simple options trading platform with fixed risk and predetermined payouts.",
      imageSrc: "/images/platforms/trader.png",
      features: [
        "Options trading with fixed risk",
        "Simple, intuitive interface",
        "Multiple trade types",
        "Short-term trading opportunities"
      ],
      platforms: ["Web", "Mobile Web"],
      color: "bg-silver",
      learnMoreUrl: "https://deriv.com/deriv-trader/"
    }
  ];

  return (
    <section className="py-16 bg-deriv-lightgray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">TRADING PLATFORMS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Why Traders Choose Deriv</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple platforms to suit different trading styles and preferences. Give your clients more options and increase your conversion potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={index}
              name={platform.name}
              description={platform.description}
              imageSrc={platform.imageSrc}
              features={platform.features}
              platforms={platform.platforms}
              color={platform.color}
              learnMoreUrl={platform.learnMoreUrl}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-6 md:p-8 rounded-xl shadow-md">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Multiple Trading Types</h3>
              <p className="text-gray-600 mb-4">
                Offer your clients diverse trading options including CFDs, options, and multipliers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>CFDs on forex, stocks, indices & more</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Options with fixed risk & returns</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Multipliers for amplified profits</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Exclusive Markets</h3>
              <p className="text-gray-600 mb-4">
                Give your clients access to Deriv's pioneering synthetic indices for 24/7 trading.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Volatility indices with adjustable risk</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Crash & Boom for specific strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Range Break, Step, & Jump indices</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Global Accessibility</h3>
              <p className="text-gray-600 mb-4">
                Reach clients worldwide with multi-language support and diverse payment methods.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Platform available in 15+ languages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Multiple payment methods</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPlatforms; 