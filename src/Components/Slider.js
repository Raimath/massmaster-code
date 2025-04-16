import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const images = [
    
    "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469242/DSC04808_cugwoy.webp",
    "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469278/DSC05390_wh308q.webp",
    "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469247/DSC04592_gqcca8.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const sliderRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-slide only when slider is visible
  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(goToNext, 3000);
    }
    return () => clearInterval(interval);
  }, [isVisible]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  return (
    <div className="slider-wrapper" ref={sliderRef}>
      <div className="slider-background">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>

      <div className="slider-buttons">
        <button className="arrow left" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="arrow right" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
