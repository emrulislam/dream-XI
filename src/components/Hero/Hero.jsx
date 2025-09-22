import React from "react";
import heroBg from "../../assets/bg-shadow.png";
import heroImg from "../../assets/banner-main.png";

const Hero = () => {
  return (
<div
      className="relative bg-black text-white py-16 px-6 rounded-none md:rounded-3xl overflow-hidden max-w-7xl mx-auto my-5"
      style={{
        backgroundImage:`url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-10 rounded-3xl"></div>
      <div className="relative max-w-7xl mx-auto text-center space-y-6">
        <img
          src={heroImg}
          alt="Cricket Logo"
          className="mx-auto w-32 h-32 sm:w-40 sm:h-40 object-contain animate-bounce"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-lg sm:text-xl italic text-gray-300">
          Beyond Boundaries, Beyond Limits
        </p>
        <button className="mt-6 bg-[#e7fe29] text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Hero;
