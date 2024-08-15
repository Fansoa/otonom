"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCrate } from "@/services/mealworm/index.ts";
import { useRackListContext } from "@/app/(protected)/modules/mealworm/contexts/RackListContext/index.tsx";
import crateSchema from "@/app/(protected)/modules/mealworm/hooks/useCrateForm/crateSchema.ts";

const useCrateForm = ({ rack_id, supabaseClient, setIsOpen }) => {
  const { rackList, setRackList } = useRackListContext();
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
        const indexOfTheCrateOwnerRack = rackList.findIndex(
          (item) => item.id === res.data[0].rack_id,
        );
        const newCrateList =
          rackList[indexOfTheCrateOwnerRack].crate === undefined
            ? [...res.data]
            : [...rackList[indexOfTheCrateOwnerRack].crate, ...res.data];

        const newRackList = [...rackList];
        newRackList[indexOfTheCrateOwnerRack].crate = newCrateList;
        setRackList(newRackList);
        setIsOpen((prev) => !prev);
      }
    });
    methods.resetField("name");
  };

  return { methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useCrateForm;
