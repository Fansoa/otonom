"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import rackSchema from "@/app/(protected)/modules/mealworm/hooks/useRackForm/rackSchema.ts";
import { addRack } from "@/services/mealworm/index.ts";

import { useDataDispatchContext } from "@/app/(protected)/modules/mealworm/contexts/DataDispatchContext/index.tsx";

const useRackForm = ({ user, supabaseClient, setIsOpen }) => {
  const { setData } = useDataDispatchContext();

  const methods = useForm({
    resolver: zodResolver(rackSchema),
  });

  const onSubmit = async ({ name }) => {
    addRack({ supabaseClient, user_id: user.id, name }).then((res) => {
      if (res.error) {
        console.error(res.error);
      }
      if (res.data) {
        console.log(res.data);
        const newRackInList = res.data;
        setData((pevRackList) => {
          return [...pevRackList, ...newRackInList];
        });
        setIsOpen((prev) => !prev);
      }
    });
    methods.resetField("name");
  };

  return { methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useRackForm;
