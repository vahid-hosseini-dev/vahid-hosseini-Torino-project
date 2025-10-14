import Cookies from "js-cookie";
import Image from "next/image";
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
      className="absolute top-20 flex flex-col w-[157px] h-[114px] rounded-xl overflow-hidden border border-[#0000001F] bg-white"
    >
      <div className="flex items-center justify-around w-[157px] h-[44px] bg-[#F4F4F4]">
        <div className="flex items-center justify-center ">
          <Image
            className="z-50 absolute "
            src={"/svg/profile1.svg"}
            alt="profile"
            width={16}
            height={16}
          />
          <Image
            className="relative"
            src={"/svg/ellipse.svg"}
            alt="profile"
            width={28}
            height={28}
          />
        </div>
        <span className="text-[14px] text-[#10411B] cursor-pointer">
          {Number(phoneNumber).toLocaleString("Fa-IR", {
            useGrouping: false,
          })}
        </span>
      </div>

      <div className=" flex items-center justify-around border-b py-2 border-[#0000001F] ">
        <Image
          src={"/svg/profile-2.svg"}
          alt="profile"
          width={16}
          height={16}
        />
        <span className="text-[12px] cursor-pointer">اطلاعات حساب کاربری</span>
      </div>

      <div className="flex items-center justify-around py-2">
        <Image src={"/svg/logout.svg"} alt="profile" width={16} height={16} />
        <span
          onClick={removeHandler}
          className="text-[12px] text-[#D40000] cursor-pointer"
        >
          خروج از حساب کاربری
        </span>
      </div>
    </div>
  );
}

export default ProfileMenu;
