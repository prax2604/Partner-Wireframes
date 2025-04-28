import React from 'react';
import Link from 'next/link';
import { FiTarget, FiUsers, FiCalendar } from 'react-icons/fi';

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  ctaText: string;
  ctaLink: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  features,
  icon,
  ctaText,
  ctaLink
}) => (
  <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 p-8 relative overflow-hidden">
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full"></div>
    
    <div className="relative z-10">
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link href={ctaLink} className="btn btn-secondary">
        {ctaText}
      </Link>
    </div>
  </div>
);

const PremiumPrograms: React.FC = () => {
  const programs = [
    {
      title: "121 Partner Program",
      description: "Dedicated support and strategic guidance for high-potential partners ready to scale their business.",
      features: [
        "Strategic business consulting",
        "Dedicated senior support team",
        "Custom growth strategy",
        "Priority feature access",
        "Specialized marketing support"
      ],
      icon: <FiTarget />,
      ctaText: "Learn More",
      ctaLink: "/premium-programs/121-partner"
    },
    {
      title: "Master Partner Program",
      description: "Build your own network of partners and earn commissions from their performance. Open to all partners!",
      features: [
        "Earn 20% on sub-partner commissions",
        "Partner recruitment tools",
        "Network management dashboard",
        "Sub-partner performance tracking",
        "No special qualifications required"
      ],
      icon: <FiUsers />,
      ctaText: "Learn More",
      ctaLink: "/premium-programs/master-partner"
    },
    {
      title: "Seminars & Events",
      description: "Connect, learn, and grow with 150+ annual events designed to boost your partnership success.",
      features: [
        "Regional partner seminars",
        "Educational workshops",
        "Networking opportunities",
        "Strategy sessions with experts",
        "Access to exclusive presentations"
      ],
      icon: <FiCalendar />,
      ctaText: "View Calendar",
      ctaLink: "/events-calendar"
    }
  ];

  return (
    <section className="py-16 bg-deriv-lightgray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Partner Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exclusive opportunities to maximize your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            <span className="font-bold">Did you know?</span> The Master Partner Program is open to all partners, regardless of tier!
          </p>
          <Link href="/register" className="btn btn-primary">
            Join Our Partner Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PremiumPrograms; 