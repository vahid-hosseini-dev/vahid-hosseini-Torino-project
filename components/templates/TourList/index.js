import Image from "next/image";
import Card from "../../modules/Card";
import Slider from "@/components/modules/Slider";

async function TourList({ tourData }) {
  if (!tourData?.length) return <p> تور یافت نشد</p>;

  return (
    <main className="flex items-center justify-center flex-col">
      <section className="flex flex-col justify-center items-center md:grid md:grid-cols-4 ">
        {tourData?.map((tour) => (
          <Card key={tour.id} data={tour} />
        ))}
      </section>

      <section>
        <div className="w-[327px] h-[190px] md:w-[1188px] md:h-[251px] my-[55px] border border-[#00000040] flex flex-col items-center justify-center relative rounded-[10px]">
          <span className="absolute top-4 right-3 text-[22px] md:text-[48px] md:font-extrabold md:top-10 md:right-10 text-white">
            خرید تلفنی از <span className="text-[#10411B]">تورینو </span>
          </span>
          <span className="absolute top-15 right-3 text-[14px] md:text-[32px] md:top-30 md:right-10 text-white">
            به هرکجا که میخواهید!
          </span>
          <div className="flex mt-31 md:mt-5 justify-between md:mr-200 md:flex-col gap-8 md:gap-1">
            <div className="flex items-center justify-between md:justify-center text-[20px] md:font-bold md:text-[32px] text-[#282828]">
              <span>١٨٤٠- ٠٢١</span>
              <span>
                <Image
                  src={"/svg/call-black.svg"}
                  alt="call"
                  width={20}
                  height={20}
                  className="md:w-[24px] h-[24px]"
                />
              </span>
            </div>
            <button className="cursor-pointer w-[136px] md:w-[175px] h-[38px] md:[41px] bg-[#10411B] rounded-[9px] text-white text-[14px] md:text-[16px]">
              اطلاعات بیشتر
            </button>
          </div>
          <div className="z-[-10] w-[327px] h-[128px] md:w-[870px] md:h-[250px] md:right-0 bg-[#28A745] md:rounded-[10px] rounded-tl-[10px] rounded-tr-[10px] absolute top-0"></div>
          <Image
            src={"/img/professional-man.png"}
            alt="man"
            width={308}
            height={225}
            className="w-[195px] h-[158px] md:w-[308px] md:h-[225px] absolute md:bottom-[-1] md:right-13h0"
          />
        </div>
      </section>

      <section className="flex gap-2 justify-start items-center w-full mr-15 md:mr-120 ">
        <div className="relative flex justify-center items-center w-[35px] md:w-[60px] h-[35px] md:h-[60px]">
          <Image
            className="absolute top-0 md:w-[60px] md:h-[60px]  "
            src={"/svg/Group 7.svg"}
            alt="logo"
            width={34}
            height={38}
          />
          <span className="z-10 mt-2 text-white text-[24px] md:text-[38px] md:font-black">
            ؟
          </span>
        </div>
        <p className="text-[#282828] text-2xl md:text-[40px] md:font-extrabold">
          چرا <span className="!text-[#28A745]">تورینو</span> ؟
        </p>
      </section>

      <section className="flex md:flex-row flex-col md:w-full md:justify-around items-start my-5 md:gap-100 gap-5">
        <div className="flex items-center justify-around">
          <p className="text-xl w-[517px] h-[264px] leading-15 hidden md:block ml-20 ">
            <p className="text-2xl mb-5   ">تور طبیعت گردی و تاریخی</p>
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
          <Slider />
        </div>
      </section>

      <section className="flex md:flex-row flex-col justify-center items-start my-5 gap-5 md:border-t-1 md:border-[#00000033] py-2">

        <div className="flex items-center justify-start">
          <Image className="md:w-[110px] md:h-[100px]" src={"/svg/Group 16.svg"} alt="logo" width={70} height={64} />
          <div>
            <p className="text-[#282828] text-[14px] md:text-[26px]">به صرفه ترین قیمت</p>
            <p className="text-[#282828] text-[12px] md:text-[16px]">
              به صرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <Image className="md:w-[110px] md:h-[100px]" src={"/svg/Group 16.svg"} alt="logo" width={70} height={64} />
          <div>
            <p className="text-[#282828] text-[14px] md:text-[26px]">پشتیبانی</p>
            <p className="text-[#282828] text-[12px] md:text-[16px]">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <Image className="md:w-[110px] md:h-[100px]" src={"/svg/Group 16.svg"} alt="logo" width={70} height={64} />
          <div>
            <p className="text-[#282828] text-[14px] md:text-[26px]">رضایت کاربران</p>
            <p className="text-[#282828] text-[12px] md:text-[16px]">
              رضایت بیش از ١٠ هزار کاربر از تور های ما.{" "}
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}

export default TourList;
