import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  icon: string;
  tags: string[];
  image: string | StaticImageData;
  heroImage?: string | StaticImageData;
  liveLink: string;
  githubLink: string;
  phase?: string;
  description?: string;
  descriptionExtended?: string;
  metrics?: {
    performance: string;
    uptime: string;
  };
  techStack?: {
    name: string;
    role: string;
    icon: string;
  }[];
  stats?: {
    stars: string;
    forks: string;
    language: string;
  };
}

import umcmsImage from "../app/assets/images/umcm.png";
import busTicketing from "../app/assets/images/bus-ticketing.png";
import skillBridgeImage from "../app/assets/images/skill.png";

export const projects: Project[] = [
  {
  id: "1",
  title: "University Medical Center Management System",
  phase: "Full Stack Healthcare Platform",
  icon: "local_hospital",
  image: umcmsImage,
  heroImage: umcmsImage,
  liveLink: "https://university-medical-center-client.vercel.app/", 
  githubLink: "https://github.com/samir-web2526/university-medical-center-full-stack-project",

  description:
    "A full-stack healthcare management system designed for university medical centers to streamline appointments, patient records, prescriptions, and medicine inventory.",

  descriptionExtended:
    "University Medical Center Management System (UMCMS) is a role-based healthcare platform built with Next.js, Express.js, PostgreSQL, and Prisma. It enables students to book appointments online, doctors to manage patient visits and digital prescriptions, and administrators to oversee medicine inventory, notifications, blogs, and user management through a secure dashboard.",

  tags: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Better Auth",
    "Tailwind CSS"
  ],

  metrics: {
    performance: "96+ Lighthouse",
    uptime: "99.9%"
  },

  techStack: [
    {
      name: "Next.js",
      role: "Frontend Framework",
      icon: "web"
    },
    {
      name: "Express.js",
      role: "Backend Framework",
      icon: "hub"
    },
    {
      name: "PostgreSQL",
      role: "Database",
      icon: "storage"
    },
    {
      name: "Prisma",
      role: "ORM",
      icon: "account_tree"
    }
  ],

  stats: {
    stars: "0",
    forks: "0",
    language: "TypeScript"
  }
},
  {
    id: "2",
    title: "SkillBridge",
    phase: "Full Stack Platform",
    icon: "school",
    image: skillBridgeImage,        
    heroImage: skillBridgeImage,
    liveLink: "https://skill-bridge-full-stack-frontend.vercel.app/", 
    githubLink: "https://github.com/samir-web2526/skill-bridge-frontend",
    description:
      "A modern tutor-student marketplace where learners can discover tutors, book sessions, and manage their learning journey seamlessly.",
    descriptionExtended:
      "SkillBridge is a full-stack educational platform featuring authentication, tutor discovery, booking management, secure payments, reviews, and role-based dashboards for students, tutors, and administrators.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
    metrics: {
      performance: "95+ Lighthouse",
      uptime: "99.9%",
    },
    techStack: [
      { name: "Next.js", role: "Frontend Framework", icon: "web" },
      { name: "Node.js", role: "Runtime", icon: "dns" },
      { name: "PostgreSQL", role: "Database", icon: "storage" },
      { name: "Prisma", role: "ORM", icon: "hub" },
    ],
    stats: {
      stars: "0",
      forks: "0",
      language: "TypeScript",
    },
  },
   {
    id: "3",
    title: "Bus-ticketing-system",
    icon: "layers",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Express"],
    image: busTicketing,
    heroImage: busTicketing,
    liveLink: "https://bus-ticket-booking-frontend-six.vercel.app/",
    githubLink: "https://github.com/samir-web2526/bus-ticket-booking-frontend",
    phase: "Completed",
    description:
      "A modern bus ticketing platform that allows passengers to search routes, book seats, and manage their trips online.",
    descriptionExtended:
      "Powered by a Next.js frontend deployed on Vercel, an Express + Node.js REST API, and PostgreSQL for reliable relational data storage. Supports seat selection, route filtering, and booking confirmation workflows.",
    metrics: {
      performance: "95/100",
      uptime: "99.9%",
    },
    techStack: [
      { name: "Next.js", role: "Frontend Framework", icon: "web" },
      { name: "Node.js", role: "Runtime", icon: "dns" },
      { name: "Express", role: "Backend Framework", icon: "hub" },
      { name: "PostgreSQL", role: "Database", icon: "storage" },
    ],
    stats: {
      stars: "18",
      forks: "6",
      language: "TypeScript",
    },
  },
 
];