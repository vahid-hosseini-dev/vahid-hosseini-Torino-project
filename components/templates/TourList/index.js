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
        <div className="w-[327px] h-[190px] my-[55px] border border-[#00000040] flex flex-col items-center justify-center relative rounded-[10px]">
          <span className="absolute top-4 right-3 text-[22px] text-white">
            خرید تلفنی از <span className="text-[#10411B]">تورینو </span>
          </span>
          <span className="absolute top-15 right-3 text-[14px] text-white">
            به هرکجا که میخواهید!
          </span>
          <div className="flex mt-31 justify-between gap-8">
            <div className="flex items-center justify-between text-[20px] text-[#282828]">
              <span>١٨٤٠- ٠٢١</span>
              <span>
                <Image
                  src={"/svg/call-black.svg"}
                  alt="call"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <button className="cursor-pointer w-[136px] h-[38px] bg-[#10411B] rounded-[9px] text-white text-[14px]">
              اطلاعات بیشتر
            </button>
          </div>
          <div className="z-[-10] w-[327px] h-[128px] bg-[#28A745] rounded-tl-[10px] rounded-tr-[10px] absolute top-0"></div>
          <Image
            src={"/img/professional-man.png"}
            alt="man"
            width={308}
            height={225}
            className="w-[195px] h-[158px] absolute top-[-30] left-0"
          />
        </div>
      </section>

      <section className="flex gap-2 justify-start items-center w-full mr-15">
        <div className="relative flex justify-center items-center w-[35px] h-[35px]">
          <Image
            className="absolute top-0"
            src={"/svg/Group 7.svg"}
            alt="logo"
            width={34}
            height={38}
          />
          <span className="z-10 mt-2 text-white text-[24px]">؟</span>
        </div>
        <p className="text-[#282828] text-2xl">
          چرا <span className="!text-[#28A745]">تورینو</span> ؟
        </p>
      </section>
      <Slider />
      <section className="flex flex-col justify-center items-start my-10 gap-5">
        <div className="flex items-center justify-center">
          <Image src={"/svg/Group 16.svg"} alt="logo" width={70} height={64} />
          <div>
            <p className="text-[#282828] text-[14px]">به صرفه ترین قیمت</p>
            <p className="text-[#282828] text-[12px]">
              به صرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={"/svg/Group 16.svg"} alt="logo" width={70} height={64} />
          <div>
            <p className="text-[#282828] text-[14px]">پشتیبانی</p>
            <p className="text-[#282828] text-[12px]">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={"/svg/Group 16.svg"} alt="logo" width={70} height={64} />
          <div>
            <p className="text-[#282828] text-[14px]">رضایت کاربران</p>
            <p className="text-[#282828] text-[12px]">
              رضایت بیش از ١٠ هزار کاربر از تور های ما.{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TourList;
