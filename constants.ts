import { Project } from './types';

export const PERSONAL_INFO = {
  name: "Praveen Yadav",
  role: "Creative Developer & Student",
  school: "Lucknow Public Schools and Colleges",
  location: "Lucknow, India",
  email: "work.praveenyadav@gmail.com"
};

export const SOCIALS = {
  instagram: "https://www.instagram.com/etherealpraveen/",
  linkedin: "https://www.linkedin.com/in/praveenyadavofficial/",
  github: "https://github.com/praveenyadavofficial"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard 2025",
    category: "Product Design / React",
    year: "2024",
    image: "https://picsum.photos/800/800?random=1",
    description: "A comprehensive overhaul of a high-frequency trading platform focusing on data visualization and reduced cognitive load.",
    stats: [{ label: "Performance", value: "+40%" }, { label: "Retention", value: "+15%" }]
  },
  {
    id: 2,
    title: "Neo-Brutalist E-Comm",
    category: "Frontend / Next.js",
    year: "2024",
    image: "https://picsum.photos/400/400?random=2",
    description: "Experimental e-commerce experience for a streetwear brand.",
    stats: [{ label: "Conversion", value: "4.2%" }]
  },
  {
    id: 3,
    title: "AI Chat Interface",
    category: "UX Research / Prototyping",
    year: "2023",
    image: "https://picsum.photos/800/400?random=3",
    description: "Designing trust and transparency into LLM interfaces.",
    stats: [{ label: "Users", value: "10k+" }]
  },
  {
    id: 4,
    title: "School Portal Redesign",
    category: "UI/UX Case Study",
    year: "2023",
    image: "https://picsum.photos/600/400?random=4",
    description: "Concept design for a modern student management system.",
    stats: [{ label: "Efficiency", value: "+25%" }]
  },
  {
    id: 5,
    title: "Portfolio v1",
    category: "Web Development",
    year: "2022",
    image: "https://picsum.photos/600/400?random=5",
    description: "First iteration of personal portfolio using vanilla JS.",
    stats: [{ label: "Speed", value: "100ms" }]
  }
];