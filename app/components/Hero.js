import React from 'react';

const Hero = () => (
  <div className="justify-center md:pt-32 pt-24 lg:pt-40">
    <div className="items-center text-black w-full mx-auto text-center text-l flex flex-col justify-center">
      <h1 className="lg:text-9xl md:text-8xl text-7xl tracking-tight font-bold font-inter-sans">
        I am a Designer &amp;<br className="sm:hidden" /> <span className="inline-block">a Developer.</span>
      </h1>
      <p className="pt-4 w-[320px] text-center font-poppins lg:hidden md:hidden">
        I transform underwhelming interfaces into modern and compelling designs. I create solutions that meet the unique needs of each project.
      </p>
      <p className="pt-4 w-3/4 text-center font-poppins md:block hidden">
        I transform underwhelming interfaces into modern and compelling designs. 
        I create solutions that meet the unique needs of each project. I enjoy being inspired, challenged, and pushed by exciting projects and people. Let's work together!
      </p>
    </div>
  </div>
);

export default Hero;
