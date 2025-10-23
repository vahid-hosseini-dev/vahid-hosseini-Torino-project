import { useState, useEffect } from "react";
import MyToursCard from "../modules/MyToursCard";
import api from "@/services/config";
import convertToJalali from "@/utils/FormatJalaliDate";
import { ThreeDots } from "react-loader-spinner";

function MyTours() {
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/basket");

        const {
          title,
          fleetVehicle,
          startDate,
          endDate,
          id,
          price,
          origin,
          destination,
        } = res.data;

        setTourData({
          title,
          fleetVehicle,
          startDate,
          endDate,
          id,
          price,
          origin,
          destination,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!tourData) {
    return <div><ThreeDots/></div>;
  }

  return (
    <div>
      <MyToursCard
        title={tourData.title}
        fleetVehicle={tourData.fleetVehicle}
        startDate={convertToJalali(tourData.startDate)}
        endDate={convertToJalali(tourData.endDate)}
        id={tourData.id.slice(0, 6)}
        price={tourData.price}
        origin={tourData.origin.name}
        destination={tourData.destination.name}
      />
    </div>
  );
}

export default MyTours;
