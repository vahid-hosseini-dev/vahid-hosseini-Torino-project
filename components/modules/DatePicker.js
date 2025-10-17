"use client";
import { formatDateForAPI } from "@/utils/FormatDate";
import Image from "next/image";
import React from "react";
import { DatePicker } from "zaman";

function DatePickerComponent({ onDateChange }) {
  return (
    <div className="flex items-center justify-center gap-2 w-[328px] h-[47px] bg-white border border-[#00000026] rounded-xl">
      <Image
        className="w-[18px] h-[18px]"
        src={"/svg/calender.svg"}
        alt="calender"
        width={18}
        height={18}
      />

      <span className="text-[16px] text-[#00000080]">تاریخ :</span>

      <DatePicker
        onChange={(e) => {
          const isoDate = formatDateForAPI(e?.value);
          if (isoDate) {
            onDateChange(isoDate);
          } else {
            console.error("تاریخ معتبر نیست.");
          }
        }}
      />
    </div>
  );
}

export default DatePickerComponent;
