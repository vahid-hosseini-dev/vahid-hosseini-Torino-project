import Image from "next/image";
import Link from "next/link";

function ServerDisconnect() {
  return (
    <>
      <Image
        className="w-[322px] h-auto"
        width={1000}
        height={1000}
        src="/img/ErrorLamp.png"
        alt="404"
      />
      <h3 className="font-semibold text-2xl text-[#282828] mb-5">
        اتصال با سرور برقرار نیست!
      </h3>
      <Link
        href="/auth/register"
        className="flex justify-center items-center font-YekanBakh text-[20px] w-[232px] h-[58px] rounded-2xl text-[#28a745] bg-[#D8FFE1]"
      >
        بازگشت به صفحه اصلی
      </Link>
    </>
  );
}

export default ServerDisconnect;
