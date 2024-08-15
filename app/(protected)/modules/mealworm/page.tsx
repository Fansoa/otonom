"use client";

import { MealwormProvider } from "@/app/(protected)/modules/mealworm/contexts/MealwormContext/index.tsx";
import useAuth from "@/hooks/useAuth/index.ts";
import useFetchMealworm from "@/app/(protected)/modules/mealworm/hooks/useFetchMealworm/index.ts";
import BreedingInterface from "@/components/BreedingInterface/index.tsx";
import { DataDispatchProvider } from "@/app/(protected)/modules/mealworm/contexts/DataDispatchContext/index.tsx";

const Mealworm = () => {
  const { supabaseClient, user } = useAuth();
  const { data, setData } = useFetchMealworm({ supabaseClient, user });
  return (
    <>
      <MealwormProvider>
        <DataDispatchProvider defaultValue={{ data, setData }}>
          <BreedingInterface />
        </DataDispatchProvider>
      </MealwormProvider>
    </>
  );
};

export default Mealworm;
