import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src="/profile.jpg"
            alt="Muhammad Huzaifa Hassan"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-3xl font-semibold mb-2">Muhammad Huzaifa Hassan</h1>
          <p className="text-gray-500">Passionate Frontend Developer</p>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">Professional Bio</h2>
        <p className="text-gray-700 mb-4">
          Hello, I'm Muhammad Huzaifa Hassan, a dedicated Frontend Developer with a strong commitment to creating exceptional web experiences. My journey in the world of web development began during my college days, and since then, I've been on a mission to craft user-friendly and visually appealing websites.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Educational Background</h2>
        <p className="text-gray-700 mb-4">
          - Bachelor's Degree in Computer Science, PMAS Arid University, [Year of Graduation]
          <br />
          - Web Development Bootcamp, [Bootcamp Name], [Year of Completion]
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Work Experience</h2>
        <p className="text-gray-700 mb-4">
          - Frontend Developer at [Company Name], [Year Started] - [Year Ended]
          <br />
          - Freelance Web Developer, [Year Started] - Present
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Achievements</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 pl-4">
          <li>Developed and launched several responsive web applications for clients in various industries.</li>
          <li>Received the [Award Name] for outstanding contributions to web development.</li>
          <li>Published articles on web development best practices in [Publication Name].</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Timeline</h2>

        {/* Vertical Timeline */}
        <VerticalTimeline>
          {/* Your Certificate */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
            date="Certificate Date"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="fas fa-graduation-cap"></i>} // Replace with a graduation cap icon or any other suitable icon
          >
            <h3 className="vertical-timeline-element-title">Meta Frontend Developer Certificate</h3>
            <h4 className="vertical-timeline-element-subtitle">Coursera</h4>
            <p>Completed the Meta Frontend Developer specialization on Coursera.</p>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/UR9FNHVWHZJU?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Certificate
            </a>
          </VerticalTimelineElement>

          {/* Add more VerticalTimelineElement components for each milestone */}
        </VerticalTimeline>

        <p className="text-gray-700">
          Feel free to connect with me at [Your Email] or check out my portfolio at [Your Portfolio URL].
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
