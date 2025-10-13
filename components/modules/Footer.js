import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="w-full min-h-[367px] text-center flex flex-col items-center justify-center border-t border-gray-400/50 border-dashed">
        <div className="flex flex-col md:flex-row md:gap-100 md:mb-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-[22px] md:text-[24px]">تورینو</h3>
              <Link href="#">درباره ما</Link>
              <Link href="#">تماس ما</Link>
              <Link href="#">چرا تورینو</Link>
              <Link href="#">بیمه مسافرتی</Link>
            </div>
            <div className="flex flex-col items-start gap-2 mr-20">
              <h3 className="text-[22px] md:text-[24px]">خدمات مشتریان</h3>
              <Link href="#">پشتیبانی آنلاین</Link>
              <Link href="#">راهنمای خرید</Link>
              <Link href="#">راهنمای استرداد</Link>
              <Link href="#">پرسش و پاسخ</Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-between md:flex-col-reverse gap-10 my-5 md:my-0">
            <div className="flex flex-wrap max-w-[150px] md:max-w-[500px] justify-start gap-5">
              <Image
                src="/img/ecunion.png"
                alt="ecunion"
                width={35}
                height={38}
              />
              <Image
                src="/img/samandehi.png"
                alt="samandehi"
                width={35}
                height={38}
              />
              <Image src="/img/aira.png" alt="aria" width={35} height={38} />
              <Image
                src="/img/state-airline.png"
                alt="airline"
                width={35}
                height={38}
              />
              <Image
                src="/img/passenger-rights.png"
                alt="passengers"
                width={35}
                height={38}
              />
            </div>

            <div className="flex flex-col justify-center items-end gap-2">
              <Image
                src="/img/Torino.png"
                alt="Torino"
                width={100}
                height={100}
              />
              <div className="text-[14px] md:text-[16px]">
                <span>تلفن پشتیبانی: </span>
                <span>٠٢١-٨٥٧٤</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t w-full border-gray-400/50"></div>
        <div className="text-[12px] md:text-[14px] mt-5">
          <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
