import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

function ProfileMenu({ phoneNumber, setIsMenuOpen }) {
  const removeHandler = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    toast.error("شما از حساب کاربری خارج شدید");
    setIsMenuOpen(false);
    window.location.href = "/";
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute gap-2 top-12 flex flex-col w-[157px] h-[114px] md:w-[246px] md:h-[151px] rounded-xl overflow-hidden border border-[#0000001F] bg-white"
    >
      <div className="flex items-center justify-around w-[157px] h-[44px] md:w-[246px] md:justify-start bg-[#F4F4F4]">
        <div className="flex items-center justify-center ">
          <Image
            className="z-50 absolute md:mr-[10px] "
            src={"/svg/profile1.svg"}
            alt="profile"
            width={16}
            height={16}
          />
          <Image
            className="relative md:mr-[10px]"
            src={"/svg/Ellipse.svg"}
            alt="profile"
            width={28}
            height={28}
          />
        </div>
        <p className="text-[14px] text-[#10411B] md:text-[16px] md:pr-[5px]">
          {Number(phoneNumber).toLocaleString("Fa-IR", {
            useGrouping: false,
          })}
        </p>
      </div>

      <div className=" flex items-center justify-around md:justify-start border-b py-2 border-[#0000001F] ">
        <Image
          className="md:w-[20px] md:h-[20px] md:mr-[15px]"
          src={"/svg/profile-2.svg"}
          alt="profile"
          width={16}
          height={16}
        />
        <Link
          href={"/profile"}
          onClick={() => setIsMenuOpen(false)}
          className="text-[12px] md:text-[16px] cursor-pointer md:pr-[5px]"
        >
          اطلاعات حساب کاربری
        </Link>
      </div>

      <div className="flex items-center justify-around py-2 md:justify-start">
        <Image
          className="md:w-[20px] md:h-[20px] md:mr-[15px]"
          src={"/svg/logout.svg"}
          alt="profile"
          width={16}
          height={16}
        />
        <span
          onClick={removeHandler}
          className="text-[12px] md:text-[14px] text-[#D40000] cursor-pointer md:pr-[5px]"
        >
          خروج از حساب کاربری
        </span>
      </div>
    </div>
  );
}

export default ProfileMenu;
