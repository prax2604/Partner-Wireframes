import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-deriv-darkblue to-deriv-darkblue/90 text-white py-20 md:py-28">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-primary/20 px-4 py-2 rounded-full mb-2">
            <span className="text-sm font-medium text-white">Partner Program</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Success Is <span className="text-primary">Our Business</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-lg">
            Partner with Deriv for more than just commissions. Get bespoke support, premium resources, and access to one of the few programs offering earnings on both CFD and derivatives trading.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register" className="btn bg-primary hover:bg-primary-dark text-white">
              Become a Partner
            </Link>
            <Link href="#partner-paths" className="btn bg-transparent border-2 border-white/30 hover:border-white/60 text-white">
              Explore Partner Types
            </Link>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <span className="font-bold text-primary">1</span>
              </div>
              <span>Quick Registration</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <span className="font-bold text-primary">2</span>
              </div>
              <span>Immediate Access</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <span className="font-bold text-primary">3</span>
              </div>
              <span>Dedicated Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <span className="font-bold text-primary">4</span>
              </div>
              <span>Enhanced Earnings</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/20 rounded-full"></div>
          
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-deriv-darkblue/70 to-transparent z-10"></div>
            
            <Image 
              src="/images/partner-hero.jpg" 
              alt="Successful Deriv Partners"
              width={600}
              height={450}
              className="w-full h-auto"
              priority
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold">
                  <span className="text-primary">$47M+</span>
                </div>
                <div className="flex-1 text-sm text-white/90">
                  <p>Commissions paid to our 115,000+ partners worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 