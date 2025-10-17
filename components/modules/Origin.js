import Image from "next/image";

function Origin({ pic, name, origin, setOrigin, setIsOriginMenuOpen }) {
  return (
    <div className="flex justify-center items-center gap-2 w-[160px] h-[47px] rounded-xl bg-white border border-[#00000026]">
      <Image
        className="w-[18px] h-[18px]"
        src={pic}
        alt="calender"
        width={18}
        height={18}
      />
      <input
        className="text-[16px] text-[#00000080] outline-0"
        placeholder={name}
        value={origin?.name ?? ""}
        onChange={(e) => setOrigin({ ...origin, name: e.target.value })}
        onFocus={() => setIsOriginMenuOpen(true)}
        onBlur={() => setTimeout(() => setIsOriginMenuOpen(false), 200)}
      />
    </div>
  );
}

export default Origin;
