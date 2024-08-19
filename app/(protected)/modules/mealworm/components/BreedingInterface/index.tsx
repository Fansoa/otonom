"use client";

import { memo, useState } from "react";
import { Form, FormProvider } from "react-hook-form";

import useAuth from "@/hooks/useAuth/index.ts";
import { useRackListContext } from "@/app/(protected)/modules/mealworm/contexts/RackListContext/index.tsx";
import useRackForm from "@/app/(protected)/modules/mealworm/hooks/useRackForm/index.ts";

import LabelInputControlled from "@/components/LabelInputControlled/index.tsx";
import Drawer from "@/components/Drawer/index.tsx";
import RackSkeleton from "@/app/(protected)/modules/mealworm/components/BreedingInterface/components/Rack/RackSkeleton.tsx";
import Rack from "@/app/(protected)/modules/mealworm/components/BreedingInterface/components/Rack/index.tsx";

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

      <Drawer panelTitle="Add Rack" open={isOpen} setOpen={setIsOpen}>
        <FormProvider {...methods}>
          <Form>
            <LabelInputControlled
              name="name"
              label="Rack name"
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
});

export default BreedingInterface;
