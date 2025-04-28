import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PartnerPaths from '@/components/PartnerPaths';
import StatsSection from '@/components/StatsSection';
import TierBenefits from '@/components/TierBenefits';
import PremiumPrograms from '@/components/PremiumPrograms';
import TopPayouts from '@/components/TopPayouts';
import SuccessStories from '@/components/SuccessStories';
import CommissionPlans from '@/components/CommissionPlans';
import EarningsCalculator from '@/components/EarningsCalculator';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import TierComparisonModal from '@/components/TierComparisonModal';
import { useState } from 'react';

export default function Home() {
  const [showTierModal, setShowTierModal] = useState(false);

  return (
    <>
      <Head>
        <title>Deriv Partners - Turn Your Audience Into Revenue</title>
        <meta name="description" content="Partner with Deriv to earn competitive commissions, receive dedicated support, and access premium marketing resources — all tailored to your business goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <PartnerPaths />
        <StatsSection />
        <TierBenefits onCompareClick={() => setShowTierModal(true)} />
        <PremiumPrograms />
        <TopPayouts />
        <SuccessStories />
        <CommissionPlans />
        <EarningsCalculator />
        <CTASection />
      </main>

      <Footer />

      {showTierModal && <TierComparisonModal onClose={() => setShowTierModal(false)} />}
    </>
  );
} 