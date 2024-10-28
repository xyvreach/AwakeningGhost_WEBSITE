import React, { useEffect } from 'react';

const InstagramGrid = () => {
  useEffect(() => {
    // This ensures that the Elfsight script is loaded after the component mounts
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto py-16">
      
      <div className="w-full bg-black bg-opacity-80 shadow-lg py-2">
        <h2 className="text-xl font-bold text-white ml-[20%]">INSTAGRAM</h2>
      </div>
      
      <div className="w-full flex justify-center bg-opacity-80 bg-black rounded-lg shadow-lg">
        {/* Elfsight widget div */}
        <div className="elfsight-app-ab36afb5-90b3-4e59-9c7c-ce69324ed32d" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};

export default InstagramGrid;
