"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

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
import { Type } from "../GenreType";
import { ChevronDown } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function Genre() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

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
        <DropdownMenuGroup className="mt-4 flex gap-4">
          <Type type={"Action"} />
          <Type type={"Adventure"} />
          <Type type={"Animation"} />
          <Type type={"Comedy"} />
          <Type type={"Crime"} />
        </DropdownMenuGroup>
        <DropdownMenuGroup className="mt-4 flex gap-4">
          <Type type={"Documentary"} />
          <Type type={"Drama"} />
          <Type type={"Family"} />
          <Type type={"Fantasy"} />
        </DropdownMenuGroup>
        <DropdownMenuGroup className="mt-4 flex gap-4">
          <Type type={"History"} />
          <Type type={"Horror"} />
          <Type type={"Music"} />
          <Type type={"Mystery"} />
          <Type type={"Romance"} />
        </DropdownMenuGroup>
        <DropdownMenuGroup className="mt-4 flex gap-4">
          <Type type={"Science Fiction"} />
          <Type type={"TV Movie"} />
          <Type type={"Thriller"} />
          <Type type={"War"} />
        </DropdownMenuGroup>
        <DropdownMenuGroup className="mt-4 flex gap-4">
          <Type type={"Western"} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
