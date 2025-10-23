"use state";
import Context from "@/context/Context";
import { editProfile } from "@/services/queries";
import Image from "next/image";
import { useContext, useState } from "react";

function ProfileInfo() {
  const [mail, setMail] = useState("");
  const { phoneNumber } = useContext(Context);
  const [show, setShow] = useState("");
  const [btnVisible, setBtnVisible] = useState(true);

  const emailHandler = (e) => {
    setMail(e.target.value);

    console.log(mail);
  };

  const submitHandler = async () => {
    try {
      const response = await editProfile(mail);
      if (response) {
        console.log("Profile updated successfully:", response);
        const res = response;
        return res;
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    setShow(false);
    setBtnVisible(true);
  };

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
              value={mail}
              type="text"
              placeholder="آدرس ایمیل"
              className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[186px] h-[40px]"
            />

            <button
              onClick={submitHandler}
              className="cursor-pointer w-[93px] h-[40px] rounded-[5px] bg-[#28A745] text-white text-[16px]"
            >
              تایید
            </button>
          </div>
        ) : (
          <div className="flex gap-3 mt-10 justify-between">
            <span> ایمیل   </span>

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
