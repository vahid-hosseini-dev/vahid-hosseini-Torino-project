import Image from "next/image";
import React from "react";

function OriginDestination({ pic, name }) {
  return (
    <div className="flex justify-center items-center gap-2 w-[160px] h-[47px] rounded-xl bg-white border border-[#00000026]">
      <Image src={pic} alt="calender" width={18} height={18} />
      <span className="text-[16px] text-[#00000080]">{name}</span>
    </div>
  );
}

export default OriginDestination;
