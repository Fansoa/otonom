"use client";

import { memo, useState } from "react";

import useAuth from "@/hooks/useAuth/index.ts";
import { useRackListContext } from "@/app/(protected)/modules/mealworm/contexts/RackListContext/index.tsx";
import useRackForm from "@/app/(protected)/modules/mealworm/hooks/useRackForm/index.ts";

import LabelInputControlled from "@/components/LabelInputControlled/index.tsx";
import RackSkeleton from "@/app/(protected)/modules/mealworm/components/BreedingInterface/components/Rack/RackSkeleton.tsx";
import Rack from "@/app/(protected)/modules/mealworm/components/BreedingInterface/components/Rack/index.tsx";
import DrawerForm from "@/components/DrawerForm/index.tsx";

// eslint-disable-next-line react/display-name
const BreedingInterface = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, supabaseClient } = useAuth();
  const { rackList } = useRackListContext();
  const { methods, onSubmit } = useRackForm({
    user,
    supabaseClient,
    setIsOpen,
  });

  if (!rackList) {
    return (
      <div className="h-96 p-4 bg-slate-100">
        <div className="h-full flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <RackSkeleton key={`RackSkeleton-${i}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-96 p-4 bg-slate-100">
        {rackList && (
          <div className="h-full flex gap-1">
            <>
              {rackList.map((rack) => (
                <Rack key={`rack-${rack.id}`} rack={rack} />
              ))}
              <button
                className="p-2 w-28  border-2 border-dashed rounded-md border-slate-400 hover:bg-slate-50 text-slate-800"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                Add Rack
              </button>
            </>
          </div>
        )}
      </div>

      <DrawerForm
        panelTitle="Add Rack"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        methods={methods}
        onSubmit={onSubmit}
      >
        <LabelInputControlled name="name" label="Rack name" inputType="text" />
      </DrawerForm>
    </>
  );
});

export default BreedingInterface;
