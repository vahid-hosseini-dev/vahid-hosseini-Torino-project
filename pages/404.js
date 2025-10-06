import Link from "next/link";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center absolute top-[114px]">
        <Image
          className="w-[322px] h-auto"
          width={1000}
          height={1000}
          src="/img/ErrorTV.png"
          alt="404"
        />
        <Image
          className="w-[322px] h-auto"
          width={1000}
          height={1000}
          src="/img/ErrorLamp.png"
          alt="404"
        />
        <h3 className="font-semibold text-2xl text-[var(--text-color)] mb-5">
          صفحه مورد نظر یافت نشد!
        </h3>
        <h3 className="font-semibold text-2xl text-[var(--text-color)] mb-5">
          اتصال با سرور برقرار نیست!
        </h3>
        <Link
          href="/auth/register"
          className="flex justify-center items-center font-YekanBakh text-[20px] w-[232px] h-[58px] rounded-2xl text-[var(--primary-color)] bg-[#D8FFE1]"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
