import React from 'react';

const Resume = () => {
  return (
    <section className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Download Resume</h2>
      <p className="text-gray-600">
        Interested in my qualifications? Feel free to download my resume here:
      </p>
      <a
        href="/documents/resume.pdf" // Adjust the path to match your file structure
        download="your_resume.pdf" // Specify the file name when downloading
        className="text-blue-500 hover:underline block mt-2"
      >
        Download Resume (PDF)
      </a>
    </section>
  );
};

export default Resume;
