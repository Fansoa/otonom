"use client";

import { useTriggerEffectContext } from "@/app/(protected)/modules/mealworm/contexts/TriggerEffect";
import crateSchema from "@/app/(protected)/modules/mealworm/hooks/useCrateForm/zodSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useCrateForm = ({ rack_id, user, supabaseClient, setIsOpen }) => {
  const setStateToTriggeringEffect = useTriggerEffectContext();
  const methods = useForm({
    resolver: zodResolver(crateSchema),
    defaultValues: {
      rack_id,
    },
  });

  const onSubmit = async ({ rack_id, name }) => {
    const { data, error } = await supabaseClient
      .from("crate")
      .insert([{ rack_id, name }])
      .select();
    methods.setValue("name", "");
    setIsOpen((prev) => !prev);
    setStateToTriggeringEffect((prev) => !prev);
  };

  return { methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useCrateForm;
