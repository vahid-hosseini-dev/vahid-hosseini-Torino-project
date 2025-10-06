import otpModalSchema from "@/schemas/otpModalSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";

function LogInModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(otpModalSchema) });

  return (
    <div className="w-full h-full bg-black/5 backdrop-blur-xs fixed top-0 left-0 z-50 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-11 w-[358px] h-[362px] rounded-[20px] bg-white drop-shadow-2xl">
        <Image width={35} height={35} src="/svg/cross.svg" alt="cross" className="absolute top-3 left-3" />
        <p className="text-center text-[22px]">ورود به تورینو</p>
        <form className="flex flex-col justify-center">
          <label htmlFor="phone" className="text-right mb-2">شماره موبایل خود را وارد کنید</label>
          <input
            id="phone"
            className="border border-[rgba(0,0,0,0.25)] w-[278px] h-[54px] p-2 rounded-[6px] outline-0 mb-10"
            type="text"
            placeholder="٤٢٥٣ *** ٠٩١٢ "
            label="شماره موبایل خود را وارد کنید"
          />
          <button className="w-[278px] h-[54px] border border-[rgba(0,0,0,0.25) rounded-[6px] bg-[var(--primary-color)] text-white text-lg">
            ارسال کد تایید
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogInModal;
