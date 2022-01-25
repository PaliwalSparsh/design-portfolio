import Image from "next/image";
import { useWindowSize } from "../utils/hooks";

import ProjectCard from "../components/ProjectCard";

function Container() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl p-6 pt-0 xl:p-16 xl:pt-0 m-auto">
          <HeroComponent />
        </div>
      </div>
      <div className="w-full bg-black m-auto text-white">
        <div className="max-w-7xl p-6 pt-0 xl:p-16 xl:pt-0 m-auto">
          <Projects />
          <About />
        </div>
      </div>
    </>
  );
}

function HeroComponent() {
  return (
    <div className="w-full flex flex-wrap flex-row">
      <div className="w-full mt-6 xl:mt-24">
        <Image src="/logo.svg" alt="" width={60} height={60} />
      </div>
      <div className="w-full xl:w-1/2 mt-32 xl:mt-[22rem] ">
        <h1 className="text-center xl:text-left text-3xl leading-9">
          Hi, I am Sparsh, a{" "}
          <span className="font-bold underline decoration-4 underline-offset-4 decoration-[#ffd60A]">
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
          <div className="text-xl font-bold -rotate-[20deg] absolute z-10 top-20 left-5">
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
  const { width } = useWindowSize();
  const isTablet = 640 <= width && width <= 1280;
  return (
    <>
      <h2 className="pt-20 text-center sm:text-left text-2xl xl:text-3xl font-serif">
        🥘 Projects
      </h2>
      <div className="w-full flex flex-wrap flex-row sm:justify-between xl:justify-start">
        <ProjectCard
          title="FormA11y"
          link="/"
          org="Adobe Research"
          year="WIP"
          imageSrc="/formA11y.png"
          imageAlt="A laptop with tool window opened in it."
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <ProjectCard
          title="Game for Preferences Discovery"
          link="/"
          org="Google Summer of Code"
          year="2016"
          imageSrc="/discoveryCat.png"
          imageAlt="A laptop with game window opened in it."
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <ProjectCard
          title="Music Through the Pandemic"
          link="/"
          org="Data Visualisation Course"
          year="2021"
          imageSrc="/musicPandemic.png"
          imageAlt="An iPad with game window opened in it."
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <ProjectCard
          title="Component Library"
          link="/"
          org="Interaction Design Course"
          year="2016"
          imageStyle={isTablet ? { width: "35%" } : { width: "50%" }}
          imageSrc="/studySpace.png"
          imageAlt="A phone with app opened in it."
          description="A tool to help designers and developers create and share interactive prototypes."
        />
        <ProjectCard
          title="VR for Education"
          link="/"
          org="Final Year Project"
          year="2016"
          imageStyle={isTablet ? { width: "50%" } : { width: "100%" }}
          imageSrc="/vr.png"
          imageAlt="Cardboard VR headset showing users MRI machine."
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
      <h2 className="mt-24 text-center sm:text-left text-2xl sm:text-3xl font-serif">
        🙌 About me
      </h2>
      <div className="mt-12 flex flex-wrap flex-row ">
        <div className="w-full sm:w-2/6 xl:w-1/5 image-wrapper">
          <Image src="/dp.png" alt="photo of me" layout="fill" className="image" />
        </div>
        <div className="mt-8 sm:mt-0 sm:w-4/6 xl:w-4/5 sm:pl-12">
          <div>
            For nearly 7 years, I have been designing and developing interfaces. Of these, I have
            spent about 2.5 years in the tech industry (healthcare and finance startups) where I
            worked closely with web and mobile user interfaces. This was a I successfully shipped
            applications both individually and while leading a team. I am heavily influenced by
            Brett Victor’s work in the field of HCI. I believe having a strong grasp of technology,
            helps a person to understand the possibilites and constraints of systems. This knowledge
            is powerful and useful in delivering novel experiences.
          </div>
          <div className="mt-4">
            While I am not working, you can find me playing guitar or reading books. Learning new
            things and creating cool stuff is what excites me the most. I have worked on several
            side projects from teaching a course on skillshare to starting a sticker store. However,
            my coolest side project till date is my Youtube channel where i have over 12000
            subscribers. On this channel, I create videos related to learning, creativity and
            productivity.
          </div>
        </div>
      </div>
      <LinkContainer title="Links to Side Projects" iconLink="/linkIcon.svg">
        <LinkComponent
          title="YouTube (12,000 Subscibers)"
          description="Videos related to learning, creativity and productivity."
          link="https://www.youtube.com/c/sparshpaliwal"
        />
        <LinkComponent
          title="Fearch (1000+ Users)  "
          description="Chrome extension to search media on FTP servers across the internet."
          link="https://chrome.google.com/webstore/detail/fearch/kalmlbhhgndofalfencmggfncedfajgj?hl=en"
        />
        <LinkComponent
          title="Pogo Penguin"
          description="Android game with unintuitive controls."
          link="https://play.google.com/store/apps/details?id=com.discoman.pogopenguin&hl=en_IN&gl=US"
        />
        <LinkComponent
          title="Illustrations"
          description="Stickers, illustrations and some 3D work."
          link="https://www.sparshpaliwal.in/artwork.html"
        />
        <LinkComponent
          title="Programming"
          description="Opensource contributions to Mozilla, GNOME and processing."
          link="https://docs.google.com/document/d/1nTyCrE-97kGQ_TLkuCqX2_bC1jjDU5Gng-jeTMZWHkU/edit"
        />
        <LinkComponent
          title="Skillshare Class"
          description="Class taught on Hand-drawn Feel for Vector Artwork."
          link="https://www.skillshare.com/classes/Hand-drawn-Feel-for-your-Vector-Artwork/1139803515"
        />
      </LinkContainer>
      <LinkContainer title="Would you like to have a chat?" iconLink="/contactIcon.svg">
        <LinkComponent title="Email" description="sparsh@umd.edu" link="" />
        <LinkComponent title="Phone" description="240.476.0453" link="" />
        <LinkComponent
          title="Other Platforms"
          description="Twitter, facebook, github, LinkedIn, Instagram."
          link=""
        />
      </LinkContainer>
      <div></div>
    </>
  );
}

function LinkComponent({ title, description, link, properties }) {
  return (
    <div className="w-full mt-8 xl:mt-0 sm:w-6/12 xl:w-4/12 xl:pt-6" style={properties}>
      <a href={link}>
        <div className="text-lg xl:text-xl font-bold hover:underline decoration-4 underline-offset-4 decoration-[#ffd60A]">
          {title}
        </div>
      </a>
      <div className="w-full mt-1 sm:w-4/5">{description}</div>
    </div>
  );
}

function LinkContainer({ title, iconLink, children }) {
  return (
    <div className="w-full bg-neutral-900 p-8 rounded-2xl mt-14">
      <div className="w-full text-xl font-bold mb-2 flex flex-wrap items-center">
        <Image src={iconLink} alt="" width={40} height={40} />
        <span className="w-full mt-4 xl:mt-0 xl:w-auto xl:ml-4 align-middle">{title}</span>
      </div>
      <div className="w-full flex flex-wrap flex-row justify-between">{children}</div>
    </div>
  );
}

export default Container;
