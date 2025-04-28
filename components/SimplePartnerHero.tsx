import React from 'react';
import Link from 'next/link';

const SimplePartnerHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Partner With Deriv and Grow Your Income
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Join thousands of successful partners worldwide. Multiple ways to earn, flexible commission models, and dedicated support to help you succeed.
        </p>
        
        <Link href="#find-your-path" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-block mb-12">
          Find Your Path
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-3xl md:text-4xl font-bold mb-2">100K+</div>
            <div className="text-white/90">Partners worldwide</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-3xl md:text-4xl font-bold mb-2">$1B+</div>
            <div className="text-white/90">Total commissions paid</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-3xl md:text-4xl font-bold mb-2">$50K+</div>
            <div className="text-white/90">Top monthly payout</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplePartnerHero; 