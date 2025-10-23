import { useState, useEffect } from "react";
import Image from "next/image";

function MyToursCard({
  title,
  fleetVehicle,
  startDate,
  endDate,
  id,
  price,
  destination,
  origin,
}) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const today = new Date();
    const endDateObj = new Date(endDate);

    if (today < endDateObj) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  }, [endDate]);

  return (
    <>
      <div className="relative flex flex-col justify-around w-[328px] h-[202px] border border-[#00000033] rounded-[10px] pt-5 mt-30 bg-white">
        <div className="flex justify-around items-center">
          <div className="flex items-center">
            <Image
              src="/svg/sun-fog.svg"
              alt="tour"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <span className="text-[12px]">{title}</span>
          </div>
          <div className="flex items-center">
            {fleetVehicle === "Airplane" ? (
              <Image
                src="/svg/airplane-t.svg"
                alt="tour"
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
            ) : (
              <Image
                src="/svg/bus.svg"
                alt="tour"
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
            )}
            <span className="text-[12px]">{fleetVehicle}</span>
          </div>
        </div>

        <div className="flex justify-around items-center">
          <span className="text-[14px]">
            {origin} به {destination}
          </span>
          <span className="text-[12px] text-[#00000099]">{startDate} </span>
        </div>
        <div className="flex justify-around items-center">
          <span className="text-[14px]"> تاریخ برگشت</span>
          <span className="text-[12px] text-[#00000099]">{endDate} </span>
        </div>

        <div className="flex items-center justify-around border-t border-[#00000033] py-2">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00000080]">شماره تور</span>
            <span className="text-[12px] border-l border-[#00000033] px-3">
              {id}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00000080]">
              مبلغ پرداخت شده
            </span>
            <span className="text-[12px]">{price} تومان</span>
          </div>
        </div>

        {completed ? (
          <div className="absolute bg-[#28A7454D] text-[#28A745] text-[6px] w-[47px] h-[15px] rounded-[27px] flex items-center justify-center left-2 top-2 ">
            به اتمام رسیده
          </div>
        ) : (
          <div className="absolute bg-[#D1B9004D] text-[#D1B900] text-[6px] w-[47px] h-[15px] rounded-[27px] flex items-center justify-center left-2 top-2 ">
            در حال برگزاری
          </div>
        )}
      </div>
    </>
  );
}

export default MyToursCard;
