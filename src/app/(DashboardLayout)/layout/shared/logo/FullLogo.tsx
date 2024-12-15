import React from "react";
import Image from "next/image";
import Logo from "/public/images/logos/logo.svg";
import Logowhite from "/public/images/logos/light-logo.svg";
import Link from "next/link";
const FullLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={Logo}
        alt="logo"
        width="32"
        className="block dark:hidden rtl:scale-x-[-1]"
      />
      <Image
        src={Logowhite}
        alt="logo"
        width="32"
        className="hidden dark:block rtl:scale-x-[-1]"
      />
    </Link>
  );
};

export default FullLogo;
