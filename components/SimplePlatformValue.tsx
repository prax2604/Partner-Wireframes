import React from 'react';
import { FaLaptop, FaChartLine, FaClock } from 'react-icons/fa';

const SimplePlatformValue = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Multiple Trading Platforms for Different Trading Styles
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our diverse range of platforms caters to all types of traders, from beginners to professionals.
            This variety gives your clients the freedom to choose what works best for them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaLaptop className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Multiple Platforms</h3>
            <p className="text-gray-600">
              Offer your clients a choice of intuitive platforms tailored to different trading preferences and experience levels.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-4xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Diverse Asset Classes</h3>
            <p className="text-gray-600">
              Provide access to forex, cryptocurrencies, commodities, stocks, and more through a single integration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaClock className="text-4xl text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Trading</h3>
            <p className="text-gray-600">
              Enable your clients to trade around the clock on certain markets, increasing earning potential for both them and you.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 font-medium italic">
            "Our partners consistently highlight that offering multiple platform options is a key advantage when promoting Deriv to their audience."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimplePlatformValue; 