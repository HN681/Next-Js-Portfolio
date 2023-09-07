// SpecialistSection.js
import React from 'react';
import { FaReact, FaNodeJs, FaServer } from 'react-icons/fa';

const SpecialistSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* React Specialist Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <FaReact className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">React Specialist</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Next.js Specialist Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <FaNodeJs className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Next.js Specialist</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Backend Specialist Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <FaServer className="text-4xl text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Backend Specialist</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
