"use client";

import Image from "next/image";
import LoginForm from "../templates/authForm/LoginForm";
import SubmitForm from "../templates/authForm/SubmitForm";
import { useContext } from "react";
import Context from "@/context/Context";

function Modal({ isOpen, onClose }) {
  const { step, setStep } = useContext(Context);
  if (!isOpen) return null;

  return (
    <div
      onClick={() => {
        onClose();
        setStep("login");
      }}
      className="w-full h-full bg-black/5 backdrop-blur-xs fixed top-0 left-0 z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center items-center gap-11 w-[358px] h-[362px] rounded-[20px] bg-white drop-shadow-2xl"
      >
        <Image
          onClick={() => {
            onClose();
            setStep("login");
          }}
          width={35}
          height={35}
          src="/svg/cross.svg"
          alt="cross"
          className="cursor-pointer hover:rotate-90 absolute top-3 left-3 transition-all duration-100 ease-in-out  "
        />
        {step === "login" && <LoginForm />}
        {step === "submit" && <SubmitForm />}
      </div>
    </div>
  );
}

export default Modal;
