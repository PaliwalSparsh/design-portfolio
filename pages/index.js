import { useWindowSize } from "../utils/hooks";

import ProjectCard from "../components/ProjectCard";

function Container() {
  return (
    <>
      <div className="w-full bg-white grid-lines">
        <div className="p-6 pt-0 m-auto max-w-7xl xl:p-16 xl:pt-0">
          <HeroComponent />
        </div>
      </div>
      <div className="w-full m-auto text-white bg-[#0E0E0E]">
        <div className="p-6 pt-0 m-auto max-w-7xl xl:p-16 xl:pt-0">
          <Projects />
          <About />
        </div>
      </div>
    </>
  );
}

function HeroComponent() {
  return (
    <div className="flex flex-row flex-wrap w-full">
      <div className="mx-auto mt-10 xl:mt-11 xl:w-full xl:mt-24">
        <Image src="/logo.svg" alt="" width={48} height={48} />
      </div>

      <div className="w-full mt-20 xl:mt-20 xl:w-1/3">
        <div className="relative">
          <div className="w-2/3 mx-auto sm:w-2/3 xl:w-full image-wrapper">
            <Image
              src="/photo.png"
              alt="photo of website author."
              layout="fill"
              className="image"
            />
          </div>
        </div>
      </div>

      <div className="self-center w-full mt-8 xl:pl-28 xl:w-2/3 xl:mt-20">
        <h1 className="text-4xl font-bold text-center xl:text-left">
          Hi, I am Sparsh, a <span className="bg-[#ffd60A]"> Product Designer </span> with technical
          prowess.
        </h1>

        <div className="mt-2 text-2xl font-bold text-center text-gray-500 xl:text-left">
          Currently, a HCI Student at University of Maryland, College Park. Previously, a Senior UI
          developer with 2.5 years of experience.
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <h2 className="pt-24 mt-5 text-2xl font-bold text-center sm:text-left xl:text-3xl">
        🥘 &nbsp;Projects
      </h2>
      <div className="flex flex-row flex-wrap w-full sm:justify-between xl:justify-start">
        <ProjectCard
          title="FormA11y"
          link="https://www.sparshpaliwal.in/form.html"
          org="Adobe Research"
          year="WIP"
          imageSrc="/formA11y.png"
          imageAlt="A laptop with tool window opened in it."
          description="A tool that helps users to make PDF forms accessible leveraging ML models."
        />
        <ProjectCard
          title="Music Through the Pandemic"
          link="https://www.sparshpaliwal.in/music.html"
          org="Data Visualization Course"
          year="2021"
          imageSrc="/musicPandemic.png"
          imageAlt="An iPad with game window opened in it."
          description="Visualizing – did pandemic affect the kinds of music people listen?"
        />
        {/* Change title of Component Library with caution as it is present in ProjectCard as well. */}
        {/* <ProjectCard
          title="Study Space"
          link="https://www.sparshpaliwal.in/study.html"
          org="Interaction Design Course"
          year="2021"
          imageSrc="/studySpace.png"
          imageAlt="A phone with an app opened in it."
          description="Component library for an app that helps student discover places to study."
        /> */}
        {/* <ProjectCard
          title="VR for Education"
          link="https://www.sparshpaliwal.in/vr.html"
          org="Final Year Project"
          year="2017"
          imageSrc="/vr.png"
          imageAlt="Cardboard VR headset showing users MRI machine."
          description="VR application to help students learn about MRI in a simulated classroom."
        />*/}
        <ProjectCard
          title="Game for Preferences Discovery"
          link="https://www.sparshpaliwal.in/gsoc.html"
          org="Google Summer of Code"
          year="2016"
          imageSrc="/discoveryCat.png"
          imageAlt="A laptop with game window opened in it."
          description="A game to help users learn and try out different digital a11y feature."
        />
        <div className="h-1 w-80"></div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <h2 className="mt-24 text-2xl font-bold text-center sm:text-left sm:text-3xl">
        🙌 &nbsp;About me
      </h2>
      <div className="flex flex-row flex-wrap mt-12 ">
        <div className="w-full sm:w-2/6 xl:w-[25%] image-wrapper">
          <Image src="/dp.png" alt="photo of me" layout="fill" className="rounded-lg image" />
        </div>
        <div className="mt-8 sm:mt-0 sm:w-4/6 xl:w-[75%] sm:pl-12">
          <div>
            For nearly 7 years, I have been designing and developing interfaces. Of these, I have
            spent about 2.5 years in the tech industry (healthcare and finance startups) where I
            worked closely with web and mobile user interfaces. During this time, I also
            successfully shipped applications both individually and while leading a team. I am
            heavily influenced by Brett Victor’s work in the field of HCI. I believe having a strong
            grasp of technology, helps a person to understand the possibilities and constraints of
            systems. This knowledge is powerful and useful in delivering novel experiences.
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
          title="Talks at Meetups"
          description="Delivered talks on testing and docker at Mumbai and Pune JS meetups."
          link="https://www.sparshpaliwal.in/talks.html"
        />
        <LinkComponent
          title="Pogo Penguin"
          description="Android game with unintuitive controls which make it challenging."
          link="https://play.google.com/store/apps/details?id=com.discoman.pogopenguin&hl=en_IN&gl=US"
        />
        <LinkComponent
          title="Illustrations"
          description="Artwork including stickers, illustrations, logos and some 3D work."
          link="https://www.sparshpaliwal.in/artwork.html"
        />
        <LinkComponent
          title="Programming"
          description="Opensource contributions to Mozilla, GNOME and processing."
          link="https://docs.google.com/document/d/1nTyCrE-97kGQ_TLkuCqX2_bC1jjDU5Gng-jeTMZWHkU/edit"
        />
        <LinkComponent
          title="Skillshare Class"
          description="Online class published on Skillshare to teach an unique vector artwork effect."
          link="https://www.skillshare.com/classes/Hand-drawn-Feel-for-your-Vector-Artwork/1139803515"
        />
      </LinkContainer>
      <LinkContainer title="Would you like to have a chat?" iconLink="/contactIcon.svg">
        <LinkComponent title="Email" description="sparsh@umd.edu" link="" interactive={false} />
        <LinkComponent title="Phone" description="240.476.0453" link="" interactive={false} />
        <SocialMediaLinkComponent />
      </LinkContainer>
      <div className="mb-32" />
    </>
  );
}

