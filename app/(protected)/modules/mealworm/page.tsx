"use client";

import dynamic from "next/dynamic";

import useAuth from "@/hooks/useAuth/index.ts";
import useRackList from "@/app/(protected)/modules/mealworm/hooks/useRackList/index.ts";

import { RackListProvider } from "@/app/(protected)/modules/mealworm/contexts/RackListContext/index.tsx";
import { SelectedItemAndSelectedItemDispatchProvider } from "@/app/(protected)/modules/mealworm/contexts/SelectedItemAndSelectedItemDispatchContext/index.tsx";

import Spinner from "@/components/Spinner/index.tsx";

const BreedingInterface = dynamic(
  () =>
    import(
      "@/app/(protected)/modules/mealworm/components/BreedingInterface/index.tsx"
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 p-4 bg-slate-100 flex justify-center items-center">
        <Spinner />
      </div>
    ),
  },
);

const Mealworm = () => {
  const { supabaseClient, user } = useAuth();
  const { rackList, setRackList } = useRackList({ supabaseClient, user });

  return (
    <SelectedItemAndSelectedItemDispatchProvider>
      <RackListProvider defaultValue={{ rackList, setRackList }}>
        <BreedingInterface />
      </RackListProvider>
    </SelectedItemAndSelectedItemDispatchProvider>
  );
};

export default Mealworm;
