import React from "react";
import Services from "./Services";

const Hero = () => {
  return (
    <section className="text-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold primary-color">
        A.M FABRICATORS AND ENGINEERING WORKS
      </h1>
      <p className="text-lg text-white-400 mt-3 font-medium">
        Engineering your vision into reality.
      </p>
      <Services />
    </section>
  );
};

export default Hero;
