import Header from "@/components/modules/Header";
import SearchForm from "@/components/templates/SearchForm";
import TourList from "@/components/templates/TourList";
import { serverFetch } from "@/services/http";

export default async function Home({ searchParams }) {
  const data = await serverFetch("/tour", searchParams, { cache: "no-store" });

  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <SearchForm />
      <TourList tourData={data} />
    </div>
  );
}
