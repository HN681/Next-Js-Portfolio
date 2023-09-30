// index.js
import React from 'react';
import ScrollTrigger from '../components/ScrollTrigger';
import SpecialistSection from '../components/SpecialistSection';
import ProjectSection from '../components/Project';
import SectionWithCards from '../components/SectionWithCards';




const Home = () => {
  return (
    <div>
      <ScrollTrigger />
      <SpecialistSection />
      <ProjectSection/>
      <SectionWithCards />
      
      {/*  rest of your content */}
    </div>
  );
};

export default Home;