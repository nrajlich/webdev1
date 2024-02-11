import React from 'react';
import Typed from 'react-typed'
const Hero = () => (
  <div className="justify-center md:pt-32 pt-6 lg:pt-32">
    <div className="items-center text-black w-full mx-auto text-center text-l flex flex-col justify-center">
      <h1 className="lg:text-9xl md:text-8xl pr-1 pl-1 text-6xl tracking-tight font-bold font-inter-sans">
        I am a Designer.
      </h1>
      <p className="pt-4 w-[320px] text-center font-poppins lg:hidden md:hidden">
        I transform underwhelming interfaces into modern and compelling designs. I create solutions that meet the unique needs of each project.
      </p>
      <p className="pt-4 w-3/4 text-center lg:w-[1000px] font-poppins md:block hidden">
        I transform underwhelming interfaces into modern and compelling designs. 
        I create solutions that meet the unique needs of each project. I enjoy being inspired, challenged, and pushed by exciting projects and people. Let's work together!
      </p>
      <div>
      <p className="md:text-5xl wsm:text-4xl text-xl font-bold">Sharing projects</p>
      <Typed
      strings={['Web Development solutions', 'Visual Aesthetic' , 'Graphics and more']}
      typedSpeed={120}
      backSpeed={140}
       />
    </div>
    </div>
    
  </div>
);

export default Hero;
