import Image from "next/image";

function MyTours() {
  return (
    <>
      <div className="relative flex flex-col justify-around w-[328px] h-[202px] border border-[#00000033] rounded-[10px] pt-5 mt-15 bg-white">
        <div className="flex justify-around items-center">
          <div className="flex items-center">
            <Image
              src="/svg/sun-fog.svg"
              alt="tour"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <span className="text-[12px]">تور اقلیم کردستان</span>
          </div>
          <div className="flex items-center">
            <Image
              src="/svg/airplane-t.svg"
              alt="tour"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <span className="text-[12px]">سفر با هواپیما</span>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <span className="text-[14px]"> تهران به سلیمانیه</span>
          <span className="text-[12px] text-[#00000099]">
            دوشنبه 15 شهریور 1402
          </span>
        </div>
        <div className="flex justify-around items-center">
          <span className="text-[14px]"> تاریخ برگشت</span>
          <span className="text-[12px] text-[#00000099]">
            جمعه 19 شهریور 1402
          </span>
        </div>

        <div className="flex items-center justify-around border-t border-[#00000033] py-2">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00000080]">شماره تور</span>
            <span className="text-[12px] border-l border-[#00000033] px-3">
              102095404
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00000080]">
              مبلغ پرداخت شده
            </span>
            <span className="text-[12px]">18,000,000 تومان</span>
          </div>
        </div>
        <div className="absolute bg-[#28A7454D] text-[#28A745] text-[6px] w-[47px] h-[15px] rounded-[27px] flex items-center justify-center left-2 top-2 ">
          به اتمام رسیده
        </div>
      </div>
      <div className="relative flex flex-col justify-around w-[328px] h-[202px] border border-[#00000033] rounded-[10px] pt-5 mt-5 bg-white mb-3">
        <div className="flex justify-around items-center">
          <div className="flex items-center">
            <Image
              src="/svg/sun-fog.svg"
              alt="tour"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <span className="text-[12px]">تور اقلیم کردستان</span>
          </div>
          <div className="flex items-center">
            <Image
              src="/svg/airplane-t.svg"
              alt="tour"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <span className="text-[12px]">سفر با هواپیما</span>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <span className="text-[14px]"> تهران به سلیمانیه</span>
          <span className="text-[12px] text-[#00000099]">
            دوشنبه 15 شهریور 1402
          </span>
        </div>
        <div className="flex justify-around items-center">
          <span className="text-[14px]"> تاریخ برگشت</span>
          <span className="text-[12px] text-[#00000099]">
            جمعه 19 شهریور 1402
          </span>
        </div>

        <div className="flex items-center justify-around border-t border-[#00000033] py-2">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00000080]">شماره تور</span>
            <span className="text-[12px] border-l border-[#00000033] px-3">
              102095404
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00000080]">
              مبلغ پرداخت شده
            </span>
            <span className="text-[12px]">18,000,000 تومان</span>
          </div>
        </div>
        <div className="absolute bg-[#28A7454D] text-[#28A745] text-[6px] w-[47px] h-[15px] rounded-[27px] flex items-center justify-center left-2 top-2 ">
          به اتمام رسیده
        </div>
      </div>
      <div className="relative flex flex-col justify-around w-[328px] h-[202px] border border-[#00000033] rounded-[10px] pt-5 mt-5 not-indeterminate:bg-white mb-3">
        <div className="flex justify-around items-center">
          <div className="flex items-center">
            <Image
              src="/svg/sun-fog.svg"
              alt="tour"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <span className="text-[12px]">تور اقلیم کردستان</span>
          </div>
          <div className="flex items-center">
            <Image
              src="/svg/airplane-t.svg"
              alt="tour"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
            <span className="text-[12px]">سفر با هواپیما</span>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <span className="text-[14px]"> تهران به سلیمانیه</span>
          <span className="text-[12px] text-[#00000099]">
            دوشنبه 15 شهریور 1402
          </span>
        </div>
        <div className="flex justify-around items-center">
          <span className="text-[14px]"> تاریخ برگشت</span>
          <span className="text-[12px] text-[#00000099]">
            جمعه 19 شهریور 1402
          </span>
        </div>

        <div className="flex items-center justify-around border-t border-[#00000033] py-2">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00000080]">شماره تور</span>
            <span className="text-[12px] border-l border-[#00000033] px-3">
              102095404
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#00000080]">
              مبلغ پرداخت شده
            </span>
            <span className="text-[12px]">18,000,000 تومان</span>
          </div>
        </div>
        <div className="absolute bg-[#28A7454D] text-[#28A745] text-[6px] w-[47px] h-[15px] rounded-[27px] flex items-center justify-center left-2 top-2 ">
          به اتمام رسیده
        </div>
      </div>
    </>
  );
}

export default MyTours;
