"use client";

import { useSelectedItemContext } from "@/app/(protected)/modules/mealworm/contexts/SelectedItemAndSelectedItemDispatchContext/index.tsx";

import { CrateProps } from "@/app/(protected)/modules/mealworm/components/BreedingInterface/types.ts";

const Crate = ({ onClick, rackId, crateId }: CrateProps) => {
  const selectedItem = useSelectedItemContext();

  const isActive =
    selectedItem?.rackId === rackId && selectedItem?.crateId === crateId;
  return (
    <button
      type="button"
      onClick={async (e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`w-full h-8 ${isActive ? "bg-slate-400" : "bg-slate-300"} hover:outline-1 hover:outline hover:outline-slate-500`}
    ></button>
  );
};

export default Crate;
