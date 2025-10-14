import Image from "next/image";
import Link from "next/link";

function SideMenu({ setIsSideOpen }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed flex flex-col justify-start py-8 px-3 gap-5 top-0 right-0 z-50 border-[#0000001F]  item-center border rounded-[12px] w-[209px] h-screen bg-white"
    >
      <div className="flex items-center">
        <Image src="/svg/home.svg" alt="home" width={16} height={16} />
        <Link
          onClick={() => setIsSideOpen(false)}
          href={"/"}
          className="text-[16px] mr-2 cursor-pointer text-[#28A745]"
        >
          صفحه اصلی
        </Link>
      </div>
      <div className="flex items-center">
        <Image src="/svg/airplane.svg" alt="home" width={16} height={16} />
        <Link
          onClick={() => setIsSideOpen(false)}
          href={"/"}
          className="text-[16px] mr-2 cursor-pointer text-[#282828]"
        >
          خدمات گردشگری
        </Link>
      </div>
      <div className="flex items-center">
        <Image src="/svg/volume-low.svg" alt="home" width={16} height={16} />
        <Link
          onClick={() => setIsSideOpen(false)}
          href={"/"}
          className="text-[16px] mr-2 cursor-pointer text-[#282828]"
        >
          درباره ما
        </Link>
      </div>
      <div className="flex items-center">
        <Image src="/svg/call.svg" alt="home" width={16} height={16} />
        <Link
          onClick={() => setIsSideOpen(false)}
          href={"/"}
          className="text-[16px] mr-2 cursor-pointer text-[#282828]"
        >
          تماس با ما
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
