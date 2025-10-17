import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={"/img/header.png"}
        alt="header"
        width={400}
        height={400}
        className="w-[390px] h-[119px] my-6"
      />
      <h3 className="text-[16px] text-[#595959] mb-2">
        <span className="text-[#28a745]"> تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </h3>
    </div>
  );
}

export default Header;
