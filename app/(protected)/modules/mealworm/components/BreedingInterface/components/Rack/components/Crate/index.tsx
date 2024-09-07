"use client";

import { CrateProps } from "@/app/(protected)/modules/mealworm/components/BreedingInterface/types.ts";
import { useMealwormStore } from "@/providers/mealworm-store-provider.tsx";

const Crate = ({ onClick, rackId, crateId }: CrateProps) => {
  const { selectedItem } = useMealwormStore((state) => state);

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
    />
  );
};

export default Crate;
