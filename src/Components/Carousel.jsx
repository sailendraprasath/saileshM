/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const Carousel = ({ slides, intervalTime = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  // Auto slide logic
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === length - 1 ? 0 : currentSlide + 1
      );
    }, intervalTime);

    return () => clearInterval(autoSlide);
  }, [currentSlide, length, intervalTime]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-56 sm:h-72 md:h-[400px] lg:h-[400px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
        onClick={prevSlide}
      >
        <FaAnglesLeft />
      </button>

      {/* Next button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
        onClick={nextSlide}
      >
        <FaAnglesRight />
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-rose-400" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
