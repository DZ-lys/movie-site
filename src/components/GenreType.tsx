import { ChevronRight } from "lucide-react";

export const Type = ({ type }: { type: any }) => {
  return (
    <div className="flex border-[1px] border-solid border-[#e4e4e74b] rounded-full px-[10px] py-[2px] gap-2 items-start ">
      <p className="text-xs font-semibold">{type}</p>
      <ChevronRight className="w-4 h-4" />
    </div>
  );
};
