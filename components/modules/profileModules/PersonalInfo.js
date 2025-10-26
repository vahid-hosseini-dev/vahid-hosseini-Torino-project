"use client";

import { editProfile } from "@/services/queries";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useLocalStorage } from "@/hooks/useLocalStorage";

function PersonalInfo() {
  const [formData, setFormData] = useLocalStorage("userFormData", {
    firstName: "",
    lastName: "",
    nationalCode: "",
    gender: "",
    birthDate: "",
    fullName: "",
  });

  const [show, setShow] = useState("");
  const [btnVisible, setBtnVisible] = useState(true);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      const [first, last] = value.split(" ");

      setFormData((prevData) => ({
        ...prevData,
        firstName: first || "",
        lastName: last || "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submitHandler = async () => {
    try {
      const response = await editProfile(formData);

      if (response) {
        console.log("Profile updated successfully:", response);
        const res = response;
        toast.success(res.message);
        console.log(res);

        return res;
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="w-[328px] md:w-[800px] h-auto border border-[#00000033] rounded-[10px] p-5 bg-white my-3">
        <div className="flex justify-between">
          {show ? (
            <p className="text-[18px]">ویرایش اطلاعات شخصی</p>
          ) : (
            <p className="text-[18px]"> اطلاعات شخصی</p>
          )}
          {btnVisible ? (
            <div className="flex gap-2">
              <Image
                src="/svg/edit-2.svg"
                alt="edit"
                width={12}
                height={12}
                className="w-[12px] h-[12px]"
              />
              <button
                onClick={() => {
                  setShow(true);
                  setBtnVisible(false);
                }}
                className="text-[#009ECA] text-[14px] cursor-pointer"
              >
                ویرایش اطلاعات
              </button>
            </div>
          ) : null}
        </div>

        {show ? (
          <>
            <div className="flex flex-col gap-3 justify-between items-center mt-5">
              <input
                onChange={changeHandler}
                type="text"
                placeholder="نام و نام خانوادگی"
                name="fullName"
                value={formData.fullName}
                className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
              />
              <input
                onChange={changeHandler}
                type="text"
                placeholder="کد ملی"
                name="nationalCode"
                value={formData.nationalCode}
                className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
              />
              <input
                onChange={changeHandler}
                type="text"
                placeholder="جنسیت"
                name="gender"
                value={formData.gender}
                className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
              />
              <input
                onChange={changeHandler}
                type="text"
                placeholder="تاریخ تولد"
                name="birthDate"
                value={formData.birthDate}
                className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
              />
            </div>

            <div className="flex justify-between mt-5">
              <button
                onClick={() => {
                  submitHandler();
                  setShow((prev) => !prev);
                  setBtnVisible((prev) => !prev);
                }}
                className="cursor-pointer w-[138px] h-[40px] rounded-[5px] bg-[#28A745] text-white text-[16px]"
              >
                تایید
              </button>
              <button
                onClick={() => {
                  setShow((prev) => !prev);
                  setBtnVisible((prev) => !prev);
                }}
                className=" cursor-pointer w-[138px] h-[40px] rounded-[5px] bg-white text-[#28A745] border border-[#28A745] text-[16px]"
              >
                انصراف
              </button>
            </div>
          </>
        ) : (
          <div>
            <div className="flex justify-between items-center my-5">
              {formData.firstName || formData.lastName ? (
                <span>
                  {" "}
                  {`نام و نام خانوادگی : ${formData.firstName} ${formData.lastName}`}
                </span>
              ) : (
                <div>
                  <span> نام و نام خانوادگی : </span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center my-5">
              {formData.nationalCode ? (
                <span> {`کد ملی : ${formData.nationalCode}`} </span>
              ) : (
                <div>
                  <span> کد ملی : </span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center my-5">
              {formData.gender ? (
                <span>{`جنسیت : ${formData.gender}`}</span>
              ) : (
                <div>
                  <span>جنسیت : </span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center my-5">
              {formData.birthDate ? (
                <span> {formData.birthDate}</span>
              ) : (
                <div>
                  <span> تاریخ تولد : </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfo;
