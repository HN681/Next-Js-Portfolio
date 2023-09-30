import React from 'react';

const ProjectCard = ({ title, description, screenshot, demoLink }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <img src={screenshot} alt={`${title} Screenshot`} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Demo
      </a>
    </div>
  );
};

export default ProjectCard;
