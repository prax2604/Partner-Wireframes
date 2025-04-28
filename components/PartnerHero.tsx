import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PartnerHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-deriv-darkblue to-deriv-darkblue/90 text-white py-20 md:py-28">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-primary/20 px-4 py-2 rounded-full mb-2">
            <span className="text-sm font-medium text-white">Partner Program</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build <span className="text-primary">Your Business</span> With Deriv
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-lg">
            Discover our comprehensive partner programs designed to help you leverage your audience, expertise, or network into a sustainable revenue stream.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register" className="btn bg-primary hover:bg-primary-dark text-white">
              Apply Now
            </Link>
            <Link href="#partner-paths" className="btn bg-transparent border-2 border-white/30 hover:border-white/60 text-white">
              View Partner Types
            </Link>
          </div>
          
          <div className="pt-6 grid grid-cols-2 gap-x-4 gap-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">High Payouts</h3>
                <p className="text-sm text-gray-300">Up to 45% commission rates with tier multipliers</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Dedicated Support</h3>
                <p className="text-sm text-gray-300">Personal manager for strategic guidance</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Marketing Resources</h3>
                <p className="text-sm text-gray-300">Premium tools and co-marketing support</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Premium Programs</h3>
                <p className="text-sm text-gray-300">Exclusive access to 121 Partner Program</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/20 rounded-full"></div>
          
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-deriv-darkblue/70 to-transparent z-10"></div>
            
            <Image 
              src="/images/partner-collaboration.jpg" 
              alt="Deriv Partner Collaboration"
              width={600}
              height={450}
              className="w-full h-auto"
              priority
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold">
                  <span className="text-primary">115K+</span>
                </div>
                <div className="flex-1 text-sm text-white/90">
                  <p>Partners worldwide building successful businesses with Deriv</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero; 