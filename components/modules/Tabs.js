"use client";

import Image from "next/image";
import { useState } from "react";

function Tabs({ setCurrentComponent }) {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentComponent(tab);
  };

  return (
    <div className="absolute md:static top-15 flex md:flex-col items-center justify-around md:items-baseline pt-2 md:p-0 w-[328px] md:w-[284px] md:h-[170px] md:border md:right-0 md:mt-42 md:mb-10 md:rounded-[10px] border-b border-[#00000040] md:border-[#00000033] text-[12px] ">
      <div className="flex gap-2 items-center leading-8">
        <button
          className={`cursor-pointer md:text-[14px] md:w-[284px] md:h-[56px] flex items-center ${
            activeTab === "profile"
              ? "text-[#28A745] border-b-2 border-[#28A745] md:bg-[#28A74540] md:rounded-t-[10px]"
              : ""
          }`}
          value={"profile"}
          onClick={() => handleTabClick("profile")}
        >
          <Image
            src={"/svg/profile.svg"}
            alt="profile"
            width={16}
            height={16}
            className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] mr-2 md:mx-3"
          />
          پروفایل
        </button>
      </div>

      <div className="flex gap-2 items-center w-[77px] md:w-[284px] leading-8">
        <button
          className={`cursor-pointer md:text-[14px] md:w-[284px] md:h-[56px] flex items-center  ${
            activeTab === "myTours"
              ? "text-[#28A745] border-b-2 border-[#28A745] md:bg-[#28A74540] "
              : ""
          }`}
          value={"myTours"}
          onClick={() => handleTabClick("myTours")}
        >
          <Image
            src={"/svg/sun-fog.svg"}
            alt="profile"
            width={16}
            height={16}
            className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] md:mx-3 "
          />
          تورهای من
        </button>
      </div>
      <div className="flex gap-2 items-center w-[77px] md:w-[284px]  leading-8">
        <button
          className={`cursor-pointer md:text-[14px] md:w-[284px] md:h-[56px] flex items-center  ${
            activeTab === "transaction"
              ? "text-[#28A745] border-b-2 border-[#28A745] md:bg-[#28A74540] md:rounded-b-[10px] "
              : ""
          }`}
          value={"transaction"}
          onClick={() => handleTabClick("transaction")}
        >
          <Image
            src={"/svg/convert-card.svg"}
            alt="profile"
            width={16}
            height={16}
            className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] md:mx-3 "
          />
          تراکنش ها
        </button>
      </div>
    </div>
  );
}

export default Tabs;
