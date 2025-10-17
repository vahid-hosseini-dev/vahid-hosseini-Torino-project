import Image from "next/image";

function Destination({
  pic,
  name,
  destination,
  setDestination,
  setIsDestMenuOpen,
}) {
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
        value={destination?.name ?? ""}
        onChange={(e) =>
          setDestination({ ...destination, name: e.target.value })
        }
        onFocus={() => setIsDestMenuOpen(true)}
        onBlur={() => setTimeout(() => setIsDestMenuOpen(false), 200)}
      />
    </div>
  );
}

export default Destination;
