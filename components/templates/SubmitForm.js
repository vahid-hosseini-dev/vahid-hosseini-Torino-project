"use client";

import submitFormSchema from "@/schemas/submitFormSchema";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import OtpInput from "react18-input-otp";
import CheckOtp from "@/utils/CheckOtp";
import { useContext } from "react";
import UserContext from "@/context/userContext";

function SubmitForm() {
  const { phoneNumber } = useContext(UserContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(submitFormSchema),
    defaultValues: { otpCode: "" },
  });

  const onSubmit = (data) => {
    CheckOtp(phoneNumber, data.otpCode);
  };

  return (
    <div>
      <p className="text-center text-[22px] mb-5">کد تایید را وارد کنید.</p>

      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="otp" className="text-right mb-5">
          کد تایید به شماره {`${phoneNumber}`} ارسال شد
        </label>

        <Controller
          name="otpCode"
          control={control}
          render={({ field }) => (
            <OtpInput
              value={field.value}
              onChange={field.onChange}
              numInputs={6}
              containerStyle={{
                display: "flex",
                flexDirection: "row-reverse",
                gap: "2px",
              }}
              inputStyle={{
                width: "50px",
                height: "50px",
                textAlign: "center",
                fontSize: "1.5rem",
                border: "1px solid rgba(0,0,0,0.25)",
                borderRadius: "6px",
                outline: "none",
              }}
            />
          )}
        />

        <p className="text-sm min-h-[20px] mt-5 text-red-400 self-start">
          {errors.otpCode?.message}
        </p>

        <button
          type="submit"
          className="transition-all duration-30 ease-in-out cursor-pointer w-[278px] h-[54px] border border-[rgba(0,0,0,0.25)] rounded-[6px] bg-[var(--primary-color)] text-white text-lg mt-2 hover:scale-105"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default SubmitForm;
