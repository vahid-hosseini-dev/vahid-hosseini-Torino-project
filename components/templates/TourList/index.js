import Image from "next/image";
import Card from "../../modules/Card";

async function TourList({ tourData }) {
  if (!tourData?.length) return <p> تور یافت نشد</p>;

  return (
    <main className="flex items-center justify-center flex-col">
      <section className="flex flex-col justify-center items-center md:grid md:grid-cols-4 ">
        {tourData?.map((tour) => (
          <Card key={tour.id} data={tour} />
        ))}
      </section>

      <section>
        <div className="w-[327px] h-[220px] flex flex-col items-center justify-center relative">
          <div className="w-[327px] h-[128px] bg-[#28A745] rounded-tl-[10px] rounded-tr-[10px]"></div>
          <Image
            src={"/img/professional-man.png"}
            alt="man"
            width={308}
            height={225}
            className="w-[250px] h-[188px] my-10 absolute top-[-54] left-0"
          />
        </div>
      </section>
    </main>
  );
}

export default TourList;
