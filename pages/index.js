// index.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import SpecialistSection from '../components/SpecialistSection';
import ProjectSection from '../components/Project';
import SectionWithCards from '../components/SectionWithCards';




const Home = () => {
  return (
    <div>
      <HeroSection />
      <SpecialistSection />
      <ProjectSection/>
      <SectionWithCards />
      
      {/*  rest of your content */}
    </div>
  );
};

export default Home;