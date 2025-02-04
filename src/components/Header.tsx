import Image from "next/image";
import { ModeToggle } from "./ui/theme-toggle";
import { Input } from "./ui/input";
import Link from "next/link";
import GenrePage from "@/app/genre-section/page";
import Genre from "./genre";

export const Header = async () => {
  return (
    <div className="w-[100vw] p-3 flex justify-center">
      <div className="w-[79.813rem] flex flex-wrap justify-between ">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image
              src="film.svg"
              alt=""
              width={1000}
              height={1000}
              className="w-[20px] h-[20px]"
            />
            <h4 className="text-[#4338ca] text-base font-bold ">MovieZ</h4>
          </div>
        </Link>
        <div className="flex gap-3 ">
          <Genre />
          <Input type="search" placeholder="Search.." />
        </div>
        <div className="flex">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
// className="flex w-96 px-3 py-0 items-center gap-2 rounded-lg border-2 border-solid border-[#e4e4e7] "
