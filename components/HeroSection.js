// HeroSection.js
import React, { useEffect, useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  useEffect(() => {
    // Function to show social icons when scrolled into view
    const handleScroll = () => {
      const socialIcons = document.querySelector('.social-icons');
      if (socialIcons) {
        const windowHeight = window.innerHeight;
        const socialIconsPosition = socialIcons.getBoundingClientRect().top;

        if (socialIconsPosition < windowHeight) {
          setShowSocialIcons(true);
        } else {
          setShowSocialIcons(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex relative">
      {/* Left Side */}
      <div className="flex-1 flex justify-center items-center">
        <div className="text-center">
          {/* Your Name and Tagline */}
          <h1 className="text-5xl font-extrabold text-white mb-4">Your Name</h1>
          <p className="text-lg text-gray-200 font-light">Concise Tagline</p>
          <button className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white rounded-full py-2 px-6 mt-6">
            View Projects
          </button>

          {/* Social Media Icons Below Button */}
          <div
            className={`social-icons mt-6 flex items-center justify-center ${
              showSocialIcons ? 'show' : ''
            }`}
            style={{ animation: 'fadeInUp 1s forwards' }}
          >
            <a href="#" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;