import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@/components/Sidebar/index.tsx";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Story: Story = {
  name: "Default",
  args: {
    navigation: [
      {
        name: "Modules",
        slug: "modules",
        icon: Squares2X2Icon,
        children: [
          {
            name: "Mealworm",
            slug: "mealworm",
            href: "#",
          },
          { name: "Poultry", slug: "poultry", href: "/modules/poultry" },
          {
            name: "Aquaponics",
            slug: "aquaponics",
            href: "#",
          },
        ],
      },
      {
        name: "Menu",
        slug: "menu",
        icon: Squares2X2Icon,
        href: "#",
      },
    ],
  },
};
