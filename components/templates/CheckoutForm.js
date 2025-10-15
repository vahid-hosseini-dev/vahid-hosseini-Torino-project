"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ReserveButton from "../modules/ReserveButton";
import { useSearchParams } from "next/navigation";
import formatTourDuration from "@/utils/formatTourDuration";

const onSubmit = () => {};

function CheckoutForm() {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const title = searchParams.get("title");
  const tourId = searchParams.get("id");
  const startDate = searchParams.get("start");
  const endDate = searchParams.get("end");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <>
      <div className="flex flex-col items-center justify-center px-5 my-10 w-[328px] h-[359px] border border-[#00000033] rounded-[10px]">
        <div className="flex">
          <Image
            src={"/svg/profile1.svg"}
            alt="passenger"
            width={16}
            height={16}
          />
          <span>مشخصات مسافر</span>
        </div>
        <form
          className="text-[14px] text-[#282828] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="outline-0 w-[287px] h-[50px] rounded-lg border border-[#00000080] my-2 px-2"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          <select
            {...register("gender")}
            className="outline-0 w-[287px] h-[50px] rounded-lg border border-[#00000080] my-2 px-2 bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>

          <input
            className="outline-0 w-[287px] h-[50px] rounded-lg border border-[#00000080] my-2 px-2"
            type="text"
            placeholder="کد ملی"
          />
          <div className="flex items-center w-[287px] h-[50px] rounded-lg border border-[#00000080] my-2 px-2">
            <Image
              src={"/svg/calender.svg"}
              alt="calender"
              width={16}
              height={16}
            />
            <span className="my-auto mx-2">1384</span>
          </div>
        </form>
      </div>
      <div className="border border-[#0000001A] mb-5 rounded-[10px]">
        <div className="flex justify-around items-center border-b border-[#00000050] border-dashed p-5">
          <span className="text-2xl">{title}</span>
          <span className="text-[#282828] text-[16px]">
            {formatTourDuration(startDate, endDate)}
          </span>
        </div>

        <ReserveButton
          className="transition-all duration-300 ease-in-out hover:scale-105 w-[302px] h-[56px] cursor-pointer rounded-[10px] bg-[#28a745] text-center text-[20px] text-white"
          divClassName="flex flex-col-reverse items-center justify-between my-5 gap-5"
          priceClass="text-[#009eca] text-[28px]"
          textClass=" text-[14px]"
          title={title}
          price={price}
          tourId={tourId}
          redirectTo={"#"}
          buttonName={"ثبت و خرید نهایی"}
        />
      </div>
    </>
  );
}

export default CheckoutForm;
