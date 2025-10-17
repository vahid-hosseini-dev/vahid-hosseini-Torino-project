import Image from "next/image";
import { useState } from "react";

function PersonalInfo() {
  const [show, setShow] = useState("");
  const [btnVisible, setBtnVisible] = useState(true);

  return (
    <div>
      <div className="w-[328px] h-auto border border-[#00000033] rounded-[10px] p-5 bg-white my-3">
        <div className="flex justify-between">
          {show ? (
            <p className="text-[18px]">ویرایش حساب بانکی</p>
          ) : (
            <p className="text-[18px]"> حساب بانکی</p>
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
                type="text"
                placeholder="شماره کارت"
                className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
              />
              <input
                type="text"
                placeholder="شماره شبا"
                className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
              />
              <input
                type="text"
                placeholder="شماره حساب"
                className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
              />
            </div>

            <div className="flex justify-between mt-5">
              <button className="w-[138px] h-[40px] rounded-[5px] bg-[#28A745] text-white text-[16px]">
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
              <span>شماره کارت</span>
              <span> ----- </span>
            </div>
            <div className="flex justify-between items-center my-5">
              <span>شماره شبا</span>
              <span> ----- </span>
            </div>
            <div className="flex justify-between items-center my-5">
              <span>شماره حساب</span>
              <span> ----- </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfo;
