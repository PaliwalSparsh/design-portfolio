import Image from "next/image";

function Container() {
  return (
    <div className="grid grid-cols-4 gap-y-96 p-8">
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
    </div>
  );
}

function FirstContainer() {
  return (
    <div className="col-span-4">
      <h1 className="text-6xl text-center font-bold text-gray-800">How Pandemic Changed Music?</h1>
    </div>
  );
}

function SecondContainer() {
  return (
    <div className="col-span-4">
      <h1 className="text-6xl text-center font-bold text-gray-800">
        How to find emotions programmatically?
      </h1>
    </div>
  );
}

function ThirdContainer() {
  return (
    <div className="col-span-4">
      <h1 className="text-6xl text-center font-bold text-gray-800">
        Emotion of all songs from 2017 to 2021.
      </h1>
    </div>
  );
}

function FourthContainer() {
  return (
    <div className="col-span-4">
      <h1 className="text-6xl text-center font-bold text-gray-800">
        Pre and post-pandemic emotions.
      </h1>
    </div>
  );
}

function FifthContainer() {
  return (
    <div className="col-span-4">
      <h1 className="text-6xl text-center font-bold text-gray-800">Conclusion</h1>
    </div>
  );
}

export default Container;

{
  /* <div className="hidden max-w-md sm:max-w-full mt-16">
  <div className="h-60 w-full sm:object-cover relative rounded-lg shadow-lg">
    <Image alt="placeholder" layout="fill" src="https://via.placeholder.com/500" />
  </div>
  <p className="mt-8">
    We often associate music with emotions. For example, Uptown Funk is a happy song, Scientist by
    ColdPlay is a sad song.
  </p>
</div>; */
}
