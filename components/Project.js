import React from 'react';

const ProjectSection = () => {
  // Define your project data
  const projects = [
    {
      title: 'E-commerce Web App',
      description: 'An online store for selling products.',
      image: 'replit.svg', // Replace with the path to your project image
    },
    {
      title: 'Personal Portfolio',
      description: 'A showcase of my work and skills.',
      image: 'replit.svg', // Replace with the path to your project image
    },
    {
      title: 'Mobile App',
      description: 'A mobile application for a specific purpose.',
      image: 'replit.svg', // Replace with the path to your project image
    },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
