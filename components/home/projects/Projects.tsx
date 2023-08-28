import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Telefric",
    imgSrc: "project-imgs/telefric.png",
    code: "https://github.com/ammmarr",
    projectLink: "https://app.telefreik.com",
    tech: ["React", "TailWind CSS", "Typescript"],
    description:
      "Worked with a team of developers, designers,and testers in developing this application.I enjoyed working in more of a encouraging team enviroment.",
    modalContent: (
      <>
        <p>
          Telefric is a startup in Egypt looking making transportation methods much more convinient
        </p>
        <p>
          I worked with a set of Teams as Designers, Back end engineers, and of course a team of Front end developers
        </p>

        <p>
          I enjoyed working on this project because there were are alot of challenges with the previos code and design
        </p>
        <p>
          I made sure that figma desings are translated into pixel perfect quality ={">"}
        </p>
        <p>{' '}</p>
        <p>
          - I was working with in this application by React, Typescript
        </p>

        <p>- I Implemented and read alot of libraries documantion to make sure that my website is working as expected</p>








      </>
    ),
  },
  {
    title: "Wilma",
    imgSrc: "project-imgs/resturant.png",
    code: "https://github.com/ammmarr/FreelancingResturantApp",
    projectLink: "https://lnkd.in/d2Hjc2Te",
    tech: ["NextJS", "MongoDb", "Typescript", "SASS Modules", "Framer-motion"],
    description:
      "First freelancing project for an italian Resturant owner. A Resturant app for resturant owners. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          Wilma is a real-time Resturant Application for resturant owners.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of NextJS for the mobile app,
          connected to a Nextjs api Routes, with data stored in MongoDB,
          demo deployed on Vercel.
        </p>

        <p>
          What i really struggled with at first was connecting the database, Turns out Nextjs Had alot of problems saving and Running Mongoose, Needles to say everything is solved now :)
        </p>
        <p>
          here are more info why I chosen what I have chosen ={">"}
        </p>
        <p>{' '}</p>
        <p>
          - I have chosen to build this application using the latest NextJS for its unique features
          as  SSR, SEO optimization, and Images handling and responisvness
        </p>
        <p>
          - used framer motion to add some cool interactive animations

        </p>

        <p>- used JWT for protecting routes and admin login  </p>
        <p>
          - used MonogDB AS the Main DataBase

        </p>
        <p>
          - used SASS Modules for styling and responsiveness

        </p>
        <p>
          - used Formik and Yup for form validation and handling

        </p>
        <p>- I surely practiced the SOLID princibles for writing clean and maintainable code</p>







      </>
    ),
  },
  {
    title: "Movies surfer",
    imgSrc: "project-imgs/movies.png",
    code: "https://github.com/ammmarr/movies-surfer",
    projectLink: "https://ammmarr.github.io/movies-surfer/",
    tech: ["React", "Redux", "SCSS", "Firebase"],
    description:
      "A movies application for searching and Adding movies to save for watch later, with fully functional user authintication ).",
    modalContent: (
      <>
        <p>
          Movies surfer is an open source application for searching and adding movies to their watch later list
        </p>
        <p>
          This is a movie application built completely on React, TypeScript.
          I used Firebase( Authentication and FireStore ) for a quick and interactive app.
        </p>
        <p>
          Adding to that, I used Redux for state management and Redux thunk for API Calls management,

        </p>
        <p>
          Needless to say, the whole app is responsive, and used SASS for the styles
          I would appreciate any feedback,
          {":)"}
        </p>
      </>
    ),
  },
  {
    title: "Sorting algorithms visualizer",
    imgSrc: "project-imgs/sortAlgo.png",
    code: "https://github.com/ammmarr/sorting-algorithms-visualizer",
    projectLink: "https://ammmarr.github.io/sorting-algorithms-visualizer/",
    tech: ["React", "Typescript", "Redux", "SCSS"],
    description:
      "From its name, Its a the main sorting algorithsm visualization application",
    modalContent: (
      <>

        <p>
          This application is basically a way of visualizing the main Sorting algorithms,
        </p>
        <p>
          I consider this one of the most challenging projects I have ever worked on,
        </p>
        <p>
          I really enjoyed building it despite all the challenges I had to face during the process of developing it,
          from animating and implementing the algorithms to designing and visualizing them,
        </p>
        <p>
          I have utilized the latest React18 technologies with Redux for managing the state
        </p>
      </>
    ),
  },

  {
    title: "Mini Projects",
    imgSrc: "project-imgs/mProj.png",
    code: "https://github.com/ammmarr/mini-projects-project",
    projectLink: "https://ammmarr.github.io/mini-projects-project/",
    tech: ["React", "Javascript", "SASS"],
    description:
      "Just a Merged all the practicing projects i built when i was starting out 🌈",
    modalContent: (
      <>
        <p>Alright, I know this seems so easy</p>
        <p>
          Point is,I put this project just to show i used to spend days even week on something the could last me five minutes now.
        </p>
        <p>You are probably wondering how is that a good thing, let me tell why</p>
        <p>
          When i started out I started asking people and engineers that i look up to in this field,
          They all agreed one Thing
        </p>
        <p>
          {""} Get Your hands dirty, and throw youself in the ocean if you dont know how to swim, and this is a skill game not knowledge game {""}
        </p>
        <p>
          to answer the question of why I puy intended to put this my projects list, is that those 10 projects are the projects who I struggled with the most, these are the projects taught me the most about the enviroment that I am gonna be living if I am gonna pursue this career, the certainity of every bug is gonna be fixed if you just stayed consistent.
        </p>
        <p>
          I hope this was inspirational enough to hire me, just kidding :) ,
          here are the list of projects it includes.
        </p>

        <p>-

          Markdown Editor

        </p>
        <p>
          -Budget Calculator

        </p>
        <p>
          -Weather App

        </p>
        <p>
          -calculator

        </p>
        <p>
          -Pomodoro Timer

        </p>
        <p>
          -Quick

        </p>
        <p>
          -Tenzies game

        </p>
        <p>
          -Random Quote

        </p>
        <p>
          -Drum Machine

        </p>
        <p>
          -Simple temp counter

        </p>

      </>
    ),
  },
];
