
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
import bookReview from "../app/assets/images/book-review.png";
import busTicketing from "../app/assets/images/bus-ticketing.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Book store",
    icon: "terminal",
    tags: ["Node.js", "Express", "MongoDB"],
    image: bookReview,
    heroImage: bookReview,
    liveLink: "https://my-react-book-house-project.netlify.app/",
    githubLink: "https://github.com/samir-web2526/my-book-review-project",
    phase: "Completed",
    description:
      "A full-stack book store application where users can browse, review, and manage books with a seamless UI and robust backend.",
    descriptionExtended:
      "Built with Node.js and Express for the server, MongoDB as the database, and a React frontend. Features include book listing, individual book details, user reviews, and CRUD operations for managing the book catalog.",
    metrics: {
      performance: "92/100",
      uptime: "99.5%",
    },
    techStack: [
      { name: "Node.js", role: "Runtime", icon: "dns" },
      { name: "Express", role: "Backend Framework", icon: "hub" },
      { name: "MongoDB", role: "Database", icon: "storage" },
      { name: "React", role: "Frontend", icon: "web" },
    ],
    stats: {
      stars: "12",
      forks: "4",
      language: "JavaScript",
    },
  },
  {
    id: "2",
    title: "Bus-ticketing-system",
    icon: "layers",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Express"],
    image: busTicketing,
    heroImage: busTicketing,
    liveLink: "https://bus-ticket-booking-frontend-six.vercel.app/",
    githubLink:
      "https://github.com/samir-web2526/bus-ticket-booking-frontend",
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