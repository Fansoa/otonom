import { ReactNode } from "react";

type DrawerProps = {
  panelTitle: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children?: ReactNode;
};

export default DrawerProps;
