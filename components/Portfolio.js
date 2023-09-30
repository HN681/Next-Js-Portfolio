import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      screenshot: '/project1.png', // Replace with the actual image path
      demoLink: 'https://example.com/project1', // Replace with the actual demo link
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      screenshot: '/project2.png', // Replace with the actual image path
      demoLink: 'https://example.com/project2', // Replace with the actual demo link
    },
    // Add more projects as needed
  ];

  return (
    <div>
    
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              screenshot={project.screenshot}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
                