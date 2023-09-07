import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressiveDisclosure = () => {
  const [revealed, setRevealed] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when the element enters the viewport
  });

  // Function to handle revealing content when in view
  const revealContent = () => {
    if (inView) {
      setRevealed(true);
    }
  };

  return (
    <div className="py-8">
      <div
        ref={ref}
        className={`transition-opacity duration-500 ease-in-out ${revealed ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: '200px' }} // Adjust the height as needed
        onLoad={revealContent}
        onScroll={revealContent}
      >
        {revealed ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Progressive Disclosure Section</h2>
            <p className="text-gray-700">
              Here, you can gradually reveal information about yourself as users scroll down the page,
              keeping them engaged and curious.
            </p>
            {/* Add more content to reveal */}
            <p className="text-gray-700">
              Additional details about your skills, experiences, or any other information you'd like to share
              can be gradually revealed in this section.
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProgressiveDisclosure;
              