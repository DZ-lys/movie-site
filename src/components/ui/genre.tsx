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

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function Genre() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">genre</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[36rem] p-4 ">
        <DropdownMenuGroup className=" ">
          <DropdownMenuLabel className="text-3xl font-semibold tracking-[0.6px] ">
            Genres
          </DropdownMenuLabel>
          <DropdownMenuItem className="text-lg font-normal ">
            See lists of movies by genre
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="w-[33rem] m-auto border-[1.5px] " />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
