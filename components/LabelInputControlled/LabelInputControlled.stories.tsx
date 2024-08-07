import type { Meta, StoryObj } from "@storybook/react";

import LabelInputControlled from "@/components/LabelInputControlled/index.tsx";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ReactNode } from "react";

const schema = z.object({
  inputName: z.string().min(1, "Field is required"),
});

type Schema = z.infer<typeof schema>;

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

const meta: Meta<typeof LabelInputControlled> = {
  component: LabelInputControlled,
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LabelInputControlled>;

export const Story: Story = {
  name: "Default",
  args: {
    name: "inputName",
  },
};
