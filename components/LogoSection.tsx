import React from 'react';

const LogoSection = () => {
  const partnerLogos = [
    { name: "Booking.com", class: "col-span-1" },
    { name: "Get Your Guide", class: "col-span-1" },
    { name: "Viator", class: "col-span-1" },
    { name: "Beautiful Destinations", class: "col-span-2 md:col-span-1" },
    { name: "Skyscanner", class: "col-span-2 md:col-span-1" }
  ];

  const mediaLogos = [
    { name: "The New York Times", class: "col-span-1" },
    { name: "TechCrunch", class: "col-span-1" },
    { name: "Business Insider", class: "col-span-1" },
    { name: "USA Today", class: "col-span-1" },
    { name: "Skift", class: "col-span-1" },
    { name: "Phocus Wire", class: "col-span-1" },
    { name: "Travolution", class: "col-span-1" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
      {/* Partners Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Powered by trusted travel names
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {partnerLogos.map((logo, index) => (
            <div 
              key={index} 
              className={`${logo.class} w-full h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors`}
            >
              <div className="text-gray-400 text-sm">{logo.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          As featured in
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {mediaLogos.map((logo, index) => (
            <div 
              key={index}
              className={`${logo.class} w-full h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors`}
            >
              <div className="text-gray-400 text-sm">{logo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;