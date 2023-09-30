import React from 'react';

const Services = () => {
  const servicesList = [
    {
      title: 'Web Development',
      description: 'We create modern, responsive, and user-friendly websites tailored to your needs.',
    },
    {
      title: 'Mobile App Development',
      description: 'From iOS to Android, we build native and cross-platform mobile apps that stand out.',
    },
    {
      title: 'Software Consulting',
      description: 'Our expertise in software architecture and strategy helps you make informed decisions.',
    },
    // Add more services as needed
  ];

  return (
    <section className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {servicesList.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
          