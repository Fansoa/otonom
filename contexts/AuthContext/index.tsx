"use client";

import { createContext, ReactNode, useContext } from "react";
import useAuth from "@/hooks/useAuth/index.ts";

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
