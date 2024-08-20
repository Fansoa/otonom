"use client";

import { useState } from "react";

import { useAuthContext } from "@/contexts/AuthContext/index.tsx";
import {
  useSelectedItemContext,
  useSelectedItemDispatchContext,
} from "@/app/(protected)/modules/mealworm/contexts/SelectedItemAndSelectedItemDispatchContext/index.tsx";
import useCrateForm from "@/app/(protected)/modules/mealworm/hooks/useCrateForm/index.ts";

import LabelInputControlled from "@/components/LabelInputControlled/index.tsx";
import Crate from "@/app/(protected)/modules/mealworm/components/BreedingInterface/components/Rack/components/Crate/index.tsx";

import { RackProps } from "@/app/(protected)/modules/mealworm/components/BreedingInterface/types.ts";
import DrawerForm from "@/components/DrawerForm/index.tsx";

const Rack = ({ rack }: RackProps) => {
  const { supabaseClient } = useAuthContext();
  const setSelectedItem = useSelectedItemDispatchContext();
  const selectedItem = useSelectedItemContext();
  const [isOpen, setIsOpen] = useState(false);

  const { onSubmit, methods } = useCrateForm({
    rack_id: rack.id,
    supabaseClient,
    setIsOpen,
  });

  const isActive = !selectedItem?.crateId && selectedItem?.rackId === rack.id;
  return (
    <>
      <div
        tabIndex={0}
        role="button"
        onClick={() => setSelectedItem({ rackId: rack.id })}
        className={`w-28 flex flex-col-reverse gap-1 h-full ${isActive ? "bg-slate-400" : "bg-slate-200"} hover:outline-1 hover:outline hover:outline-slate-400 p-2`}
      >
        {rack?.crate?.map((crate) => (
          <Crate
            key={`crate-${crate.id}`}
            rackId={rack.id}
            crateId={crate.id}
            onClick={() =>
              setSelectedItem({ rackId: rack.id, crateId: crate.id })
            }
          />
        ))}
        <button
          type="button"
          className="bg-slate-100 border-2 border-dashed rounded-md border-slate-400 hover:bg-slate-50 text-slate-800"
          onClick={async (e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
        >
          Créer une caisse
        </button>
      </div>

      <DrawerForm
        panelTitle="Add Crate"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        methods={methods}
        onSubmit={onSubmit}
      >
        <LabelInputControlled
          name="rack_id"
          label="Rack ID"
          inputType="text"
          disabled
        />
        <LabelInputControlled name="name" label="Crate name" inputType="text" />
      </DrawerForm>
    </>
  );
};

export default Rack;
