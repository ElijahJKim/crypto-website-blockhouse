import Link from "next/link";
import React from "react";

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
          <h1>BlockHouse Crypto</h1>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
