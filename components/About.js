import React from "react";
import AboutImg from '../public/assets/about.jpg';
import Image from 'next/image';


const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className=" py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have spent the last 1 year in learning Web Development. I have always had a knack for
            technology and working with computers. In 2021 I started working
            with HTML and CSS and JavaScript to make simple websites. What I thought was just a few small
            websites turned into a love for programming and development.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am
            now spending my time building projects with React JS,NextJS,Backend, Firebase, and
            learning new technologies.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
