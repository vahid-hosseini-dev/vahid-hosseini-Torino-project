import React from "react";
import OriginDestination from "../modules/Origin&Destination";
import DatePicker from "../modules/DatePicker";

function SearchBox() {
  return (
    <div>
      <div className="flex justify-between my-2">
        <OriginDestination pic={"/svg/location.svg"} name={"مبدا"} />
        <OriginDestination pic={"/svg/global-search.svg"} name={"مقصد"} />
      </div>
      <div>
        <DatePicker />
      </div>
      <button className="bg-[#28A745] text-white w-[328px] h-[47px] mb-10 mt-5 rounded-2xl hover:active:scale-90 hover:focus:scale-100  hover:scale-95 transition-all ease-in-out duration-150">
        جستجو
      </button>
      <p className=" text-xl text-right mr-2">همه تور ها</p>
    </div>
  );
}

export default SearchBox;
