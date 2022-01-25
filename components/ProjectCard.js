import { useWindowSize } from "../utils/hooks";
import Image from "next/image";

function ProjectCard(props) {
  return (
    <div className="w-full sm:w-1/2 xl:w-80 mt-12 sm:mh-8 xl:mr-16 inline-block">
      <div className="text-xl font-bold text-white">{props.title}</div>
      <div className="text-base">
        <span className="text-[#ffd60A]">{props.org}</span>
        <span className="text-neutral-500">–{props.year}</span>
      </div>

      <a href={props.link}>
        <div className="mt-4 xl:w-80 h-80 flex bg-neutral-900 rounded-2xl hover:shadow-lg hover:rotate-[3deg]">
          <div className="w-3/5 xl:w-4/5 m-auto image-wrapper" style={props.imageStyle || {}}>
            <Image src={props.imageSrc} alt={props.imageAlt} layout="fill" className="image" />
          </div>
        </div>
      </a>

      <div className="mt-2 xl:mt-4 text-base text-neutral-500 leading-5">{props.description}</div>
    </div>
  );
}

export default ProjectCard;

// 1. Responsive
// 2. Floating icons
// 3. Linking pages
// 4. Think of a way to do layout and spacing
