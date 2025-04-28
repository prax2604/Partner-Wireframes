import React from 'react';
import { FiCheckCircle, FiHeadphones, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

interface ValueCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-card p-6 hover:shadow-card-hover transition-all duration-300">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ValueProposition: React.FC = () => {
  const values = [
    {
      title: "Competitive Commissions",
      description: "Earn industry-leading rates up to 45% with tier multipliers that increase as you grow.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Dedicated Support",
      description: "Get personalized assistance from our partner managers who understand your unique needs.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Marketing Resources",
      description: "Access proven marketing materials, landing pages, and tools designed to maximize conversions.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
        </svg>
      )
    },
    {
      title: "Performance Analytics",
      description: "Track your performance with real-time data and insights to optimize your strategy.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Global Reach",
      description: "Connect with clients worldwide through our multilingual platform operating in 20+ languages.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: "Premium Programs",
      description: "Gain access to exclusive opportunities like our 121 Partner Program as you grow.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-deriv-lightgray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">WHY PARTNER WITH US</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The Deriv Partner Advantage</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to your success with benefits designed to help you maximize your earnings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
        
        <div className="bg-white mt-16 p-6 md:p-8 rounded-xl shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Partner Promise</h3>
              <p className="text-gray-600 mb-6">
                At Deriv, we understand that our success is directly tied to our partners' success. That's why we're committed to providing you with everything you need to thrive:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Prompt and reliable monthly payments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Transparent tracking and reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Continuous platform improvements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Long-term partnership growth</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-deriv-darkblue to-deriv-blue text-white p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Partner Satisfaction</h4>
              <div className="flex items-center mb-6">
                <div className="text-4xl font-bold mr-2">97%</div>
                <div className="text-sm">of our partners report high satisfaction with our program</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Commission Structure</span>
                    <span>96%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Support Quality</span>
                    <span>98%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Payment Reliability</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 