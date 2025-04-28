import React from 'react';
import Link from 'next/link';

// Extremely simplified component with minimal dependencies
const SimplifiedPlatforms: React.FC = () => {
  return (
    <div>
      {/* Partner Path Section */}
      <section id="find-your-path" style={{ padding: '4rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#ff444f', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>FIND YOUR PATH</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem' }}>
              What brings you to Deriv Partners?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Select the option that best matches your goals, and we'll show you how to maximize your partnership benefits
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '72rem', margin: '0 auto' }}>
            {/* Card 1 */}
            <div style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid #3b82f6' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem' }}>I want to generate passive income</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1rem', flexGrow: 1 }}>Perfect if you're looking to earn commissions by simply referring clients to Deriv with minimal time investment</p>
              <Link href="/partners/passive-income" style={{ color: '#ff444f', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', marginTop: 'auto' }}>
                Learn more →
              </Link>
            </div>
            
            {/* Card 2 */}
            <div style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid #22c55e' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem' }}>I'm a trading professional</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1rem', flexGrow: 1 }}>Ideal for brokers, trading experts, and analysts who want to build their own business on our reliable infrastructure</p>
              <Link href="/partners/trading-professionals" style={{ color: '#ff444f', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', marginTop: 'auto' }}>
                Learn more →
              </Link>
            </div>
            
            {/* Card 3 */}
            <div style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid #a855f7' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem' }}>I want to monetize my audience</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1rem', flexGrow: 1 }}>For content creators, bloggers, and influencers looking to provide value to their audience while earning commissions</p>
              <Link href="/partners/content-creators" style={{ color: '#ff444f', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', marginTop: 'auto' }}>
                Learn more →
              </Link>
            </div>
            
            {/* Card 4 */}
            <div style={{ background: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid #f59e0b' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem' }}>I want to refer my network</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1rem', flexGrow: 1 }}>For professionals with connections who want to leverage their network for mutual benefit and additional income</p>
              <Link href="/partners/network-referral" style={{ color: '#ff444f', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', marginTop: 'auto' }}>
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us - Core benefits */}
      <section style={{ padding: '4rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#ff444f', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>WHY PARTNER WITH US</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem' }}>
              The Deriv Partner Advantage
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Join thousands of successful partners who are already benefiting from our comprehensive support and competitive commissions
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', maxWidth: '64rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', background: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Up to 45% Commission</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Earn competitive revenue share with increasing tier multipliers as your referrals grow</p>
            </div>
            
            <div style={{ textAlign: 'center', background: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Global Reach</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Access to over 100 markets worldwide with multilingual support for your clients</p>
            </div>
            
            <div style={{ textAlign: 'center', background: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Dedicated Support</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Your success is our priority with personalized partner managers and marketing resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple Platforms Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#ff444f', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>MULTIPLE TRADING PLATFORMS</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem' }}>
              More Platforms = Higher Retention
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '48rem', margin: '0 auto' }}>
              Offer your clients a variety of professional trading platforms to match different trading styles and experience levels
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', maxWidth: '70rem', margin: '0 auto', marginBottom: '2.5rem' }}>
            {/* Platform 1 */}
            <div style={{ background: 'white', borderRadius: '0.5rem', padding: '1.25rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Deriv MT5</h4>
              <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>Advanced multi-asset platform for experienced traders</p>
            </div>
            
            {/* Platform 2 */}
            <div style={{ background: 'white', borderRadius: '0.5rem', padding: '1.25rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Deriv Trader</h4>
              <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>Simple and intuitive platform for beginners</p>
            </div>
            
            {/* Platform 3 */}
            <div style={{ background: 'white', borderRadius: '0.5rem', padding: '1.25rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Deriv GO</h4>
              <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>Trade on-the-go with our mobile-optimized app</p>
            </div>
            
            {/* Platform 4 */}
            <div style={{ background: 'white', borderRadius: '0.5rem', padding: '1.25rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Deriv Bot</h4>
              <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>Automated trading without coding knowledge</p>
            </div>
          </div>
          
          <div style={{ background: '#f9fafb', borderRadius: '0.5rem', padding: '1.5rem', maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#374151', fontWeight: 500, marginBottom: '0.5rem' }}>
              "Having multiple platforms to offer our clients has been a key differentiator for us. It significantly increases client retention and lifetime value."
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>— Alex K., Top Performing Partner</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section style={{ padding: '3rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Resources to Boost Your Success</h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Link href="/blog" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'white', borderRadius: '0.375rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: '#374151', fontWeight: 500, textDecoration: 'none' }}>
              Blog Articles
            </Link>
            <Link href="/education" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'white', borderRadius: '0.375rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: '#374151', fontWeight: 500, textDecoration: 'none' }}>
              Educational Content
            </Link>
            <Link href="/webinars" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'white', borderRadius: '0.375rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: '#374151', fontWeight: 500, textDecoration: 'none' }}>
              Partner Webinars
            </Link>
            <Link href="/case-studies" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'white', borderRadius: '0.375rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', color: '#374151', fontWeight: 500, textDecoration: 'none' }}>
              Success Stories
            </Link>
          </div>
          
          <Link href="/register" style={{ display: 'inline-block', background: '#ff444f', color: 'white', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '9999px', textDecoration: 'none' }}>
            Become a partner today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SimplifiedPlatforms; 