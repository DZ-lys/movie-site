import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { getData } from "@/util/Data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Type } from "./GenreType";
import { ChevronDown } from "lucide-react";
import { GenreType } from "@/util/Movietype";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Genre = {
  data: GenreType[];
};

export default async function Genre() {
  const data = await getData("/genre/movie/list?language=en");
  console.log(data);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <ChevronDown /> Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[36rem] p-4 ">
        <DropdownMenuLabel className="text-3xl font-semibold tracking-[0.6px] ">
          Genres
        </DropdownMenuLabel>
        <DropdownMenuItem className="text-lg font-normal ">
          See lists of movies by genre
        </DropdownMenuItem>
        <DropdownMenuSeparator className="w-[33rem] m-auto border-[1.5px] " />
        <DropdownMenuGroup className="flex flex-wrap gap-[16px] mt-4 ">
          {data.genres.map((genre: GenreType, index: number) => {
            return (
              <Link href={`/genre-section/?page=1&genreIds=${genre.id}`}>
                <Button
                  key={index}
                  className="h-[20px] p-0 pl-[10px] text-[12px] bg-secondary text-secondary-foreground"
                >
                  {genre.name} <ChevronRight />
                </Button>
              </Link>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
