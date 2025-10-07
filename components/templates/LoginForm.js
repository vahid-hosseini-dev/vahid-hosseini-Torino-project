"use client"

import loginFormSchema from "@/schemas/loginFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SendOtp from "@/utils/SendOtp";
import { useContext } from "react";
import UserContext from "@/context/userContext";

function LoginForm() {
  const { setPhoneNumber } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema), mode: "onChange" });

  const onSubmit = async (data) => {
    await SendOtp(data.phoneNumber);
    setPhoneNumber(data.phoneNumber);
  };

  return (
    <div>
      <p className="text-center text-[22px] mb-5">ورود به تورینو</p>

      <form
        className="flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="phone" className="text-right mb-5">
          شماره موبایل خود را وارد کنید
        </label>
        <input
          {...register("phoneNumber")}
          id="phone"
          className="border border-[rgba(0,0,0,0.25)] w-[278px] h-[54px] p-2 rounded-[6px] outline-0 mb-5"
          type="text"
          placeholder="٤٢٥٣ *** ٠٩١٢ "
          label="شماره موبایل خود را وارد کنید"
        />
        <p className="text-sm min-h-[20px] mr-5 text-red-400 self-start">
          {errors.phoneNumber?.message}
        </p>
        <button
          type="submit"
          className="transition-all duration-30 ease-in-out cursor-pointer w-[278px] h-[54px] border rounded-[6px] bg-[var(--primary-color)] text-white text-lg mt-2 hover:scale-102"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
