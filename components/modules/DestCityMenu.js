import cities from "@/data/cities.json";
import Image from "next/image";

function DestCityMenu({ onSelect, searchTerm, setIsDestMenuOpen }) {
  const filteredCities = cities.filter((city) =>
    city.destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" z-150 w-[160px] h-[251px] bg-white border border-[#0000001F] rounded-lg overflow-y-scroll overflow-x-hidden scroll-smooth custom-scroll">
      <ul>
        <div className="bg-[#F8F8F8] text-[13px] text-[#282828B2] py-2 px-2 w-[160px] h-[35px]  ">
          <p>پر تردد</p>
        </div>
        {filteredCities.map((city) => (
          <div
            key={city.id}
            className="flex item-center justify-start gap-5 py-2 pr-2 text-[14px] border-b border-[#0000001F] "
          >
            <Image
              src={"svg/location.svg"}
              alt="location"
              width={20}
              height={20}
            />
            <li
              className="cursor-pointer"
              onClick={() => {
                onSelect({
                  ...city,
                  id: city.destination.id,
                  name: city.destination.name,
                });
                setIsDestMenuOpen(false);
              }}
            >
              {city.destination.name}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DestCityMenu;
