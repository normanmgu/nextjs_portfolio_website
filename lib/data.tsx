import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Image from "next/image";

import KPIcon from "@/public/KP-Icon.png";
import AWIcon from "@/public/awlogo.webp";
import UCDavisIcon from "@/public/ucdavislogo.png";

import wordleImg from "@/public/wordle.png";
import doomImage from "@/public/doom.png";
import botImg from "@/public/bot.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Major @ UC Davis",
    location: "Davis, CA",
    description:
      ["Began my journey as a computer science student. I learned the fundamentals of programming and computer science.",],
    icon: <Image className="rounded-full" src={UCDavisIcon} alt="Kaiser Logo"/>,
    date: "2020 - Present",
  },
  {
    title: "Software Engineer @ Aggieworks",
    location: "Davis, CA",
    icon: <Image className="rounded-full" src={AWIcon} alt="Aggieworks Logo"/>,
    description:
      [
        "A school org at UC Davis. Developed web, iOS, and Android applications serving over 35,000 UC Davis students.",
        "Developed a roommate matching app using React Native, TypeScript, Supabase, and SQL databases.",
        "Automated the process of whitelisting application emails, integrating it with Slack and Supabase, improving efficiency by approximately 200%.",
        "Played a pivotal role in onboarding new members by creating comprehensive documentation and providing guidance, simplifying the integration of new talent into the team.",
        "Developed the RoomU algorithm, enhancing user experience by implementing remote procedure calls and efficient caching for roommate swiping in PostgreSQL."
      ],
    date: "January 2023 - Present",
  },
  {
    title: "Software Engineer Intern @ Kaiser Permenante",
    location: "Pleasanton, CA",
    description: [
      "Spearheaded the development of PI-Alerts, an iOS app crucial for monitoring the health of 50+ servers at Kaiser Permanente. Utilized Swift, MS SQL Server, and Node.js to ensure optimal functionality.",
      "Crafted SQL stored procedures and functions to seamlessly manage new server shutdown scheduling features, supported by detailed design documentation.",
      "Innovated by implementing a scheduled shutdown feature in both the Swift version of PI-Alerts and the corresponding React web app."
    ],
    icon: <Image className="rounded-full" src={KPIcon} alt="Kaiser Logo"/>,
    date: "June 2023 - December 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Doom Clone",
    description:
      "A limited doom clone made using Three.js to implement 3D objects. Implemented the first person FOV, \
      controls, blaster, and bullets that replicate how they are in Doom..",
    tags: ["Three.js", "Typescript"],
    imageUrl: doomImage,
  },
  {
    title: "React Wordle",
    description:
      "A clone of Wordle made using React and Typescript. The application state and logic are stored in a Context API. \
       Uses a random word API to fetch a real random 5-letter word in English",
    tags: ["React", "Typescript", "Context API", "Tailwind"],
    imageUrl: wordleImg,
  },
  {
    title: "Slack Bot",
    description:
      "Utilized the Slack API to create a bot to automate the process of whitelisting emails, getting data from a webhook \
      sent from a google form and to a slack channel where it can be approved or rejected and then saved automatically \
      in the database",
    tags: ["Python", "Slack API", "Google Apps Script", "Supabase"],
    imageUrl: botImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "C/C++",
  "Swift",
  "MS SQL Server",
] as const;
