import React from "react";
import Link from "../atoms/Link/Link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-16 py-8">
      <Link href="/" className="bg-sky-700 p-2 text-white">
        Anasayfa
      </Link>
    </nav>
  );
};

export default Navbar;
