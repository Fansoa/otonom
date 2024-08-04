import type { Meta, StoryObj } from "@storybook/react";
import LabelInput from "@/components/LabelInput/index.tsx";

const meta: Meta<typeof LabelInput> = {
  component: LabelInput,
};

export default meta;
type Story = StoryObj<typeof LabelInput>;

export const Story: Story = {
  name: "Default",
};

export const withLabel: Story = {
  args: {
    label: "Label",
  },
};

export const withPlaceholder: Story = {
  args: { placeholder: "Placeholder" },
};

export const withError: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    errorMessage: "Field is required",
  },
};
