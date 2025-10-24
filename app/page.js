import Header from "@/components/modules/Header";
import SearchForm from "@/components/templates/SearchForm";
import ServerDisconnect from "@/components/templates/ServerDisconnect";
import TourList from "@/components/templates/TourList";
import { serverFetch } from "@/services/http";

export default async function Home({ searchParams }) {
  let data;
  let error = false;

  const result = await serverFetch("/tour", searchParams, { cache: "no-store" });

  if (result.error) {
    error = true;
  } else {
    data = result;
  }

  if (error) {
    return <ServerDisconnect />;
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <Header />
      <SearchForm />
      <TourList tourData={data} />
    </div>
  );
}
