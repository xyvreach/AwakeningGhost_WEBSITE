import React, { useState, useEffect } from 'react';
import slideshow_image1 from '../../images/slideshow_image1.png';
import slideshow_image2 from '../../images/slideshow_image2.png';
import slideshow_image3 from '../../images/slideshow_image3.png';
import bandName from '../../images/bandName_image.jpg';


const BodyBanner = () => {
    const images = [
        slideshow_image1,  // Replace with actual image paths
        slideshow_image2,
        slideshow_image3
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div className="relative h-96 w-full bg-black">
            {/* Slide Images */}
            <img
                src={images[currentImageIndex]}
                alt="Awakening Ghost Banner"
                className="w-full h-full object-cover transition-opacity duration-1000"
            />

            {/* Optional Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                
            </div>
        </div>
    );
};

export default BodyBanner;
