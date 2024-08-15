"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import crateSchema from "@/app/(protected)/modules/mealworm/hooks/useCrateForm/zodSchema.ts";
import { addCrate } from "@/services/mealworm/index.ts";

import { useDataDispatchContext } from "@/app/(protected)/modules/mealworm/contexts/DataDispatchContext/index.tsx";

const useCrateForm = ({ rack_id, user, supabaseClient, setIsOpen }) => {
  const { data: rackList, setData } = useDataDispatchContext();
  const methods = useForm({
    resolver: zodResolver(crateSchema),
    defaultValues: {
      rack_id,
    },
  });

  const onSubmit = async ({ rack_id, name }) => {
    addCrate({ supabaseClient, rack_id, name }).then((res) => {
      if (res.error) {
        console.error(res.error);
      }
      if (res.data) {
        console.log(res.data);
        const indexOfTheCrateOwnerRack = rackList.findIndex(
          (item) => item.id === res.data[0].rack_id,
        );
        const newCrateList =
          rackList[indexOfTheCrateOwnerRack].crate === undefined
            ? [...res.data]
            : [...rackList[indexOfTheCrateOwnerRack].crate, ...res.data];

        const newRackList = [...rackList];
        newRackList[indexOfTheCrateOwnerRack].crate = newCrateList;
        setData(newRackList);
        setIsOpen((prev) => !prev);
      }
    });
    methods.resetField("name");
  };

  return { methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useCrateForm;
