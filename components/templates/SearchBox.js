"use client";

import React, { useState } from "react";
import Destination from "../modules/Destination";
import Origin from "../modules/Origin";
import DatePicker from "../modules/DatePicker";
import OrgCityMenu from "../modules/OrgCityMenu";
import DestCityMenu from "../modules/DestCityMenu";
import api from "@/services/config";
import { useRouter } from "next/navigation";
import { formatDateForAPI } from "@/utils/FormatDate";

function SearchBox() {
  const [origin, setOrigin] = useState({ id: "", name: "" });
  const [destination, setDestination] = useState({ id: "", name: "" });
  const [isOriginMenuOpen, setIsOriginMenuOpen] = useState(false);
  const [isDestMenuOpen, setIsDestMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [tours, setTours] = useState([]);

  const router = useRouter();

  const searchHandler = async () => {
    const formattedDate = selectedDate ? formatDateForAPI(selectedDate) : null;

    const queryParams = new URLSearchParams();
    if (origin.id) queryParams.append("originId", origin.id);
    if (destination.id) queryParams.append("destinationId", destination.id);
    if (formattedDate) queryParams.append("startDate", formattedDate);

    router.push(`/?${queryParams.toString()}`);

    try {
      const response = await api.get("/tour", {
        params: {
          originId: origin.id,
          destinationId: destination.id,
          startDate: formattedDate,
        },
      });

      setTours(response.data);
      console.log("Tour data:", response.data);
    } catch (error) {
      console.error("Error fetching tour data:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <Origin
          isOriginMenuOpen={isOriginMenuOpen}
          setIsOriginMenuOpen={(value) => {
            setIsOriginMenuOpen(value);
            if (value) setIsDestMenuOpen(false);
          }}
          origin={origin}
          setOrigin={setOrigin}
          pic={"/svg/location.svg"}
          name={"مبدا :"}
        />
        <Destination
          isDestMenuOpen={isDestMenuOpen}
          setIsDestMenuOpen={(value) => {
            setIsDestMenuOpen(value);
            if (value) setIsOriginMenuOpen(false);
          }}
          destination={destination}
          setDestination={setDestination}
          pic={"/svg/global-search.svg"}
          name={"مقصد :"}
        />
      </div>
      <div className="relative">
        {isOriginMenuOpen && (
          <div className="absolute top-0 right-0">
            <OrgCityMenu
              searchTerm={origin?.name ?? ""}
              setIsOriginMenuOpen={setIsOriginMenuOpen}
              onSelect={(city) => setOrigin(city)}
            />
          </div>
        )}
        {isDestMenuOpen && (
          <div className="absolute top-0 left-0">
            <DestCityMenu
              searchTerm={destination?.name ?? ""}
              setIsDestMenuOpen={setIsDestMenuOpen}
              onSelect={(city) => setDestination(city)}
            />
          </div>
        )}
      </div>

      <div>
        <DatePicker onDateChange={setSelectedDate} />
      </div>

      <button
        onClick={searchHandler}
        className="cursor-pointer bg-[#28A745] text-white w-[328px] h-[47px] mb-10 mt-5 rounded-2xl hover:active:scale-90 hover:focus:scale-100  hover:scale-95 transition-all ease-in-out duration-150"
      >
        جستجو
      </button>

      <p className="text-xl text-right mr-2">همه تور ها</p>
    </div>
  );
}

export default SearchBox;
