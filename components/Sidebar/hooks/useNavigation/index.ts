import { usePathname } from "next/navigation";
import NAVIGATION from "@/components/Sidebar/constants/index.ts";

const useNavigation = () => {
  const pathname = usePathname();

  // navigation must be declare in the scope where navigationWithCurrentProp is needed
  // navigation must be redeclared at every render to prevent value seted in previous render

  // function isNavigation(
  //   menuItem: Navigation | Children,
  // ): menuItem is Navigation {
  //   return (menuItem as Navigation).icon !== undefined;
  // }

  // function isActive(menuItem: Children): Children;
  // function isActive(menuItem: Navigation): Navigation;
  // function isActive(menuItem: Navigation | Children): Navigation | Children {
  //   // Je dois trouver un moyen d'indiquer à Typescript à quel type appartient l'argument menuItem
  //   // Q'est-ce qui distingue un type Navigation d'un type Children
  //   //
  //   if (isNavigation(menuItem) && typeof menuItem.href === "string") {
  //     if (pathname.startsWith(menuItem.href)) {
  //       return { ...menuItem, current: true };
  //     }
  //   }
  //   if (
  //     isNavigation(menuItem) &&
  //     menuItem.children &&
  //     menuItem.children.length > 0
  //   ) {
  //     return {
  //       ...menuItem,
  //       children: menuItem?.children.map((menuSubItem) =>
  //         isActive(menuSubItem),
  //       ),
  //     };
  //   }
  //   return { ...menuItem };
  // }

  function isActive(menuItem) {
    if (menuItem.href) {
      if (pathname.startsWith(menuItem.href)) {
        return { ...menuItem, current: true };
      }
    }
    if (menuItem.children) {
      return {
        ...menuItem,
        children: menuItem?.children.map((menuSubItem) =>
          isActive(menuSubItem),
        ),
      };
    }
    return { ...menuItem };
  }

  return NAVIGATION.map((menuItem) => isActive(menuItem));
};

export default useNavigation;
