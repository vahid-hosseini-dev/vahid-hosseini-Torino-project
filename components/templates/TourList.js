import api from "@/services/config";
import Card from "../modules/Card";
import ServerDisconnect from "./ServerDisconnect";

async function TourList() {
  let data = [];
  let error = null;

  try {
    const res = await api.get("/tour", { cache: "no-store" });
    data = res.data;
  } catch (err) {
    error = err;
    console.log(err);
  }

  return (
    <>
      {error ? (
        <ServerDisconnect />
      ) : (
        <div className="flex flex-col justify-center items-center ">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default TourList;
