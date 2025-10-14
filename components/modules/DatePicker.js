import Image from "next/image";
import React from "react";

function DatePicker() {
  return (
    <div className="flex items-center justify-center gap-2 w-[328px] h-[47px] bg-white border border-[#00000026] rounded-xl">
      <Image src={"/svg/calender.svg"} alt="calender" width={18} height={18} />
      <span className="text-[16px] text-[#00000080]">تاریخ</span>
    </div>
  );
}

export default DatePicker;
