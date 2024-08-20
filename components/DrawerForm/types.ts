import DrawerProps from "@/components/Drawer/types.ts";
import { UseFormReturn } from "react-hook-form";

export type DrawerFormProps = DrawerProps & {
  methods: UseFormReturn;
  onSubmit: () => void;
};
