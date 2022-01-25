import Link from "next/link";

function Header() {
  return (
    <>
      {/* <header className="w-full mt-28 flex flex-wrap flex-col items-center md:flex-row md:content-between">
        <Link href="/">
          <a className="mb-4 md:mb-0 text-2xl text-white font-bold">Sparsh Paliwal</a>
        </Link>
      </header> */}
    </>
  );
}

function Footer() {
  return <></>;
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
