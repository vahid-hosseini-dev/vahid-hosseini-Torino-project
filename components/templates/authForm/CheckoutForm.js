"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import formatTourDuration from "@/utils/FormatTourDuration";
import checkoutFormSchema from "@/schemas/checkoutFormSchema";
import { DatePicker } from "zaman";
import api from "@/services/config";
import { useState } from "react";
import toast from "react-hot-toast";

function CheckoutForm() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const title = searchParams.get("title");
  const tourId = searchParams.get("id");
  const startDate = searchParams.get("start");
  const endDate = searchParams.get("end");

  const onSubmit = async (formData) => {
    const formattedBirthDate = new Date(formData.birthDate)
      .toISOString()
      .split("T")[0];
    console.log(formattedBirthDate);

    try {
      const res = await api.post(
        "/order",
        {
          nationalCode: formData.nationalCode,
          fullName: formData.fullName,
          gender: formData.gender,
          birthDate: formattedBirthDate,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setData(res.data);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(checkoutFormSchema), mode: "onChange" });

  return (
    <>
      <div className="flex flex-col justify-center px-5 mt-25 mb-5 w-[328px] h-[359px] border border-[#00000033] rounded-[10px]">
        <div className="flex">
          <Image
            src={"/svg/profile1.svg"}
            alt="passenger"
            width={24}
            height={24}
          />
          <span className="text-[24px]">مشخصات مسافر</span>
        </div>
        <form
          className="text-[14px] text-[#282828] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("fullName")}
            className="outline-0 w-[287px] h-[50px] rounded-lg border border-[#00000080] my-2 px-2"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          {errors.fullName && (
            <p className="text-red-500 text-[12px]">
              {errors.fullName.message}
            </p>
          )}
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
          {errors.gender && (
            <p className="text-red-500 text-[12px]">{errors.gender.message}</p>
          )}

          <input
            {...register("nationalCode")}
            className="outline-0 w-[287px] h-[50px] rounded-lg border border-[#00000080] my-2 px-2"
            type="text"
            placeholder="کد ملی"
          />
          {errors.nationalCode && (
            <p className="text-red-500 text-[12px]">
              {errors.nationalCode.message}
            </p>
          )}

          <div className="flex items-center w-full h-[50px] rounded-lg border border-[#00000080] my-2 px-2">
            <Image
              src={"/svg/calender.svg"}
              alt="calender"
              width={18}
              height={18}
            />
            <span className="text-[16px] text-[#00000080]">تاریخ تولد :</span>
            <DatePicker onChange={(e) => setValue("birthDate", e.value)} />
            {errors.birthDate && (
              <p className="text-red-500 text-[12px]">
                {errors.birthDate.message}
              </p>
            )}
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

        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-12 my-5">
            <span>قیمت نهایی</span>
            <span className="text-[#009eca] text-[28px]">
              {Number(price).toLocaleString("Fa-IR")}
              <span className="text-[14px] text-black"> تومان</span>
            </span>
          </div>

          <button
            onClick={() => {
              const res = api.get("/truncate");
              toast.success("در حال هدایت به درگاه پرداخت ");
              console.log(res);
            }}
            type="submit"
            className="mb-5 transition-all duration-300 ease-in-out hover:scale-105 w-[302px] h-[56px] cursor-pointer rounded-[10px] bg-[#28a745] text-center text-[20px] text-white"
          >
            ثبت و خرید نهایی
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckoutForm;
