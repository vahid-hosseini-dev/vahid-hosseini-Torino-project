"use client";
import { useUser } from "@/hooks/useUser";

import { refreshAccessToken } from "@/utils/RefreshToken";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Modal from "../modals/Modal";
import Context from "@/context/Context";
import ProfileMenu from "./ProfileMenu";
import SideMenu from "./SideMenu";
import { ThreeDots } from "react-loader-spinner";

function NavBar() {
  const { phoneNumber, setPhoneNumber } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const { data, isLoading } = useUser();

  const profileMenuRef = useRef(null);
  const sideMenuRef = useRef(null);

  //-------------Menu Handlers -----------------------------
  const menuHandler = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
    setIsSideOpen(false);
  };
  const sideHandler = (e) => {
    e.stopPropagation();
    setIsSideOpen((prev) => !prev);
    setIsMenuOpen(false);
  };
  //-------------End of Menu Handlers --------------------

  //---------------UseEffects ------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("phoneNumber");
    if (saved) setPhoneNumber(saved);
  }, [setPhoneNumber]);

  useEffect(() => {
    //Profile Menu
    function handler(event) {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    //Side Menu

    function handler(event) {
      if (!sideMenuRef.current?.contains(event.target)) {
        setIsSideOpen(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  //---------------End of UseEffects --------------------------

  const loggedIn = data?.loggedIn;
  const phoneNumberToShow = loggedIn ? phoneNumber : null;
  {!loggedIn && refreshAccessToken()}

  return (
    <>
      <div className="z-100 flex justify-around w-full h-[64px] py-3 shadow-sm shadow-[#00000040] fixed top-0 left-0 bg-[#FFFFFF]">
        <Image
          onClick={sideHandler}
          className="relative cursor-pointer w-[34px] h-[34px]"
          src="/svg/hambergurMenu.svg"
          alt="hambergur menu"
          width={34}
          height={34}
        />

        {isLoading ? (
          <span className="text-sm text-gray-500">
            <ThreeDots width={50} />
          </span>
        ) : phoneNumberToShow ? (
          <div className="flex items-center justify-around w-[146px] h-[38px] ">
            <Image width={14} height={14} alt="icon" src="/svg/profile.svg" />
            <span className="text-lg font-medium text-green-600">
              {Number(phoneNumber).toLocaleString("fa-IR", {
                useGrouping: false,
              })}
            </span>
            <Image
              onClick={menuHandler}
              className="relative cursor-pointer w-[14px] h-[14px]"
              width={14}
              height={14}
              alt="icon"
              src="/svg/arrow-down.svg"
            />

            {isMenuOpen ? (
              <ProfileMenu
                setIsMenuOpen={setIsMenuOpen}
                phoneNumber={phoneNumber}
                ref={profileMenuRef}
              />
            ) : null}
          </div>
        ) : (
          <button onClick={() => setIsModalOpen(true)}>
            <Image
              className="cursor-pointer hover:scale-105 transition-all duration-75 ease-in-out"
              src="/svg/SignInButton.svg"
              alt="sign in"
              width={34}
              height={34}
            />
          </button>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {isSideOpen ? (
        <SideMenu ref={sideMenuRef} setIsSideOpen={setIsSideOpen} />
      ) : null}

      {/* <div>
          <Link href="">صفحه اصلی</Link>
          <Link href="">خدمات گردشگری</Link>
          <Link href="">درباره ما</Link>
          <Link href="">تماس با ما</Link>
        </div> */}
    </>
  );
}

export default NavBar;
