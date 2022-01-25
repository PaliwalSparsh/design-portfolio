import Link from "next/link";

function Header() {
  return (
    <>
      {/* <header className="flex flex-col flex-wrap items-center w-full mt-28 md:flex-row md:content-between">
        <Link href="/">
          <a className="mb-4 text-2xl font-bold text-white md:mb-0">Sparsh Paliwal</a>
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
