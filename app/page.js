import Header from "@/components/modules/Header";
import HomePage from "@/components/templates/TourList";
import SearchBox from "@/components/templates/SearchBox";
import TourList from "@/components/templates/TourList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <SearchBox />
      <TourList />
    </div>
  );
}
