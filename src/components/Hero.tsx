import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/banner-bg.jpg)] bg-cover lg:bg-[url(/banner-bg.jpg)]"
      style={{
        backgroundSize: "30%",
        backgroundPosition: "left 200px top 140px",
      }}
    >
      <Navbar />
      <div className="container grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-60px)]">
        {/* Left Section (hidden on large screens) */}
        <div className="hidden lg:block"></div>

        {/* Right Section: Hero Text */}
        <div className="flex justify-center items-center text-center lg:text-left px-6">
          <div>
            <p
              data-aos="zoom-out-up"
              className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-bold leading-tight"
            >
              I'm
            </p>
            <p
              data-aos="zoom-out-up"
              className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-bold leading-tight"
            >
              Muhammad Hanzala
            </p>
            <p
              data-aos="zoom-out-up"
              className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-bold leading-tight"
            >
              Farooque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