function SocialMediaLinkComponent() {
  return (
    <div className="w-full mt-8 xl:mt-0 sm:w-6/12 xl:w-4/12 xl:pt-6">
      <span className="text-lg font-bold xl:text-xl">Other Platforms</span>
      <div className="w-full mt-1 sm:w-4/5">
        <a
          href="https://twitter.com/paliwalsparsh"
          className="hover:underline hover:decoration-3 hover:decoration-[#ffd60A]"
        >
          Twitter
        </a>
        ,&nbsp;
        <a
          href="https://github.com/PaliwalSparsh"
          className="hover:underline hover:decoration-2 hover:decoration-[#ffd60A]"
        >
          Github
        </a>
        ,&nbsp;
        <a
          href="https://www.linkedin.com/in/sparsh-paliwal/"
          className="hover:underline hover:decoration-2 hover:decoration-[#ffd60A]"
        >
          LinkedIn
        </a>
        ,&nbsp;
        <a
          href="https://www.instagram.com/_discoman/"
          className="hover:underline hover:decoration-2 hover:decoration-[#ffd60A]"
        >
          Instagram.
        </a>
      </div>
    </div>
  );
}

function LinkComponent({ title, description, link, interactive = true }) {
  return (
    <div className="w-full mt-8 xl:mt-0 sm:w-6/12 xl:w-4/12 xl:pt-6">
      {interactive ? (
        <a
          href={link}
          className="text-lg xl:text-xl font-bold hover:underline hover:decoration-4 hover:underline-offset-4 hover:decoration-[#ffd60A]"
        >
          {title}
        </a>
      ) : (
        <span className="text-lg font-bold xl:text-xl">{title}</span>
      )}
      <div className="w-full mt-1 sm:w-4/5">{description}</div>
    </div>
  );
}

function LinkContainer({ title, iconLink, children }) {
  return (
    <div className="w-full p-8 bg-neutral-900 rounded-2xl mt-14">
      <div className="flex flex-wrap items-center w-full mb-2 text-xl font-bold">
        <Image src={iconLink} alt="" width={40} height={40} />
        <span className="w-full mt-4 align-middle xl:mt-0 xl:w-auto xl:ml-4">{title}</span>
      </div>
      <div className="flex flex-row flex-wrap justify-between w-full">{children}</div>
    </div>
  );
}

export default Container;
