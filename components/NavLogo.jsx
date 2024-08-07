import Link from "next/link";

const NavLogo = () => {
  return (
    <>
      <Link href="/" className="mx-4">
        <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-b from-[#007991] to-[#77FFD6] cursor-pointer">
          A
        </h1>
      </Link>
    </>
  );
};

export default NavLogo;
