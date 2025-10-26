import api from "@/services/config";
import Image from "next/image";
import ReserveButton from "@/components/modules/ReserveButton";
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

  const {
    image,
    title,
    startDate,
    endDate,
    insurance,
    capacity,
    fleetVehicle,
    price,
  } = data;

  return (
    <div className="flex flex-col md:flex-row justify-start items-center mt-15 md:my-50">
      <div>
        <Image
          src={image}
          alt="tour"
          width={400}
          height={400}
          className="w-[330px] h-[220px] rounded-xl"
        />
      </div>
      <div className="flex mt-5 items-center md:flex-col md:mx-10 ">
        <span className="text-2xl ml-10 md:mx-0">{title}</span>
        <span className="text-[15px]">
          {formatTourDuration(startDate, endDate)}
        </span>
      </div>
      <div>
        <div className="flex justify-between text-[#7D7D7D] text-[13px] mt-5 ">
          <Image src={"/svg/user-tick.svg"} alt="icon" width={14} height={14} />
          <span>تورلیدر از مبدا</span>
          <Image src={"/svg/map.svg"} alt="icon" width={14} height={14} />
          <span>برنامه سفر</span>
          <Image
            src={"/svg/medal-star.svg"}
            alt="icon"
            width={14}
            height={14}
          />
          <span>تضمین کیفیت</span>
        </div>

        <div className="flex mt-5 justify-between">
          <Image src={"/svg/bus.svg"} alt="icon" width={14} height={14} />
          <span className="mr-2 ml-7">حمل و نقل</span>
          <Image
            src={"/svg/profile-2user.svg"}
            alt="icon"
            width={14}
            height={14}
          />
          <span className="mr-2 ml-12">ظرفیت</span>
          <Image src={"/svg/security.svg"} alt="icon" width={14} height={14} />
          <span className="mr-2">بیمه</span>
        </div>
        <div className="flex item-center justify-between gap-10 mt-2">
          <span>{fleetVehicle}</span>
          <span>{capacity}</span>
          <span>{insurance ? "بیمه مسافرتی" : "شامل بیمه نمی شود"}</span>
        </div>

        <ReserveButton
          className="transition-all duration-300 ease-in-out hover:scale-105 w-[154px] h-[42px] cursor-pointer rounded-[10px] bg-[#28a745] text-center text-[20px] text-white"
          divClassName="flex items-center justify-between my-5 gap-5"
          priceClass="text-[#009eca] text-[24px]"
          textClass="text-[10px]"
          title={title}
          price={price}
          startDate={startDate}
          endDate={endDate}
          tourId={params.tourId}
          redirectTo={"checkout"}
          buttonName={"رزرو و خرید"}
        />
      </div>
    </div>
  );
}

export default TourDetails;
