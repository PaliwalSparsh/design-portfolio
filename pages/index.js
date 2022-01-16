import Image from "next/image";

function Container() {
  return (
    <div>
      <Introduction />
      <Projects />
      {/* <About /> */}
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
      <div className="mt-6 flex flex-wrap flex-row">
        <Project
          title="FormA11y"
          org="Adobe Research"
          orgColor="red-500"
          year="WIP"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <Project
          title="Game for Discovery of Preferences"
          org="Google Summer of Code"
          orgColor="amber-500"
          year="2016"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <Project
          title="Music Through the Pandemic"
          org="Data Visualisation Course"
          orgColor="purple-500"
          year="2021"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <Project
          title="Component Library"
          org="Interaction Design Course"
          orgColor="purple-500"
          year="2016"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <Project
          title="VR for Education"
          org="Final Year Project"
          orgColor="purple-500"
          year="2016"
          imageSrc="/sketchbook.png"
          imageAlt="/sketchbook.png"
          description="A tool to help designers and developers create and share interactive prototypes."
        />
      </div>
    </>
  );
}

function Project(props) {
  return (
    <div className="mt-16 w-full md:w-1/3">
      <div className="text-xl font-bold text-white">{props.title}</div>
      <div className="text-base">
        <span className={`text-${props.orgColor}`}>{props.org}</span>
        <span className="text-neutral-500">–{props.year}</span>
      </div>
      <div className="mt-2 md:mt-4 bg-neutral-900 rounded-2xl md:w-80 h-80">
        {/* <Image src={props.imageSrc} alt={props.imageAlt} width={240} height={240} /> */}
      </div>
      <div className="mt-2 md:mt-4 text-base text-neutral-500 leading-5">{props.description}</div>
    </div>
  );
}

export default Container;
