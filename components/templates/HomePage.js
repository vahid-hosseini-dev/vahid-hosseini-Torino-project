import api from "@/services/config";
import Card from "../modules/Card";
import Header from "../modules/Header";
import SearchBox from "./SearchBox";
import CheckServer from "@/utils/CheckServer";
import ServerDisconnect from "./ServerDisconnect";

async function HomePage() {
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
        <div className="flex flex-col justify-center items-center">
          <Header />
          <h3 className="text-[16px] text-[#595959]">
            <span className="text-[#28a745]"> تورینو</span> برگزار
            کننده بهترین تور های داخلی و خارجی
          </h3>
          <SearchBox />
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default HomePage;
