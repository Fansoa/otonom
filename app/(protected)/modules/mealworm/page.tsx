"use client";

import { useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";
import BreedingInterface from "@/components/BreedingInterface/index.tsx";
// import Drawer from "@/components/Drawer/index.tsx";
import { MealwormProvider } from "@/app/(protected)/modules/mealworm/contexts/MealwormContext/index.tsx";
import useAuth from "@/hooks/useAuth/index.ts";
import { AuthProvider } from "@/Contexts/AuthContext/index.tsx";
import useFetchMealworm from "@/app/(protected)/modules/mealworm/hooks/useFetchMealworm/index.ts";
// import ActionButtons from "@/components/ActionButtons";
import { TriggerEffectProvider } from "@/app/(protected)/modules/mealworm/contexts/TriggerEffect/index.tsx";

const Mealworm = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [stateToTriggeringEffect, setStateToTriggeringEffect] = useState(false);
  const { supabaseClient, user } = useAuth();
  const { data } = useFetchMealworm(
    supabaseClient,
    user,
    stateToTriggeringEffect,
  );

  // console.log("🚀 ~ Mealworm ~ data:", data);

  // const methods = useForm({
  //   defaultValues: {
  //     popo: "",
  //   },
  // });

  // const onSubmit = (data) => console.log(data);
  return (
    <>
      <MealwormProvider>
        <TriggerEffectProvider defaultValue={setStateToTriggeringEffect}>
          <BreedingInterface data={data} />
          {/* <ActionButtons /> */}
          {/* <button
              className="mt-4 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              Show Form
            </button>
            <Drawer panelTitle="Formulaire" open={isOpen} setOpen={setIsOpen}>
              <FormProvider {...methods}>
                <button
                  type="submit"
                  onClick={methods.handleSubmit(onSubmit)}
                  className="mt-4 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Submit
                </button>
              </FormProvider>
            </Drawer> */}
        </TriggerEffectProvider>
      </MealwormProvider>
    </>
  );
};

export default Mealworm;
