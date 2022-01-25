import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

function Container() {
  return (
    <div>
      <div className="w-full bg-white">
        <div className="max-w-7xl p-6 pt-0 md:p-16 md:pt-0 m-auto">
          <HeroComponent />
        </div>
      </div>
      <div className="w-full bg-black m-auto">
        <div className="max-w-7xl p-6 pt-0 md:p-16 md:pt-0">
          {/* <Projects />
      <About /> */}
        </div>
      </div>
    </div>
  );
}

function HeroComponent() {
  return (
    <div className="w-full flex flex-wrap flex-row">
      <div className="w-full mt-24">
        <Image src="/logo.svg" alt="" width={60} height={60} />
      </div>
      <div className="w-full xl:w-1/2 mt-20 xl:mt-80 ">
        <h1 className="text-center xl:text-left text-3xl leading-9">
          Hi, I am Sparsh, a{" "}
          <span className="font-bold underline decoration-4 underline-offset-4 decoration-amber-400">
            Product Designer
          </span>{" "}
          with <b>technical prowess.</b>
        </h1>

        <div className="mt-2 text-center xl:text-left">
          Currently, a HCI Student at University of Maryland, College Park.
        </div>
        <div className="text-center xl:text-left text-neutral-500">
          Previously, a Senior UI developer with 2.5 years of experience.
        </div>
      </div>

      <div className="w-full mt-20 xl:mt-0 xl:w-1/2">
        <div className="relative">
          <div className="image-wrapper text-xl font-bold -rotate-[20deg] absolute z-10 top-20 left-5">
            Ingredients for crafting delicious products.
          </div>
          <div className="w-2/3 m-auto xl:w-full image-wrapper">
            <Image
              src="/jars.png"
              alt="two jars with containing design and tech tool icons"
              layout="fill"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <h2 className="mt-44 text-center md:text-left text-2xl md:text-4xl text-white font-serif">
        Projects
      </h2>
      <div className="w-full mt-6 flex flex-wrap flex-row">
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
