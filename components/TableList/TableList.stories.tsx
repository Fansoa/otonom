import type { Meta, StoryObj } from "@storybook/react";
import TableList from "@/components/TableList/index.tsx";

const actions = [
  {
    id: "e89d49be-3aed-4a97-a5d1-ca5261f72539",
    weight: 12,
    crate_id: "5f0edca3-942f-4d3c-a55a-7e736a0dd872",
    created_at: "2024-08-16T12:55:44.993948+00:00",
    actionType_id: "e5d93999-84aa-4818-be9b-132ca74415da",
  },
];

const meta: Meta<typeof TableList> = {
  component: TableList,
};

export default meta;
type Story = StoryObj<typeof TableList>;

export const Story: Story = {
  name: "Default",
  args: {
    itemList: actions,
  },
};
