import React, { useEffect } from 'react';

const InstagramGrid = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto py-16">
      <div className="w-full bg-black bg-opacity-80 shadow-lg py-2 flex items-center justify-between px-[20%]">
        <h2 className="text-xl font-bold text-white">INSTAGRAM</h2>
        <a
          href="https://www.instagram.com/awakeningghost/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold text-sm hover:underline"
        >
          FOLLOW US
        </a>
      </div>
      
      <div className="w-full flex justify-center bg-opacity-80 bg-black  shadow-lg">
        <div className="elfsight-app-ab36afb5-90b3-4e59-9c7c-ce69324ed32d" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};

export default InstagramGrid;
