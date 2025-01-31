import { Header } from "@/components/Header";
import { Popular, Top_rated, Upcoming } from "../components/Cards";
import { CarouselPlugin } from "@/components/Carousel";

export default async function Home() {
  return (
    <div className="w-[100vw] ">
      <Header />
      <CarouselPlugin />
      <div className="flex flex-col gap-14 mt-14 ">
        <Popular />
        <Upcoming />
        <Top_rated />
      </div>
    </div>
  );
}
