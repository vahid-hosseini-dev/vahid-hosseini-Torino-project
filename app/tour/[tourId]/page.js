import api from "@/services/config";
import Image from "next/image";
import formatTourDuration from "@/utils/formatTourDuration";

export const revalidate = 10 * 60;

export async function generateStaticParams() {
  const tours = await api.get("/tour");
  const data = tours.data;

  const params = data.map((tour) => ({ tourId: String(tour.id) }));
  return params;
}

async function TourDetails({ params }) {
  const res = await api.get(`/tour/${params.tourId}`);
  const data = res.data;

  console.log(data);
  const {
    image,
    title,
    startDate,
    endDate,
    options,
    insurance,
    capacity,
    fleetVehicle,
    price,
  } = data;

  return (
    <div className="flex flex-col justify-start">
      <div>
        <Image
          src={image}
          alt="tour"
          width={400}
          height={400}
          className="w-[330px] h-[220px]"
        />
      </div>
      <div className="flex justify-between">
        <span>{title}</span>
        <span>{formatTourDuration(startDate, endDate)}</span>
      </div>
      <div>
        <div className="flex justify-between">
          <Image src={"/svg/user-tick.svg"} alt="icon" width={14} height={14} />{" "}
          <span>تورلیدر از مبدا</span>
          <Image src={"/svg/map.svg"} alt="icon" width={14} height={14} />{" "}
          <span>برنامه سفر</span>
          <Image
            src={"/svg/medal-star.svg"}
            alt="icon"
            width={14}
            height={14}
          />
          <span>تضمین کیفیت</span>
        </div>

        <div className="flex justify-between">
          <Image src={"/svg/bus.svg"} alt="icon" width={14} height={14} />{" "}
          <span>حمل و نقل</span>
          <Image
            src={"/svg/profile-2user.svg"}
            alt="icon"
            width={14}
            height={14}
          />
          <span>ظرفیت</span>
          <Image src={"/svg/security.svg"} alt="icon" width={14} height={14} />
          <span>بیمه</span>
        </div>
        <div className="flex justify-between">
          <span>{fleetVehicle}</span>
          <span>{insurance ? "بیمه مسافرتی" : "شامل بیمه نمی شود"}</span>
          <span>{`حداکثر ${capacity.toLocaleString("fa-IR")} نفر`}</span>
        </div>
        <div className="flex justify-between items-center">
          <button className="transition-all duration-30 ease-in-out hover:scale-105 w-[154px] h-[42px] cursor-pointer rounded-[10px] bg-[#28a745] text-center text-[20px] text-white ">
            رزرو
          </button>
          <div>
            <span className="text-[#009eca] text-[24px]">
              {Number(price).toLocaleString("fa-IR")}
            </span>
            <span className="text-[10px]"> تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
