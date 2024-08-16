"use client";

import useAuth from "@/hooks/useAuth/index.ts";
import useRackList from "@/app/(protected)/modules/mealworm/hooks/useRackList/index.ts";

import { RackListProvider } from "@/app/(protected)/modules/mealworm/contexts/RackListContext/index.tsx";
import { SelectedItemAndSelectedItemDispatchProvider } from "@/app/(protected)/modules/mealworm/contexts/SelectedItemAndSelectedItemDispatchContext/index.tsx";

import BreedingInterface from "@/app/(protected)/modules/mealworm/components/BreedingInterface/index.tsx";
import DataDisplay from "@/app/(protected)/modules/mealworm/components/DataDisplay/index.tsx";

const Mealworm = () => {
  const { supabaseClient, user } = useAuth();
  const { rackList, setRackList } = useRackList({ supabaseClient, user });

  return (
    <SelectedItemAndSelectedItemDispatchProvider>
      <RackListProvider defaultValue={{ rackList, setRackList }}>
        <BreedingInterface />
        <DataDisplay />
      </RackListProvider>
    </SelectedItemAndSelectedItemDispatchProvider>
  );
};

export default Mealworm;
