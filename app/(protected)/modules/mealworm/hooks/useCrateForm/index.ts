"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCrate } from "@/services/mealworm/index.ts";
import crateSchema from "@/app/(protected)/modules/mealworm/hooks/useCrateForm/crateSchema.ts";
import { useMealwormStore } from "@/providers/mealworm-store-provider.tsx";

const useCrateForm = ({ rack_id, supabaseClient, setIsOpen }) => {
  const { addCrate: addCrateToStore } = useMealwormStore((state) => state);
  const methods = useForm({
    resolver: zodResolver(crateSchema),
    defaultValues: {
      rack_id,
    },
  });

  // eslint-disable-next-line camelcase
  const onSubmit = async ({ rack_id, name }) => {
    // eslint-disable-next-line camelcase
    addCrate({ supabaseClient, rack_id, name }).then((res) => {
      if (res.error) {
        console.error(res.error);
      }
      if (res.data) {
        console.log(res.data);

        addCrateToStore(res.data);
        setIsOpen((prev) => !prev);
      }
    });
    methods.resetField("name");
  };

  return { methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useCrateForm;
