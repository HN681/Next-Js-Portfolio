import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Company A',
      role: 'Full-stack Developer',
      date: 'Jan 2020 - Present',
      accomplishments: [
        'Led a team of developers in delivering high-impact projects.',
        'Developed and maintained web applications using modern tech stacks.',
        'Achieved a 20% increase in website performance through optimization efforts.',
      ],
    },
    {
      company: 'Company B',
      role: 'Front-end Developer',
      date: 'May 2018 - Dec 2019',
      accomplishments: [
        'Designed and implemented responsive user interfaces for web applications.',
        'Collaborated with cross-functional teams to meet project goals.',
        'Received the "Outstanding Performance" award for exceptional work on a critical project.',
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{experience.company}</h3>
          <p className="text-gray-600">{experience.role}</p>
          <p className="text-gray-600">{experience.date}</p>
          <ul className="list-disc list-inside ml-6 mt-2">
            {experience.accomplishments.map((accomplishment, i) => (
              <li key={i}>{accomplishment}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
