import type { Meta, StoryObj } from "@storybook/react";

import LabelSelectInputController from "@/components/LabelSelectInputController/index.tsx";
import { FormProvider, useForm } from "react-hook-form";

const ContextProvider = () => {
  const methods = useForm();

  // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);
  return (
    <FormProvider {...methods}>
      <LabelSelectInputController
        name="inputName"
        options={[
          { label: "label 1", value: "value 1" },
          { label: "label 2", value: "value 2" },
          { label: "label 3", value: "value 3" },
          { label: "label 4", value: "value 4" },
        ]}
      />
      <button
        type="submit"
        onClick={methods.handleSubmit(onSubmit)}
        className="mt-4 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Submit
      </button>
    </FormProvider>
  );
};

const meta: Meta<typeof LabelSelectInputController> = {
  component: ContextProvider,
};

export default meta;
type Story = StoryObj<typeof LabelSelectInputController>;

export const Story: Story = {
  name: "Default",
  args: {
    label: "Label",
    options: [
      { label: "label 1", value: "value 1" },
      { label: "label 2", value: "value 2" },
      { label: "label 3", value: "value 3" },
      { label: "label 4", value: "value 4" },
    ],
  },
};
