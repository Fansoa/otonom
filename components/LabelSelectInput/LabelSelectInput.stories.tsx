import type { Meta, StoryObj } from "@storybook/react";

import LabelSelectInput from "@/components/LabelSelectInput/index.tsx";

const meta: Meta<typeof LabelSelectInput> = {
  component: LabelSelectInput,
};

export default meta;
type Story = StoryObj<typeof LabelSelectInput>;

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
    errorMessage: "Option must be selected",
  },
};
