import Link from "next/link";
import Image from "next/image";
import NavBar from "../modules/NavBar";

function Layout({ children }) {
  return (
    <>
      <header className="text-center">
        <NavBar />
      </header>

      <div className="min-h-screen flex flex-col items-center justify-center  ">
        {children}
      </div>

      <footer className="w-full min-h-[367px] text-center flex flex-col items-center justify-center border-t-1 border-gray-400/50 border-dashed">
        <div className="flex flex-col md:flex-row md:gap-100 md:mb-10">
          <div className="flex item-center justify-between ">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-[22px] md:text-[24px]">تورینو</h3>
              <Link href={"#"}>درباره ما </Link>
              <Link href={"#"}>تماس ما </Link>
              <Link href={"#"}>چرا تورینو </Link>
              <Link href={"#"}>بیمه مسافرتی </Link>
            </div>
            <div className="flex flex-col items-start gap-2 mr-20">
              <h3 className="text-[22px] md:text-[24px]">خدمات مشتریان</h3>
              <Link href={"#"}>پشتیبانی آنلاین </Link>
              <Link href={"#"}>راهنمای خرید </Link>
              <Link href={"#"}>راهنمای استرداد </Link>
              <Link href={"#"}>پرسش و پاسخ </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-between md:flex-col-reverse gap-10 my-5 md:my-0">
            <div className="flex flex-wrap max-w-[150px] md:max-w-[500px] justify-start gap-5">
              <Image
                className="w-[35px] h-[38px]"
                src="/img/ecunion.png"
                alt="ecunion"
                width={300}
                height={300}
              />
              <Image
                className="w-[35px] h-[38px]"
                src="/img/samandehi.png"
                alt="samandehi"
                width={300}
                height={300}
              />
              <Image
                className="w-[35px] h-[38px]"
                src="/img/aira.png"
                alt="aria"
                width={300}
                height={300}
              />
              <Image
                className="w-[35px] h-[38px]"
                src="/img/state-airline.png"
                alt="airline"
                width={300}
                height={300}
              />
              <Image
                className="w-[35px] h-[38px]"
                src="/img/passenger-rights.png"
                alt="passengers"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col justify-center items-end gap-2">
              <Image
                className="w-[100px]"
                src="/img/Torino.png"
                alt="ecunion"
                width={300}
                height={300}
              />
              <div className="text-[14px] md:text-[16px]">
                <span> تلفن پشتیبانی: </span>
                <span>
                  ٨٥٧٤
                  {"- "}
                  ٠٢١
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t w-full border-gray-400/50"></div>
        <div className="text-[12px] md:text-[14px] mt-5 ">
          <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>{" "}
        </div>
      </footer>
    </>
  );
}

export default Layout;
