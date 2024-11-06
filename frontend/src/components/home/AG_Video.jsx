import React from 'react';
import videoSrc from '../../images/IMG_0.mp4';

const AG_Video = () => {
  return (
    <div className="inset-0 flex items-center justify-center bg-transparent">
      <video width="320" height="240" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AG_Video;
