import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

interface TierComparisonModalProps {
  onClose: () => void;
}

const TierComparisonModal: React.FC<TierComparisonModalProps> = ({ onClose }) => {
  const benefitRows = [
    {
      benefit: "Commission Multiplier",
      bronze: "100%",
      silver: "105%",
      gold: "110%",
      platinum: "115%",
      invitation: "120%",
      type: "text"
    },
    {
      benefit: "Support Response Time",
      bronze: "24 hours",
      silver: "12 hours",
      gold: "6 hours",
      platinum: "2 hours",
      invitation: "Priority",
      type: "text"
    },
    {
      benefit: "Dedicated Account Manager",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true,
      invitation: true,
      type: "boolean"
    },
    {
      benefit: "121 Program Eligibility",
      bronze: false,
      silver: false,
      gold: false,
      platinum: true,
      invitation: true,
      type: "boolean"
    },
    {
      benefit: "Financial Content Support",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true,
      invitation: true,
      type: "boolean"
    },
    {
      benefit: "Website & Digital Support",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true,
      invitation: true,
      type: "boolean"
    },
    {
      benefit: "Advanced Reporting",
      bronze: false,
      silver: true,
      gold: true,
      platinum: true,
      invitation: true,
      type: "boolean"
    },
    {
      benefit: "Custom Marketing Materials",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true,
      invitation: true,
      type: "boolean"
    },
    {
      benefit: "Strategic Business Reviews",
      bronze: false,
      silver: false,
      gold: false,
      platinum: true,
      invitation: true,
      type: "boolean"
    },
    {
      benefit: "Priority Event Access",
      bronze: false,
      silver: false,
      gold: true,
      platinum: true,
      invitation: true,
      type: "boolean"
    },
    {
      benefit: "Early Product Access",
      bronze: false,
      silver: false,
      gold: false,
      platinum: true,
      invitation: true,
      type: "boolean"
    }
  ];

  const renderCell = (value: any, type: string) => {
    if (type === "boolean") {
      return value ? 
        <span className="text-green-500 font-bold flex justify-center"><FiCheck /></span> : 
        <span className="text-red-500 flex justify-center"><FiX /></span>;
    }
    return value;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 className="text-xl font-bold">Partner Tier Benefits Comparison</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-auto p-4 max-h-[calc(90vh-4rem)]">
          <table className="w-full">
            <thead className="bg-deriv-lightgray sticky top-0">
              <tr>
                <th className="p-3 text-left">Benefit</th>
                <th className="p-3 text-center bg-bronze bg-opacity-10">Bronze</th>
                <th className="p-3 text-center bg-silver bg-opacity-10">Silver</th>
                <th className="p-3 text-center bg-gold bg-opacity-10">Gold</th>
                <th className="p-3 text-center bg-platinum bg-opacity-10">Platinum</th>
                <th className="p-3 text-center bg-primary bg-opacity-10">Invitation Only</th>
              </tr>
            </thead>
            <tbody>
              {benefitRows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-medium">{row.benefit}</td>
                  <td className="p-3 text-center">{renderCell(row.bronze, row.type)}</td>
                  <td className="p-3 text-center">{renderCell(row.silver, row.type)}</td>
                  <td className="p-3 text-center">{renderCell(row.gold, row.type)}</td>
                  <td className="p-3 text-center">{renderCell(row.platinum, row.type)}</td>
                  <td className="p-3 text-center">{renderCell(row.invitation, row.type)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-200 text-right">
          <button
            onClick={onClose}
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TierComparisonModal; 