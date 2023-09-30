import React from 'react';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa'; // Import React icons

const Skills = () => {
  const skillsList = [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    // Add more skills and their respective icons here
  ];

  return (
    <section className="bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsList.map((skill, index) => (
          <div key={index} className="flex items-center">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
