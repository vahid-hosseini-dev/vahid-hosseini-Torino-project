import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <Image
        src={"/img/header.png"}
        alt="header"
        width={400}
        height={400}
        className="w-[390px] h-[119px] my-6"
      />
    </div>
  );
}

export default Header;
