import { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "VR Store",
    description:
      "A full-stack e-commerce platform for virtual reality headsets and games. Built an immersive shopping experience featuring user authentication, product catalog with advanced filtering, wishlist functionality, and a seamless checkout process. The application includes a responsive UI design and performance-optimized user experience.",
    image: "/images/vr-store.png",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://virtual-headsets.vercel.app/",
    githubLink: "https://github.com/Oolha/virtual-headsets",
  },
  {
    id: "project-2",
    title: "TruScape",
    description:
      "A comprehensive CRM system for vendor management in food delivery operations. Developed an analytics dashboard for real-time business insights, including vendor performance tracking, promotional campaign management, and detailed sales analytics. ",
    image: "/images/crm.png",
    technologies: ["Next.js", "React Query", "TypeScript", "Tailwind CSS"],
    liveLink: "https://crm-true-scape.vercel.app/",
    githubLink: "https://github.com/Oolha/crm-trueScape",
  },
  {
    id: "project-3",
    title: "AquaTrack",
    description:
      "A hydration tracking application that helps users maintain optimal daily water intake. The app calculates personalized hydration goals based on individual parameters like age, weight, and activity level, allowing users to track their daily water consumption and stay healthy. ",
    image: "/images/aqua-track.png",
    technologies: ["React", "Redux", "React Hook Form", "i18next", "ReactTour"],
    liveLink: "https://aqua-track-project.netlify.app/",
    githubLink: "https://github.com/Oolha/aqua-track-project",
  },
  {
    id: "project-4",
    title: "TravelTrucks",
    description:
      "A web application developed for the TravelTrucks company, which specializes in camper van rentals. The app allows users to explore available camper options, read reviews, and make bookings.  ",
    image: "/images/campers.png",
    technologies: ["TypeScript", "React", "Redux", "Redux Toolkit", "Axios"],
    liveLink: "https://travel-trucks2024.netlify.app/",
    githubLink: "https://github.com/Oolha/travel-trucks",
  },
];
