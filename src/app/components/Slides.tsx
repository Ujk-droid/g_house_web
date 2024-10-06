"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Static imports for images
import slide1 from '../public/slide1.jpg';
import slide2 from '../public/slide2p1.jpg';
import slide3 from '../public/slide3p2.jpg';
import slide4 from '../public/slide2p2.jpg';
import slide5 from '../public/slide3p1.jpg';

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [slide1, slide2, slide3, slide4, slide5];

  // Update the slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval); // Clean up the interval
  }, [images.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-2 rounded-lg w-full max-w-4xl">
        {/* Display only the current image */}
        <div className="w-full h-96"> {/* Fixed height (24rem) */}
          <Image
            src={images[currentSlide]}
            alt={`Image ${currentSlide + 1}`}
            width={800}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Slides;
