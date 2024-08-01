import { ReactNode } from "react";

type DrawerProps = {
  panelTitle: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: ReactNode;
};

export default DrawerProps;
