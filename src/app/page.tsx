import { Popular, Upcoming, TopRated } from "@/components/Cards";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default async function Home() {
  return (
    <div className="flex flex-col gap-10 items-center h-[100vh] w-[100vw]">
      <ModeToggle />
      <Popular />
      <Upcoming />
      <TopRated />
    </div>
  );
}
