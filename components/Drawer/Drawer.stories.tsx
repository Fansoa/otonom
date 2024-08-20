import type { Meta, StoryObj } from "@storybook/react";

import Drawer from "@/components/Drawer/index.tsx";
import { useState } from "react";
import DrawerProps from "@/components/Drawer/types.ts";

const DrawerStorybookContext = ({ panelTitle }: DrawerProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setToggle((prev) => !prev)}
        className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Show Drawer
      </button>
      <Drawer panelTitle={panelTitle} isOpen={toggle} setIsOpen={setToggle} />
    </>
  );
};

const meta: Meta<typeof Drawer> = {
  component: DrawerStorybookContext,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Story: Story = {
  name: "Default",
  args: {
    panelTitle: "Panel Title",
    setIsOpen: () => null,
    isOpen: false,
    children: <div></div>,
  },
};
