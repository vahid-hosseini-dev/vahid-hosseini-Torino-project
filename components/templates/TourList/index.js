import Card from "../../modules/Card";
import ServerDisconnect from "../ServerDisconnect";

async function TourList({ tourData }) {

  if (!tourData?.length) return <p> تور یافت نشد</p>;

  return (
    <main>
      <div className="flex flex-col justify-center items-center ">
        {tourData?.map((tour) => (
          <Card key={tour.id} data={tour} />
        ))}
      </div>
    </main>
  );
}

export default TourList;
