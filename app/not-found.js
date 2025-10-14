import Image from "next/image";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="w-[322px] h-auto"
        width={1000}
        height={1000}
        src="/img/ErrorTV.png"
        alt="404"
      />
      <h3 className="font-semibold text-2xl text    -[#282828] mb-5">
        صفحه مورد نظر یافت نشد!
      </h3>
      <Link
        href="/"
        className="cersor-pointer flex justify-center items-center font-YekanBakh text-[20px] w-[232px] h-[58px] rounded-2xl text-[#28a745] bg-[#D8FFE1]"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default PageNotFound;
