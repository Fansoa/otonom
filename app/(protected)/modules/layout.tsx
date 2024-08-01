"use client";

import Sidebar from "@/components/Sidebar/index.tsx";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-72">{children}</div>
    </>
  );
}
