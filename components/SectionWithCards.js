import React from 'react';
import { RiReactjsLine } from 'react-icons/ri'; // Import React icon for React.js
import { FaNodeJs, FaPython } from 'react-icons/fa'; // Import icons for Next.js and Python
import ProgressBar from './ProgressBar'; // Create ProgressBar component separately

const SectionWithCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {/* Card 1: Next.js */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
          <RiReactjsLine className="text-2xl" />
        </div>
        <ProgressBar name="Next.js" progress={90} />
      </div>

      {/* Card 2: Next.js */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
          <RiReactjsLine className="text-2xl" />
        </div>
        <ProgressBar name="Next.js" progress={80} />
      </div>

      {/* Card 3: Python */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
          <FaPython className="text-2xl" />
        </div>
        <ProgressBar name="Python" progress={60} />
      </div>
    </div>
  );
};

export default SectionWithCards;
