import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

function Container() {
  return (
    <div>
      <Introduction />
      <Projects />
      <About />
    </div>
  );
}

function Introduction() {
  return (
    <>
      <h1 className="mt-20 md:mt-80 text-center md:text-left text-2xl md:text-4xl title-font text-white">
        <span className="font-bold">Hi, I am Sparsh</span>, a{" "}
        <span className="font-bold">Product Designer</span> who loves to solve{" "}
        <span className="font-serif font-bold italic text-red-500 underline decoration-4 decoration-red-500">
          design
        </span>{" "}
        problems,{" "}
        <span className="font-serif font-bold italic text-amber-500 underline decoration-4 decoration-amber-500">
          prototype
        </span>{" "}
        and{" "}
        <span className="font-serif font-bold italic text-blue-500 underline decoration-4 decoration-blue-500">
          code
        </span>
        .
      </h1>
      <div className="mt-8 text-center md:text-left text-white">
        Studying Human-Computer Interaction at University of Maryland, College Park.
      </div>
      <div className="mt-1 text-center md:text-left text-neutral-500">
        Previously, a Senior UI developer @Trusting Social and @Pharmeasy with 2.5 years of
        experience.
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <h2 className="mt-44 text-center md:text-left text-2xl md:text-4xl text-white font-serif">
        Projects
      </h2>
      <div className="w-full mt-6 flex flex-wrap flex-row justify-between md:justify-around lg:justify-between">
        <ProjectCard
          title="FormA11y"
          org="Adobe Research"
          orgColor="text-red-500"
          year="WIP"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <ProjectCard
          title="Game for Preferences Discovery"
          org="Google Summer of Code"
          orgColor="text-amber-500"
          year="2016"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <ProjectCard
          title="Music Through the Pandemic"
          org="Data Visualisation Course"
          orgColor="text-purple-500"
          year="2021"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <ProjectCard
          title="Component Library"
          org="Interaction Design Course"
          orgColor="text-purple-500"
          year="2016"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <ProjectCard
          title="VR for Education"
          org="Final Year Project"
          orgColor="text-purple-500"
          year="2016"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <div className="h-1 w-80"></div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <h2 className="mt-44 text-center md:text-left text-2xl md:text-4xl text-white font-serif">
        About
      </h2>
      <div className="w-full mt-6 flex flex-wrap flex-row justify-between">
        <div className="text-white md:w-2/3">
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum. Lorem ipsum Lorem ipsum Lorem
          ipsum. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.Lorem ipsum Lorem ipsum
          Lorem ipsum. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.Lorem ipsum Lorem
          ipsum Lorem ipsum. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.Lorem ipsum
          Lorem ipsum Lorem ipsum. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.Lorem
          ipsum Lorem ipsum Lorem ipsum. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum.Lorem ipsum Lorem ipsum Lorem ipsum. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum.Lorem ipsum Lorem ipsum Lorem ipsum.Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum.Lorem ipsum Lorem ipsum Lorem ipsum.
        </div>
        <div className="bg-neutral-900 rounded-2xl md:w-80 md:h-80"></div>
      </div>
    </>
  );
}

export default Container;
