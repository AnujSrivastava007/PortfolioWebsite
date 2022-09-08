import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/youtube.png";
import property from "../public/assets/projects/movie.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          
        <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='https://youtube-project-six.vercel.app/'
            tech='Next JS'
          />
        <ProjectItem
            title='Property Finder'
            backgroundImg={property}
            projectUrl='https://mov-verse.netlify.app/'
            tech='React JS'
          />
        <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='https://youtube-project-six.vercel.app/'
            tech='Next JS'
          />
        <ProjectItem
            title='Property Finder'
            backgroundImg={property}
            projectUrl='https://mov-verse.netlify.app/'
            tech='React JS'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
