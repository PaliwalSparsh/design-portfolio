import Link from "next/link";

function ColorBar() {
  return (
    <div className="flex flex-wrap flex-row relative">
      <div className="bg-red-500 w-1/6 h-12"></div>
      <div className="bg-orange-500 w-1/6 h-12"></div>
      <div className="bg-amber-500 w-1/6 h-12"></div>
      <div className="bg-green-500 w-1/6 h-12"></div>
      <div className="bg-blue-500 w-1/6 h-12"></div>
      <div className="bg-purple-500 w-1/6 h-12"></div>
      <div className="bg-black/5 w-full h-40 absolute backdrop-blur-2xl"></div>
    </div>
  );
}

function Header() {
  return (
    <>
      <ColorBar />
      <header className="w-full mt-28 flex flex-wrap flex-col items-center md:flex-row md:content-between">
        <Link href="/">
          <a className="mb-4 md:mb-0 text-2xl text-white font-bold">Sparsh Paliwal</a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-400">
          <a className="mr-5 hover:text-white">Mains</a>
          <a className="mr-5 hover:text-white">Sides</a>
          <a className="hover:text-white">About</a>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return <></>;
  // <footer className="text-gray-600 body-font">
  //   <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  //     <p className="text-sm md:text-lg text-gray-500 sm:py-2 sm:mt-0 mt-4">
  //       © 2021 Sparsh Paliwal
  //     </p>
  //     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
  //       <a className="text-gray-500 hover:text-blue-500">
  //         <svg
  //           fill="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           className="w-5 h-5 md:w-7 md:h-7"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
  //         </svg>
  //       </a>
  //       <a className="ml-3 text-gray-500 hover:text-blue-500">
  //         <svg
  //           fill="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           className="w-5 h-5 md:w-7 md:h-7"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
  //         </svg>
  //       </a>
  //       <a className="ml-3 text-gray-500 hover:text-amber-500">
  //         <svg
  //           fill="none"
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           className="w-5 h-5 md:w-7 md:h-7"
  //           viewBox="0 0 24 24"
  //         >
  //           <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
  //           <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
  //         </svg>
  //       </a>
  //       <a className="ml-3 text-gray-500 hover:text-blue-500">
  //         <svg
  //           fill="currentColor"
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="0"
  //           className="w-5 h-5 md:w-7 md:h-7"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             stroke="none"
  //             d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
  //           ></path>
  //           <circle cx="4" cy="4" r="2" stroke="none"></circle>
  //         </svg>
  //       </a>
  //     </span>
  //   </div>
  // </footer>
}
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}