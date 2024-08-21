import type { Meta, StoryObj } from "@storybook/react";
import TableList from "@/components/TableList/index.tsx";

const actions = [
  {
    id: "e89d49be-3aed-4a97-a5d1-ca5261f72539",
    weight: 12,
    "Crate name": "5f0edca3-942f-4d3c-a55a-7e736a0dd872",
    "Created at": "2024-08-16",
    Action: "harvest",
  },
];

const meta: Meta<typeof TableList> = {
  component: TableList,
};

export default meta;
type Story = StoryObj<typeof TableList>;

export const Story: Story = {
  name: "Full list",
  args: {
    itemList: actions,
    title: "Actions List",
    description: "A list of all actions carried out",
    messageIfItemListIsEmpty: "List is empty",
  },
};

export const Pending: Story = {
  name: "Pending",
  args: {
    title: "Actions List",
    description: "A list of all actions carried out",
    messageIfItemListIsEmpty: "List is empty",
  },
};

export const emptyList: Story = {
  name: "Empty List",
  args: {
    itemList: [],
    title: "Actions List",
    description: "A list of all actions carried out",
    messageIfItemListIsEmpty: "List is empty",
  },
};
