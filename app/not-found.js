import Image from "next/image";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-center md:gap-3 md:my-10 items-center justify-center">
      <Image
        className="w-[322px] h-auto md:w-[555px] "
        width={555}
        height={555}
        src="/img/ErrorTV.png"
        alt="404"
      />

      <div className="md:flex flex-col md:items-center md:justify-center md:mr-20">
          <h3 className="font-semibold text-2xl text-[#282828] mb-5">
            صفحه مورد نظر یافت نشد!
          </h3>
          <Link
            href="/"
            className="cersor-pointer flex justify-center items-center font-YekanBakh text-[20px] w-[232px] h-[58px] rounded-2xl text-[#28a745] bg-[#D8FFE1]"
          >
            بازگشت به صفحه اصلی
          </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
