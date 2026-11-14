import type { StaticImageData } from "next/image";
import ecommerce from "@/assets/project4.jpg";
import learning from "@/assets/project2.jpg";
import portfolio from "@/assets/project3.png";

export const profile = {
  name: "Amith Prabha",
  role: "Software Engineer",
  specialty: "Backend & Distributed Systems",
  location: "Dubai, UAE",
  availability: "Immediately available",
  email: "amithprabha007@gmail.com",
  phone: "+971 56 626 1235",
  phoneHref: "tel:+971566261235",
  linkedin: "https://www.linkedin.com/in/amith-prabha",
  github: "https://github.com/amithprabha",
};

export type Experience = { company: string; role: string; location: string; dates: string; highlights: string[] };
export const experiences: Experience[] = [
  {
    company: "Probability Gaming", role: "Software Developer · Backend & Distributed Systems",
    location: "Goa, India", dates: "Aug 2024 — Aug 2026",
    highlights: [
      "Architected distributed backend microservices for 7+ enterprise production applications using NestJS, .NET Core, PHP, and MySQL, sustaining 99.9% operational uptime.",
      "Built RESTful APIs and asynchronous processing pipelines in C# / ASP.NET Core and NestJS for high-concurrency transactions.",
      "Engineered precision computation engines and real-time state management for transaction-critical platforms.",
      "Reduced API latency by 25% through query optimization, composite indexing, and table partitioning in MySQL and SQL Server, preventing deadlocks during peak loads.",
      "Integrated Redis caching for session tokens and high-read queries to reduce repeated I/O and improve throughput.",
      "Containerized services with Docker and established automated testing and CI/CD routines with GitHub Actions.",
    ],
  },
  {
    company: "Keralabhushanam", role: "Technical Solutions Engineer",
    location: "India", dates: "Jul 2021 — Jul 2024",
    highlights: [
      "Implemented web automation frameworks for recurring operational tasks, content synchronization, and reporting.",
      "Built resilient scraping pipelines to extract, parse, and ingest structured multi-source data into central databases.",
      "Led website engineering and maintenance, improving frontend performance and responsiveness and integrating REST APIs.",
      "Translated business requirements into technical architectures, API contracts, and database schemas with engineering and product leads.",
      "Investigated data integration bottlenecks and built automated verification routines to improve system interoperability.",
    ],
  },
  {
    company: "Aesthetix Edutech", role: "Software Developer Intern · Backend / Python",
    location: "Kochi, India", dates: "Apr 2023 — May 2023",
    highlights: [
      "Engineered Python API endpoints and relational database validation for internal administrative tools.",
      "Authored Swagger/OpenAPI documentation and automated unit tests to identify and fix integration defects.",
    ],
  },
];

export type SkillGroup = { name: string; skills: string[] };
export const skillGroups: SkillGroup[] = [
  { name: "Backend", skills: ["C#", ".NET / ASP.NET Core", "Entity Framework Core", "Node.js", "NestJS", "Python", "FastAPI", "Flask", "PHP", "Laravel", "Microservices", "REST APIs", "Webhooks"] },
  { name: "Automation", skills: ["BeautifulSoup", "Selenium", "Scrapy", "Playwright", "Headless Browsers", "ETL Pipelines", "Dynamic Content Crawling"] },
  { name: "Frontend", skills: ["TypeScript", "JavaScript (ES6+)", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Pixi.js", "JSON", "Responsive Design", "Web Portal Architecture"] },
  { name: "Databases", skills: ["SQL Server / T-SQL", "MySQL", "PostgreSQL", "Redis", "Schema Design", "Complex Joins", "Index Tuning", "ACID Transactions", "Eloquent ORM"] },
  { name: "DevOps", skills: ["Docker", "Docker Compose", "Git", "GitHub Actions", "CI/CD", "Linux", "Postman", "Swagger / OpenAPI", "xUnit", "Jest", "JIRA", "Agile / Scrum", "Salesforce"] },
];

export type Project = { title: string; category: string; description: string; stack: string[]; image?: StaticImageData; diagram?: "gateway" | "attendance" };
export const projects: Project[] = [
  { title: "Enterprise Microservice API Gateway", category: "Backend engineering", description: "A modular ASP.NET Core API gateway with rate limiting, centralized logging, and JWT authentication. Entity Framework Core connects indexed SQL Server repositories, with services deployed through Docker Compose.", stack: ["C# / .NET Core", "Docker", "SQL Server", "Redis"], diagram: "gateway" },
  { title: "AI Automated Attendance System", category: "Automation & computer vision", description: "An automated biometric authentication platform using computer vision models and MySQL schemas to replace manual roll-call processes.", stack: ["Python", "Computer Vision", "REST APIs", "MySQL"], diagram: "attendance" },
  { title: "Ecommerce Digital Product", category: "Full-stack development", description: "An ecommerce project built with the MERN stack, combining a React interface with a Node.js and Express backend and MongoDB data storage.", stack: ["MongoDB", "Express", "React", "Node.js"], image: ecommerce },
  { title: "Interactive E-Learning Platform", category: "Web development", description: "An interactive e-learning web project built with Next.js.", stack: ["Next.js"], image: learning },
  { title: "Portfolio Website", category: "Frontend development", description: "A personal portfolio presenting my work, technical skills, and development experience through a React and Tailwind CSS interface.", stack: ["React", "Tailwind CSS"], image: portfolio },
];

export const education = [
  { degree: "MBA in Artificial Intelligence", institution: "Amrita Vishwa Vidyapeetham", dates: "Aug 2026 — Present", location: "Online / Distance", ongoing: true },
  { degree: "B.Tech in Computer Science and Engineering", institution: "Toc-H Institute of Science and Technology", dates: "2020 — 2024", location: "Kochi, India", ongoing: false },
];
