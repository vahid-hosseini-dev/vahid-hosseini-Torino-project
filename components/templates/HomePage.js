import Modal from "../modals/Modal";
import api from "@/services/config";
import Card from "../modules/Card";
import Header from "../modules/Header";
import SearchBox from "./SearchBox";

async function HomePage() {
  const res = await api.get("/tour", { cache: "no-store" });
  const data = res.data;

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <h3 className="text-[16px] text-[#595959]">
        <span className="text-[var(--primary-color)]"> تورینو</span> برگزار
        کننده بهترین تور های داخلی و خارجی
      </h3>
      <SearchBox />
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default HomePage;
