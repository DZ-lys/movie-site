import { Popular, Upcoming, TopRated } from "@/components/Cards";
import { CarouselPlugin } from "@/components/Carousel";
import { Header } from "@/components/Header";

export default async function Home() {
  return (
    <div className="flex flex-col gap-10 items-center h-[100vh] w-[100vw]">
      <Header />
      <CarouselPlugin />
      <Popular />
      <Upcoming />
      <TopRated />
    </div>
  );
}
