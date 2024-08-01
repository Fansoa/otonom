import { NavigationList } from "@/components/Sidebar/Types.ts";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const NAVIGATION: NavigationList = [
  {
    name: "Modules",
    icon: Squares2X2Icon,
    children: [
      { name: "Mealworm", href: "/modules/mealworm" },
      { name: "Poultry", href: "/modules/poultry" },
      { name: "Aquaponics", href: "/modules/aquaponics" },
    ],
  },
  {
    name: "Menu",
    icon: Squares2X2Icon,
    href: "/dashboard/mealworm",
  },
];

export default NAVIGATION;
