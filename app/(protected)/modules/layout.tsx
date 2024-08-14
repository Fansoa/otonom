import Sidebar from "@/components/Sidebar/index.tsx";
import { AuthProvider } from "@/Contexts/AuthContext/index.tsx";
import { ReactNode } from "react";

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
