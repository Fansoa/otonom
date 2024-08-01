export type Children = {
  name: string;
  href: string;
  current?: boolean;
}[];

export type Navigation = {
  name: string;
  icon: any;
  href?: string;
  current?: boolean;
  children?: Children;
};

export type NavigationList = Navigation[];
