"use client";
import { useUser } from "@/hooks/useUser";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import Modal from "../modals/Modal";
import Context from "@/context/Context";

function NavBar() {
  const { phoneNumber } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useUser();

  const loggedIn = data?.loggedIn;

  return (
    <div className="flex flex-col">
      <div className="flex justify-around mt-10 ">
        <Image
          src="/svg/hambergurMenu.svg"
          alt="hambergur menu"
          width={34}
          height={34}
        />

        {isLoading ? (
          <span className="text-sm text-gray-500">...</span>
        ) : loggedIn ? (
          <span className="text-sm font-medium text-green-600">
            {phoneNumber}
          </span>
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

      <div>
        <Link href="">صفحه اصلی</Link>
        <Link href="">خدمات گردشگری</Link>
        <Link href="">درباره ما</Link>
        <Link href="">تماس با ما</Link>
      </div>
    </div>
  );
}

export default NavBar;
