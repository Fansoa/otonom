import type { Meta, StoryObj } from "@storybook/react";
import LabelTextInput from "@/components/LabelTextInput/index.tsx";

const meta: Meta<typeof LabelTextInput> = {
  component: LabelTextInput,
};

export default meta;
type Story = StoryObj<typeof LabelTextInput>;

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
