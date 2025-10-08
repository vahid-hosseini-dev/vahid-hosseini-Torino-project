import Image from "next/image";
import React from "react";

function Card({ data }) {
  const { title, price, image, options } = data;

  return (
    <div className="flex flex-col justify-start w-[327px] h-[277px] m-5 bg-white border border-[#0000001F] rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-250 ease-in-out">
      <Image
        className="w-[327px] h-[160px]"
        src={image}
        alt="arbil"
        width={1000}
        height={1000}
      />
      <div className="p-2">
        <div className="flex flex-col justify-between mb-2 border-b border-[#0000001F]">
          <p className="text-xl mb-2">{title}</p>
          <p className="text-[#282828B2] text-[15px]">
            {options[0] + " - " + options[1]}{" "}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button className="transition-all duration-30 ease-in-out hover:scale-105 w-[99px] h-[29px] cursor-pointer rounded-sm bg-[var(--primary-color)] text-center text-[15px] text-white ">
            رزرو
          </button>
          <div>
            <span className="text-[var(--complementry)]">
              {Number(price).toLocaleString("fa-IR")}
            </span>
            <span> تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
