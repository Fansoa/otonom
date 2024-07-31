import { ReactNode } from "react";

export type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

export type Navigation = {
  name: string;
  slug: string;
  icon: any;
  href?: string;
  current?: boolean;
  children?: {
    name: string;
    slug: string;
    href: string;
    current?: boolean;
  }[];
}[];

export type SidebarProps = {
  navigation: Navigation;
  children: ReactNode;
};
