import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import SimplePartnerHero from '@/components/SimplePartnerHero';
import Footer from '@/components/Footer';
import StaticPartnerContent from '@/components/StaticPartnerContent';
import PartnerFAQ from '@/components/PartnerFAQ';
import CTASection from '@/components/CTASection';

const PartnersPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Partner Programs | Deriv</title>
        <meta name="description" content="Join Deriv's partner programs. Earn commissions by introducing traders to our trading platforms and tools." />
      </Head>
      
      <Header />
      <SimplePartnerHero />
      <StaticPartnerContent />
      <PartnerFAQ />
      <CTASection 
        title="Ready to become a Deriv partner?" 
        description="Join our partner program today and start earning competitive commissions."
        buttonText="Apply Now"
        buttonLink="/register"
      />
      <Footer />
    </div>
  );
};

export default PartnersPage; 