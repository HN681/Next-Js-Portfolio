import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="bg-blue-500 p-8 text-white">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Your Name</h1>
          <p className="text-lg">Full-stack Developer</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg mt-8 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
            Hire Me
          </button>
        </div>
      </header>
      {/* Hero Introduction */}
      <div className="bg-gray-100 p-8">
        <p className="text-lg">
          🚀 Passionate Developer at Your Service! 🚀
          <br />
          Let's collaborate and turn your vision into a digital masterpiece.
        </p>
      </div>
    </div>
  );
};

export default Header;
