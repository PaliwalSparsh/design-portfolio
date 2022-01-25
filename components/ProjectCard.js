import { useWindowSize } from "../utils/hooks";

function ProjectCard(props) {
  const { width } = useWindowSize();
  const isSmallScreen = width <= 768;

  return (
    <div className="mt-16 w-full md:w-80 md:mr-16 inline-block">
      <div className="text-xl font-bold text-white">{props.title}</div>
      <div className="text-base">
        <span className={props.orgColor}>{props.org}</span>
        <span className="text-neutral-500">–{props.year}</span>
      </div>
      <div
        className="mt-2 md:mt-4 bg-neutral-900 rounded-2xl md:w-80 md:h-80"
        style={
          isSmallScreen
            ? {
                height: `${width - 48}px`,
              }
            : {}
        }
      >
        {/* <Image src={props.imageSrc} alt={props.imageAlt} width={240} height={240} /> */}
      </div>
      <div className="mt-2 md:mt-4 text-base text-neutral-500 leading-5">{props.description}</div>
    </div>
  );
}

export default ProjectCard;
