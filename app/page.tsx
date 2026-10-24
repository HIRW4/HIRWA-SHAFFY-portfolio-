"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCard from "./component/projectcard";


const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PHP",
  "MySQL",
  "Git",
];


const projects = [
  {
    number: "01",
    title: "Recipe Hub",
    description:
      "A project for exploring recipes and practicing clean, easy-to-use page layouts.",
    technologies: ["HTML", "CSS", "PHP"],
  },
  {
    number: "02",
    title: "Smart ATM",
    description:
      "A PHP practice project with PIN login, balance checking, deposits, and withdrawals.",
    technologies: ["PHP", "Sessions", "CSS"],
  },
  {
    number: "03",
    title: "Student Registration",
    description:
      "A registration form for collecting student details and selecting courses.",
    technologies: ["PHP", "HTML", "CSS"],
  },
];

const navigation = ["Home", "About", "Skills", "Projects"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-blue-500 selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-5"
        >
          <a
            href="#home" className="flex items-center gap-1" 
            onClick={() => setMenuOpen(false)}
           
          >
           
  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 text-xl font-extrabold text-white shadow-lg shadow-blue-500/30">
    HS
  </span>
            Hirwa<span className="text-blue-400">Shaffy</span>
            <span className="text-blue-400">.</span>
          </a>
 
    


          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navigation-links"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/15 px-3 py-2 text-sm transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? "Close ✕" : "Menu ☰"}
          </button>

          <div
            id="navigation-links"
            className={`${
              menuOpen ? "flex" : "hidden"
            } w-full flex-col gap-2 pt-5 md:flex md:w-auto md:flex-row md:gap-8 md:pt-0`}
          >
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="rounded px-2 py-2 text-sm font-medium text-zinc-300 transition hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
   
        <section
          id="home"
          className="relative isolate scroll-mt-24 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-10 -z-10 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
          />

          <div className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Welcome to my portfolio
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                Hi, I’m Hirwa
                <span className="block text-blue-400">Shaffy.</span>
              </h1>

              <h2 className="mt-6 text-xl font-medium text-zinc-200 sm:text-2xl">
                Software Development Student
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-zinc-400">
                I’m learning to turn ideas into useful websites. I enjoy
                building clean interfaces, exploring backend development,
                and improving my skills through practical projects.
              </p>

            </div>
            <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <Image
      src="/hirwa.jpg"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover"
      style={{
        objectPosition: "center 30%",
        transform: "scale(1.6)",
        transformOrigin: "center 30%",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
  </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6 shadow-2xl shadow-blue-950/30 sm:p-8">
                <div
                  aria-hidden="true"
                  className="mb-8 flex gap-2 border-b border-white/10 pb-5"
                >
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    developer.ts
                  </span>
                </div>

                <pre className="overflow-x-auto font-mono text-sm leading-8 text-zinc-300 sm:text-base">
                  <code>
                    <span className="text-purple-400">const</span>
                    {" developer = {\n"}
                    {"  name: "}
                    <span className="text-green-400">
                      &quot;Hirwa Shaffy&quot;
                    </span>
                    {",\n"}
                    {"  focus: "}
                    <span className="text-green-400">
                      &quot;Web Development&quot;
                    </span>
                    {",\n"}
                    {"  learning: "}
                    <span className="text-blue-400">true</span>
                    {",\n"}
                    {"  building: "}
                    <span className="text-blue-400">true</span>
                    {"\n};"}
                  </code>
                </pre>

                <div className="mt-8 flex items-center gap-3 rounded-xl border border-blue-400/15 bg-blue-400/5 px-4 py-3 text-sm text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Learning. Practicing. Building.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-white/10 bg-zinc-900/40"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Get to know me
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                About Me
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                Curious about technology.
                <br />
                Motivated by what I can build.
              </p>
            </div>

            <div className="space-y-5 leading-8 text-zinc-400">
              <p>
                I’m Hirwa Shaffy, a Level 4 Software Development student.
                I’m developing my skills in frontend and backend development
                through hands-on practice.
              </p>
              <p>
                I work with technologies such as HTML, CSS, JavaScript, PHP,
                and MySQL, and I’m exploring React and Next.js to build
                modern web applications.
              </p>
              <p>
                My goal is to become a skilled software developer who
                creates useful, accessible, and easy-to-use applications.
              </p>
            </div>
          </div>
        </section>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <ProjectCard
      key={project.number}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
    />
  ))}
</div>


        {/* SKILLS */}
        <section
          id="skills"
          className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            My toolkit
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-zinc-400">
            Technologies I’m learning and using in my projects.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 motion-reduce:transform-none"
              >
                <span className="font-mono text-xs text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="scroll-mt-24 border-t border-white/10 bg-zinc-900/40"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Learning through practice
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              My Projects
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              A selection of projects from my software development journey.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 motion-reduce:transform-none"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-4xl font-bold text-zinc-700 transition group-hover:text-blue-400">
                      {project.number}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                      Practice project
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Hirwa Shaffy.</p>
          <a href="#home" className="transition hover:text-blue-400">
         Engineered with React, TypeScript & Tailwind CS
          </a>
        </div>
      </footer>
    </div>
  );
}