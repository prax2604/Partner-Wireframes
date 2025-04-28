import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const PartnerJourneySteps: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Choose Your Partnership Model",
      description: "Select from revenue share, turnover, CPA, or master partner models based on your goals.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
        </svg>
      )
    },
    {
      number: 2,
      title: "Promote Deriv's Platforms",
      description: "Use our marketing tools to promote Deriv's diverse trading platforms to your audience.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
        </svg>
      )
    },
    {
      number: 3,
      title: "Earn Ongoing Commissions",
      description: "Receive commissions based on your chosen model and grow your partnership business.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">GETTING STARTED</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Your Journey to Success</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your partnership with Deriv in three simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-1/2 h-0.5 bg-gray-200" style={{ width: 'calc(100% - 240px)', transform: 'translateX(-50%)' }}></div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/register" 
            className="btn bg-primary hover:bg-primary-dark text-white px-8 py-3"
          >
            Start Your Journey Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerJourneySteps; 