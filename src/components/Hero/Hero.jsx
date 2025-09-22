import React from "react";
import heroBg from "../../assets/bg-shadow.png"
import heroImg from "../../assets/banner-main.png"

const Hero = () => {
  return (
    <div
      className="hero min-h-screen max-w-7xl mx-auto"
      style={{
        background:{heroBg},
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex flex-col justify-center items-center">
            <img src={heroImg} alt="" />
          <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="mb-5">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn btn-primary">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
