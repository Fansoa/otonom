"use client";

import useRackForm from "@/app/(protected)/modules/mealworm/hooks/useRackForm";
import Rack from "@/components/BreedingInterface/components/Rack/index.tsx";
import RackSkeleton from "@/components/BreedingInterface/components/Rack/skeleton";
import { BreedingInterfaceProps } from "@/components/BreedingInterface/types.ts";
import Drawer from "@/components/Drawer";
import LabelInputControlled from "@/components/LabelInputControlled";
import useAuth from "@/hooks/useAuth";
import { memo, useState } from "react";
import { FormProvider } from "react-hook-form";

const mockData = [
  {
    rackId: 1,
    crates: [{ crateId: 1 }, { crateId: 2 }, { crateId: 3 }, { crateId: 4 }],
  },
  {
    rackId: 2,
    crates: [{ crateId: 5 }, { crateId: 6 }, { crateId: 7 }],
  },
];

// eslint-disable-next-line react/display-name
const BreedingInterface = memo(({ data }: BreedingInterfaceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, supabaseClient } = useAuth();
  const { methods, onSubmit } = useRackForm({
    user,
    supabaseClient,
    setIsOpen,
  });

  if (!data) {
    return (
      <div className="h-96 p-4 bg-slate-100">
        <div className="h-full flex gap-1">
          <RackSkeleton />
          <RackSkeleton />
          <RackSkeleton />
          <RackSkeleton />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-96 p-4 bg-slate-100">
        <div className="h-full flex gap-1">
          {data && (
            <>
              {data.map((rack) => (
                <Rack key={`rack-${rack.id}`} rack={rack} />
              ))}
              <button
                className="p-2 w-28  border-2 border-dashed rounded-md border-slate-400 hover:bg-slate-50 text-slate-800"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                Créer un rack
              </button>
            </>
          )}
        </div>
      </div>

      <Drawer panelTitle="Créer un rack" open={isOpen} setOpen={setIsOpen}>
        <FormProvider {...methods}>
          <LabelInputControlled
            name="name"
            label="Nom du rack"
            inputType="text"
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="mt-4 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Submit
          </button>
        </FormProvider>
      </Drawer>
    </>
  );
});

export default BreedingInterface;
