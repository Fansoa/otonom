"use client";

import dynamic from "next/dynamic";

import useAuth from "@/hooks/useAuth/index.ts";

import Spinner from "@/components/Spinner/index.tsx";
import ActionInterface from "@/app/(protected)/modules/mealworm/components/ActionInterface/index.tsx";
import { useMealwormStore } from "@/providers/mealworm-store-provider.tsx";
import { useEffect } from "react";
import { getRackList } from "@/services/mealworm/index.ts";

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
  const { fillMealwormStore } = useMealwormStore((state) => state);

  useEffect(() => {
    if (supabaseClient && user) {
      getRackList({ supabaseClient, userId: user.id }).then((res) => {
        if (res.error) {
          console.error(res.error);
        }
        if (res.data) {
          fillMealwormStore(res.data);
          console.log(res.data);
        }
      });
    }
  }, [supabaseClient, user]);

  return (
    <div className="flex flex-col gap-4">
      <BreedingInterface />
      <ActionInterface />
    </div>
  );
};

export default Mealworm;
