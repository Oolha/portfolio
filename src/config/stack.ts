import React from "react";
import { IconType } from "react-icons";
import styles from "../components/Tools/Tools.module.css";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiReactquery,
  SiGit,
  SiVercel,
  SiGooglecloud,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiMui,
  SiFramer,
} from "react-icons/si";
import { StackCategory } from "../types/stack";

const createIcon = (Icon: IconType, className: string) => {
  return React.createElement(Icon, { className: styles[className] });
};
export const techStack: StackCategory[] = [
  {
    category: "Programming Languages",
    tools: [
      { name: "JavaScript", icon: createIcon(SiJavascript, "jsIcon") },
      { name: "TypeScript", icon: createIcon(SiTypescript, "tsIcon") },
      { name: "HTML5", icon: createIcon(SiHtml5, "htmlIcon") },
      { name: "CSS3", icon: createIcon(SiCss3, "cssIcon") },
    ],
  },
  {
    category: "Technologies & Libraries",
    tools: [
      { name: "ReactJS", icon: createIcon(SiReact, "reactIcon") },
      { name: "Redux", icon: createIcon(SiRedux, "reduxIcon") },
      { name: "Next.js", icon: createIcon(SiNextdotjs, "nextIcon") },
      { name: "Node.js", icon: createIcon(SiNodedotjs, "nodeIcon") },
      { name: "Express.js", icon: createIcon(SiExpress, "expressIcon") },
      { name: "Tailwind CSS", icon: createIcon(SiTailwindcss, "tailwindIcon") },
      { name: "React Query", icon: createIcon(SiReactquery, "reactQueryIcon") },
      { name: "Material UI", icon: createIcon(SiMui, "muiIcon") },
      { name: "Framer Motion", icon: createIcon(SiFramer, "framerIcon") },
    ],
  },
  {
    category: "Development Tools",
    tools: [
      { name: "Git", icon: createIcon(SiGit, "gitIcon") },
      { name: "Vercel", icon: createIcon(SiVercel, "vercelIcon") },
      { name: "Google Cloud", icon: createIcon(SiGooglecloud, "googleIcon") },
      { name: "MongoDB", icon: createIcon(SiMongodb, "mongoIcon") },
      { name: "Postman", icon: createIcon(SiPostman, "postmanIcon") },
      { name: "Figma", icon: createIcon(SiFigma, "figmaIcon") },
    ],
  },
];
