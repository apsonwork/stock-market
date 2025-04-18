import React from 'react';

const AdSection: React.FC = () => {
  return (
    <div className="bg-[#F8FAFD] p-4 rounded-lg mt-4">
      <div className="text-center text-gray-500 text-sm mb-2">Advertisement</div>
      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <img 
          src="/images/ad.jpeg" 
          alt="Advertisement" 
          className="w-full h-[250px] object-cover"
        />
      </div>
    </div>
  );
};

export default AdSection; 