"use client";

import useAuth from "@/hooks/useAuth/index.ts";
import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
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
