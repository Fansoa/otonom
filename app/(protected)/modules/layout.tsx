import Sidebar from "@/components/Sidebar/index.tsx";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext/index.tsx";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthProvider>
        <Sidebar />
        <div className="lg:pl-72">{children}</div>
      </AuthProvider>
    </>
  );
}
