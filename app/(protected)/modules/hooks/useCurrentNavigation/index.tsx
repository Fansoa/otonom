import { Navigation } from "@/components/Sidebar/Types.ts";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const useCurrentNavigation = () => {
  const path = usePathname();

  const splitedPath = path.split("/");
  const firstSegmentPath = splitedPath[1];
  const secondSegmentPath = splitedPath[2];

  // navigation must be declare in the scope where navigationWithCurrentProp is needed
  // navigation must be redeclared at every render to prevent value seted in previous render
  const navigation: Navigation = [
    {
      name: "Modules",
      slug: "modules",
      icon: Squares2X2Icon,
      children: [
        {
          name: "Mealworm",
          slug: "mealworm",
          href: "/modules/mealworm",
        },
        { name: "Poultry", slug: "poultry", href: "/modules/poultry" },
        { name: "Aquaponics", slug: "aquaponics", href: "/modules/aquaponics" },
      ],
    },
    {
      name: "Menu",
      slug: "menu",
      icon: Squares2X2Icon,
      href: "/dashboard/mealworm",
    },
  ];
  const navigationWithCurrentProp = navigation;

  if (firstSegmentPath) {
    const indexOfCurrentPage = navigationWithCurrentProp.findIndex(
      (item) => item.slug === firstSegmentPath,
    );
    const indexOfCurrentSubPage = navigationWithCurrentProp[
      indexOfCurrentPage
    ]?.children?.findIndex((item) => item.slug === secondSegmentPath);

    if (
      indexOfCurrentSubPage !== -1 &&
      typeof indexOfCurrentSubPage === "number"
    ) {
      const subPage =
        navigationWithCurrentProp?.[indexOfCurrentPage]?.children?.[
          indexOfCurrentSubPage
        ];
      if (subPage) {
        subPage.current = true;
      }
    } else {
      navigationWithCurrentProp[indexOfCurrentPage].current = true;
    }
  }

  return navigationWithCurrentProp;
};

export default useCurrentNavigation;
