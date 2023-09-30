// pages/services.js

import Header from '../components/Header';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Services from '../components/Service';
import Resume from '../components/Resume';



const ServicesPage = () => {
  // Your services page content goes here

  return (
    <div>
      <Header />
      <Skills/>
      <Portfolio />
      <Experience />
      <Services/>
      <Resume/>
      {/* Your Services page content */}
    </div>
  );
};

export default ServicesPage;
