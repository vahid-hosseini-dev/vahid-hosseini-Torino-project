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
    <div className="absolute top-15 flex items-center justify-around pt-2 w-[328px] border-b border-[#00000040] text-[12px] ">
      <div className="flex gap-2 items-center w-[77px] leading-8">
        <Image
          src={"/svg/profile.svg"}
          alt="profile"
          width={16}
          height={16}
          className="w-[16px] h-[16px]"
        />
        <button
          className={`cursor-pointer ${
            activeTab === "profile"
              ? "text-[#28A745]  border-b-2 border-[#28A745]"
              : ""
          }`}
          value={"profile"}
          onClick={() => handleTabClick("profile")}
        >
          پروفایل
        </button>
      </div>
      <div className="flex gap-2 items-center w-[77px] leading-8">
        <Image
          src={"/svg/sun-fog.svg"}
          alt="profile"
          width={16}
          height={16}
          className="w-[16px] h-[16px]"
        />
        <button
          className={`cursor-pointer ${
            activeTab === "myTours"
              ? "text-[#28A745] border-b-2 border-[#28A745]"
              : ""
          }`}
          value={"myTours"}
          onClick={() => handleTabClick("myTours")}
        >
          تورهای من
        </button>
      </div>
      <div className="flex gap-2 items-center w-[77px] leading-8">
        <Image
          src={"/svg/convert-card.svg"}
          alt="profile"
          width={16}
          height={16}
          className="w-[16px] h-[16px]"
        />
        <button
          className={`cursor-pointer ${
            activeTab === "transaction"
              ? "text-[#28A745] border-b-2 border-[#28A745]"
              : ""
          }`}
          value={"transaction"}
          onClick={() => handleTabClick("transaction")}
        >
          تراکنش ها
        </button>
      </div>
    </div>
  );
}

export default Tabs;
