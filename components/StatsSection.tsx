import React from 'react';
import { FiUsers, FiDollarSign, FiGlobe, FiCalendar } from 'react-icons/fi';

interface StatItemProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, number, label }) => (
  <div className="flex flex-col items-center px-4 py-6 rounded-lg bg-white shadow-card hover:shadow-card-hover transition-shadow">
    <div className="text-3xl text-primary mb-3">
      {icon}
    </div>
    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
      {number}
    </div>
    <div className="text-gray-600 text-center">
      {label}
    </div>
  </div>
);

const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-deriv-lightgray">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            icon={<FiUsers />}
            number="115K+"
            label="Active Partners"
          />
          <StatItem 
            icon={<FiDollarSign />}
            number="$47M+"
            label="Commissions Paid"
          />
          <StatItem 
            icon={<FiGlobe />}
            number="190+"
            label="Countries"
          />
          <StatItem 
            icon={<FiCalendar />}
            number="150+"
            label="Annual Seminars"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 