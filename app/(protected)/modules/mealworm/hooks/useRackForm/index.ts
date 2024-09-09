"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import rackSchema from "@/app/(protected)/modules/mealworm/hooks/useRackForm/rackSchema.ts";
import { addRack } from "@/services/mealworm/index.ts";

import { useMealwormStore } from "@/providers/mealworm-store-provider.tsx";

const useRackForm = ({ user, supabaseClient, setIsOpen }) => {
  const { addRack: addRackToStore } = useMealwormStore((state) => state);

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
        const newRackInList = res.data[0];
        addRackToStore(newRackInList);
        setIsOpen((prev) => !prev);
      }
    });
    methods.resetField("name");
  };

  return { methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useRackForm;
