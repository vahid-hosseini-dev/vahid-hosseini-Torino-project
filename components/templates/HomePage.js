import Modal from "../modals/Modal";
import api from "@/services/config";
import Card from "../modules/Card";

async function HomePage() {
  const res = await api.get("/tour", { cache: "no-store" });
  const data = res.data;

  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default HomePage;
