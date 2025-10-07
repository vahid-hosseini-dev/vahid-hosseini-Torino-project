import Image from "next/image";
import LoginForm from "../templates/LoginForm";
import SubmitForm from "../templates/SubmitForm";

function Modal() {
  return (
    <div className="w-full h-full bg-black/5 backdrop-blur-xs fixed top-0 left-0 z-50 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-11 w-[358px] h-[362px] rounded-[20px] bg-white drop-shadow-2xl">
        <Image
          width={35}
          height={35}
          src="/svg/cross.svg"
          alt="cross"
          className="hover:rotate-90 absolute top-3 left-3 transition-all duration-100 ease-in-out  "
        />
        <LoginForm />
        <SubmitForm />
      </div>
    </div>
  );
}

export default Modal;
