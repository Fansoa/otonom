"use client";

import Sidebar from "@/components/Sidebar/index.tsx";
import { ReactNode } from "react";
import useCurrentNavigation from "@/app/(protected)/modules/hooks/useCurrentNavigation/index.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  const navigationWithCurrentProp = useCurrentNavigation();

  return <Sidebar navigation={navigationWithCurrentProp}>{children}</Sidebar>;
}
