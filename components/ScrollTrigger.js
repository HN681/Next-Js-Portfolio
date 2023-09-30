// components/ScrollTrigger.js
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ScrollTrigger = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  // Define animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Use useEffect to trigger animation once the component has mounted
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  // Apply hero section styles
  const heroStyles = {
    backgroundColor: '#F4F4F4', // Background color
    width: '100%',             // Full width
    minHeight: '80vh',         // Adjust as needed for hero height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',           // Add padding for content
  };

  return (
    <div ref={ref} style={heroStyles}>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800"
      >
        Your Name
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-2 text-lg text-gray-600"
      >
        Tagline or Profession Statement
      </motion.p>
      {/* Add more content or buttons as needed */}
    </div>
  );
};

export default ScrollTrigger;
      