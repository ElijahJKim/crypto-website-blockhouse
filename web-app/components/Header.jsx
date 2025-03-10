import Link from "next/link";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <img src={"images/IconBlack.svg"} alt="Logo" />
          </Link>
        </li>
        <li>
          <h1 className="mobile">BHC</h1>
        </li>
        <li>
          <h1 className="tablet">Block House Crypto</h1>
        </li>
      </ul>
      <HiMenuAlt3 />
    </nav>
  );
};

export default Header;
