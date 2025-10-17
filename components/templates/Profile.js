function MyProfile() {
  return (
    <>
      <div className="w-[328px] h-[169px] border border-[#00000033] rounded-[10px] p-5 bg-white my-3">
        <p>اطلاعات حساب کاربری</p>
        <div className="flex justify-between items-center mt-5">
          <span>شماره موبایل</span>
          <span>09224521125</span>
        </div>

        <div className="flex justify-between mt-5">
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[186px] h-[40px]"
          />
          <button className="w-[93px] h-[40px] rounded-[5px] bg-[#28A745] text-white text-[16px]">
            تایید
          </button>
        </div>
      </div>
      <div className="w-[328px] h-[355px] border border-[#00000033] rounded-[10px] p-5 bg-white my-3">
        <p>ویرایش اطلاعات شخصی</p>
        <div className="flex flex-col gap-3 justify-between items-center mt-5">
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
          />
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
          />
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
          />
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
          />
        </div>

        <div className="flex justify-between mt-5">
          <button className="w-[138px] h-[40px] rounded-[5px] bg-[#28A745] text-white text-[16px]">
            تایید
          </button>
          <button className="w-[138px] h-[40px] rounded-[5px] bg-white text-[#28A745] border border-[#28A745] text-[16px]">
            انصراف
          </button>
        </div>
      </div>
      <div className="w-[328px] h-[294px] border border-[#00000033] rounded-[10px] p-5 bg-white my-3">
        <p>ویرایش اطلاعات حساب بانکی</p>
        <div className="flex flex-col gap-3 justify-between items-center mt-5">
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
          />
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
          />
          <input
            type="text"
            placeholder="آدرس ایمیل"
            className="outline-0 px-3 text-[12px] border border-[#00000050] rounded-[5px] w-[289px] h-[40px]"
          />
        </div>

        <div className="flex justify-between mt-5">
          <button className="w-[138px] h-[40px] rounded-[5px] bg-[#28A745] text-white text-[16px]">
            تایید
          </button>
          <button className="w-[138px] h-[40px] rounded-[5px] bg-white text-[#28A745] border border-[#28A745] text-[16px]">
            انصراف
          </button>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
