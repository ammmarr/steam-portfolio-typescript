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
    title: "EGT-Soft",
    position: "Software Engineer",
    time: "2022 - 2023",
    location: "Remote",
    description:
      "I help build and scale Web Applications For Various clients across the globe.",
    tech: [
      "NextJs",
      "React",
      "Redux",
      "SASS",
      "Git",
      "GitHub",

    ],
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
