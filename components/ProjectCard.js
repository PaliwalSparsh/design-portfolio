import Image from "next/image";
import clsx from "clsx";

function ProjectCard(props) {
  const isVRProject = props.title === "VR for Education";
  const isStudySpace = props.title === "Study Space";
  const isOtherProject = !isVRProject && !isStudySpace;
  return (
    <div className="w-full sm:w-[48%] xl:w-80 mt-12 sm:mh-8 xl:mr-16 inline-block">
      <div className="text-xl font-bold text-white">{props.title}</div>
      <div className="text-base">
        <span className="text-[#ffd60A]">{props.org}</span>
        <span className="text-neutral-500">–{props.year}</span>
      </div>

      <a href={props.link}>
        <div className="mt-4 xl:w-80 h-80 flex bg-neutral-900 rounded-2xl hover:shadow-lg hover:rotate-[3deg]">
          <div
            className={clsx("m-auto image-wrapper", {
              "w-[65%] sm:w-1/2 xl:w-full": isVRProject,
              "w-[40%] md:w-1/3 xl:w-1/2": isStudySpace,
              "w-4/5 md:w-3/5 xl:w-4/5": isOtherProject,
            })}
          >
            <Image src={props.imageSrc} alt={props.imageAlt} layout="fill" className="image" />
          </div>
        </div>
      </a>

      <div className="mt-2 text-base leading-5 xl:mt-4 text-neutral-500">{props.description}</div>
    </div>
  );
}

export default ProjectCard;
