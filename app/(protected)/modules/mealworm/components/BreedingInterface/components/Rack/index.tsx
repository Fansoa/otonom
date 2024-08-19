"use client";

import { useState } from "react";
import { Form, FormProvider } from "react-hook-form";

import { useAuthContext } from "@/contexts/AuthContext/index.tsx";
import {
  useSelectedItemContext,
  useSelectedItemDispatchContext,
} from "@/app/(protected)/modules/mealworm/contexts/SelectedItemAndSelectedItemDispatchContext/index.tsx";
import useCrateForm from "@/app/(protected)/modules/mealworm/hooks/useCrateForm/index.ts";

import LabelInputControlled from "@/components/LabelInputControlled/index.tsx";
import Drawer from "@/components/Drawer/index.tsx";
import Crate from "@/app/(protected)/modules/mealworm/components/BreedingInterface/components/Rack/components/Crate/index.tsx";

import { RackProps } from "@/app/(protected)/modules/mealworm/components/BreedingInterface/types.ts";

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
        className={`w-28 flex flex-col-reverse gap-1 h-full ${isActive ? "bg-slate-400" : "bg-slate-200"} hover:outline-1 hover:outline hover:outline-slate-500 p-2`}
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
          className="py-2 bg-slate-100 border-2 border-dashed rounded-md border-slate-400 hover:bg-slate-50 text-slate-800"
          onClick={async (e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
        >
          Add Crate
        </button>
      </div>

      <Drawer panelTitle="Add Crate" open={isOpen} setOpen={setIsOpen}>
        <FormProvider {...methods}>
          <Form>
            <LabelInputControlled
              name="rack_id"
              label="Rack ID"
              inputType="text"
              disabled
            />
            <LabelInputControlled
              name="name"
              label="Crate name"
              inputType="text"
            />
            <button
              type="submit"
              onClick={onSubmit}
              className="mt-4 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Submit
            </button>
          </Form>
        </FormProvider>
      </Drawer>
    </>
  );
};

export default Rack;
