import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Neu Ocean Technologies",
    position: "React Developer",
    time: "2023 - present",
    location: "London - Remote",
    description:
      "Designed, Built, and deployed multiple webiste for various clients, got involved alot in their Backend",
    tech: ["React", "Redux", "tailwind", "Typescript", "React-query"],
  },
  {
    title: "GreenAnt",
    position: "NextJs/React Developer",
    time: "2023 - present",
    location: "The Netherlands - Remote",
    description:
      "Worked with a team of Developers, Designers, and product managers to deliver an amazing website for thestartup.Built and maintained The GreenAnt UI which led to a lot of attraction to investorsTranslated and convertied FIGMA designs to clean maintainable code",
    tech: ["NextJs", "React", "Redux", "tailwind", "Typescript", "React-query"],
  },
  {
    title: "Code Ocean (telefric)",
    position: "Front end (React) Engineer",
    time: "2022",
    location: "Remote",
    description:
      "  During my Time at Code Ocean as a front-end developer, I gained invaluable building, refactoring,debugging, and redesigining websites, collaborating within a dynamic team, and implementing design concepts into functional web applications. This opportunity enhanced my coding skills and provided insights into real-world web development practices.",
    tech: ["React", "Redux", "tailwind", "Typescript", "React-query"],
  },
  {
    title: "EGT-Soft",
    position: "Front end (React) Engineer",
    time: "2022 - 2023",
    location: "Remote",
    description:
      "I help build and scale Web Applications For Various clients across the globe.",
    tech: ["NextJs", "React", "Redux", "SASS", "Git", "GitHub"],
  },
  {
    title: "Independent Freelancer",
    position: "Fullstack/Front End Engineer",
    time: "2021 - 2023",
    location: "Remote",
    description:
      "As an independent full-stack engineer with a front-end focus, I brought 2 years of freelancing prowess to the table. I excelled in crafting dynamic web applications, while my adept client interactions consistently ensured their utmost satisfaction.",
    tech: [
      "NextJs",
      "React",
      "Redux",
      "Typescript",
      "Javascript",
      "MongoDb",
      "Express",
      "Mongoose",
      "NextAuth",
      "Firebase",
      "Cloudinary",
    ],
  },
  {
    title: "Motajer",
    position: "Software Engineer  Internship",
    time: "2022",
    location: "Remote",
    description:
      "  During my internship at Motajer as a front-end developer, I gained invaluable experience in crafting responsive user interfaces, collaborating within a dynamic team, and implementing design concepts into functional web applications. This opportunity enhanced my coding skills and provided insights into real-world web development practices.",
    tech: ["React", "Redux", "tailwind", "Rest ApI"],
  },
];
