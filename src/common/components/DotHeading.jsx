import React from 'react';

const DotHeading = () => {
  return (
    <div className="border border-gray-900 p-4 rounded-lg  bg-[#0D1418]" >
      <div className="flex items-center">
        {/* First ellipse with color #EF3E36 */}
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        
        {/* Second ellipse with color #EEAA2B */}
        <div className="w-3 h-3 bg-yellow rounded-full mr-2"></div>
        
        {/* Third ellipse with color #1BEFA0 */}
        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>

        {/* Title on the right */}
        <h1 className="text-xl font-semibold m1-6">
          <span className="text-white text-25 font-semibold leading-10	tracking-[0.05em] text-left">
            TITLE
          </span>
        </h1>
      </div>
    </div>
  );
};

export default DotHeading;
