"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";

import {
  useMealworm,
  useMealwormDispatch,
} from "@/app/(protected)/modules/mealworm/contexts/MealwormContext/index.tsx";
import useCrateForm from "@/app/(protected)/modules/mealworm/hooks/useCrateForm/index.ts";
import { useAuthContext } from "@/Contexts/AuthContext/index.tsx";

import Crate from "@/components/BreedingInterface/components/Rack/components/Crate/index.tsx";
import Drawer from "@/components/Drawer/index.tsx";
import LabelInputControlled from "@/components/LabelInputControlled/index.tsx";

import { RackProps } from "@/components/BreedingInterface/types.ts";

const Rack = ({ rack }: RackProps) => {
  const { supabaseClient } = useAuthContext();
  const setSelectedItem = useMealwormDispatch();
  const selectedItem = useMealworm();
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

      <Drawer panelTitle="Créer une caisse" open={isOpen} setOpen={setIsOpen}>
        <FormProvider {...methods}>
          <LabelInputControlled
            name="rack_id"
            label="ID du rack"
            inputType="text"
            disabled
          />
          <LabelInputControlled
            name="name"
            label="Nom de la caisse"
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
};

export default Rack;
