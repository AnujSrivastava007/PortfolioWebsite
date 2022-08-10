import React from "react";
import Link from 'next/link';
import Image from "next/image";

const ProjectItem = ({backgroundImg,tech,projectUrl}) => {
  return (
    <div className=" relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-20"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {tech}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <Link href={projectUrl}>
          <p className="text-center px-5 py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
