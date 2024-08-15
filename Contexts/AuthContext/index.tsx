"use client";

import useAuth from "@/hooks/useAuth/index.ts";
import { createContext, ReactNode, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, supabaseClient } = useAuth();

  return (
    <AuthContext.Provider value={{ user, supabaseClient }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
