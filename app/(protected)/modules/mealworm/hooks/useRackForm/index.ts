"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import rackSchema from "@/app/(protected)/modules/mealworm/hooks/useRackForm/rackSchema.ts";
import { useTriggerEffectContext } from "@/app/(protected)/modules/mealworm/contexts/TriggerEffect/index.tsx";

const useRackForm = ({ user, supabaseClient, setIsOpen }) => {
  const setStateToTriggeringEffect = useTriggerEffectContext();

  const methods = useForm({
    resolver: zodResolver(rackSchema),
  });

  const onSubmit = async ({ name }) => {
    const { data, error } = await supabaseClient
      .from("rack")
      .insert([{ name, user_id: user.id }])
      .select();
    setIsOpen((prev) => !prev);
    setStateToTriggeringEffect((prev) => !prev);
  };

  return { methods, onSubmit: methods.handleSubmit(onSubmit) };
};

export default useRackForm;
