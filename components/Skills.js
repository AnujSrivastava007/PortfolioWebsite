import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import Skillbox from "./blocks/SkillItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skillbox icon={Html} text="html" />
          <Skillbox icon={Css} text="css" />
          <Skillbox icon={Javascript} text="javascript" />
          <Skillbox icon={ReactImg} text="react" />
          <Skillbox icon={Tailwind} text="tailwind" />
          <Skillbox icon={Firebase} text="firebase" />
          <Skillbox icon={Github} text="github" />
          <Skillbox icon={NextJS} text="nextjs" />
          <Skillbox icon={AWS} text="aws" />
          <Skillbox icon={NextJS} text="nextjs" />
          <Skillbox icon={NextJS} text="nextjs" />
          <Skillbox icon={NextJS} text="nextjs" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
