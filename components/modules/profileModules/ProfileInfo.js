"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { editProfile } from "@/services/queries";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

function ProfileInfo() {
  const [formData, setFormData] = useLocalStorage("userProfileData", {
    email: "",
  });

  const [email, setEmail] = useState();
  const [show, setShow] = useState("");
  const [btnVisible, setBtnVisible] = useState(true);

  const emailHandler = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    setFormData((prevData) => ({
      ...prevData,
      email: newEmail,
    }));
  };

  const submitHandler = async () => {
    try {
      const response = await editProfile(formData);

      if (response) {
        console.log("Profile updated successfully:", response);
        const res = response;
        toast.success(res.message);
        console.log(res);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message);
    }
  };

  const phoneNumber = localStorage.getItem("phoneNumber");
  return (
    <>
      <div className="w-[328px] h-[169px] border border-[#00000033] rounded-[10px] p-5 mt-30 bg-white">
        <p className="text-[18px]">اطلاعات حساب کاربری</p>

        <div className="flex justify-between items-center mt-5">
          <span>شماره موبایل</span>
          <span>
            {Number(phoneNumber).toLocaleString("Fa-IR", {
              useGrouping: false,
            })}
          </span>
        </div>

        {show ? (
          <div className="flex justify-between mt-5">
            <input
              onChange={emailHandler}
              value={email || ""}
              type="text"
              placeholder="آدرس ایمیل"
              className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[186px] h-[40px]"
            />

            <button
              onClick={() => {
                submitHandler();
                setShow(false);
                setBtnVisible(true);
              }}
              className="cursor-pointer w-[93px] h-[40px] rounded-[5px] bg-[#28A745] text-white text-[16px]"
            >
              تایید
            </button>
          </div>
        ) : (
          <div className="flex gap-3 mt-10 justify-between">
            {formData.email ? (
              <span> {formData.email}</span>
            ) : (
              <span> ایمیل </span>
            )}

            {btnVisible && (
              <div className="flex gap-2">
                <Image
                  src="/svg/edit-2.svg"
                  alt="edit"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                />
                <button
                  onClick={() => {
                    setShow(true);
                    setBtnVisible(false);
                  }}
                  className="text-[#009ECA] text-[14px] cursor-pointer"
                >
                  افزودن
                </button>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between  "></div>
      </div>
    </>
  );
}

export default ProfileInfo;
