import React, { useEffect, useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri'; // Import React icon for React.js
import { FaNodeJs, FaPython } from 'react-icons/fa'; // Import icons for Next.js and Python
import { css } from '@emotion/react'; // Import emotion CSS
import { BarLoader } from 'react-spinners'; // Import BarLoader from react-spinners

const ProgressBar = ({ name, progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (width < progress) {
        setWidth((prevWidth) => prevWidth + 1);
      }
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [progress, width]);

  // CSS for the spinner
  const spinnerCss = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <div className="bg-gray-200 rounded-md p-2">
      <div className="relative h-2 bg-gray-400">
        <div
          className="absolute top-0 left-0 bg-blue-500 h-full rounded-md"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <div className="text-center mt-2">
        <p className="text-sm font-semibold">{name}</p>
        {width < 100 ? (
          <div className="mt-1">
            <BarLoader color="#4F46E5" css={spinnerCss} />
            <p className="text-xs text-gray-600 mt-1">{`${width}%`}</p> {/* Display percentage */}
          </div>
        ) : (
          <p className="text-xs text-gray-600">{`${width}%`}</p>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
