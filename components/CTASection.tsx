import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Ready to Grow Your Business with Deriv?", 
  description = "Apply now to become a Deriv partner and start earning competitive commissions with our comprehensive partner program.",
  buttonText = "Apply Now",
  buttonLink = "#"
}) => {
  return (
    <section className="bg-gradient-to-r from-deriv-darkblue to-deriv-blue py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href={buttonLink} 
            className="btn bg-primary hover:bg-primary-dark text-white"
          >
            {buttonText}
          </Link>
          <Link 
            href="mailto:partners@deriv.com" 
            className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30"
          >
            Contact Partner Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 