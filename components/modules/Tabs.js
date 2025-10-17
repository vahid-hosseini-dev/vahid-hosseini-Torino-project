import Image from "next/image";
import React from "react";

function Tabs() {
  return (
    <div className="absolute top-15 flex items-center justify-around my-3 py-3 w-[328px] border-b border-[#00000040] text-[12px]">
      <div className="flex gap-2 items-center w-[77px] ">
        <Image
          src={"/svg/profile.svg"}
          alt="profile"
          width={16}
          height={16}
          className="w-[16px] h-[16px]"
        />
        <span>پروفایل</span>
      </div>
      <div className="flex gap-2 items-center w-[77px] ">
        <Image
          src={"/svg/sun-fog.svg"}
          alt="profile"
          width={16}
          height={16}
          className="w-[16px] h-[16px]"
        />
        <span>تورهای من</span>
      </div>
      <div className="flex gap-2 items-center w-[77px] ">
        <Image
          src={"/svg/convert-card.svg"}
          alt="profile"
          width={16}
          height={16}
          className="w-[16px] h-auto"
        />
        <span>تراکنش ها</span>
      </div>
    </div>
  );
}

export default Tabs;
