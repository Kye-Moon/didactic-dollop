"use client";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface AuthContextProps {
  signIn: () => void;
  signOut: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  currentUser: any | undefined;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const session = useSession();
  const [user, setUser] = useState<any>(undefined);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      setIsAuthenticated(true);
      setUser(session?.data?.user);
      setLoading(false);
    }
    if (session?.status === "unauthenticated") {
      setIsAuthenticated(false);
      setLoading(false);
      router.push("/login");
    }
  }, [session]);

  const signIn = async () => {
    console.log("signing in");
    const res = await axios.get("http://localhost:3001/api/auth/signin");
    console.log(res);
    if (res.status === 200) {
      await router.push("/dashboard");
    }
  };

  const signOut = async () => {
    const res = await axios.get("/api/auth/signout");
    if (res.status === 200) {
      await router.push("/");
    }
  };

  const authContext: AuthContextProps = {
    signIn: signIn,
    signOut: signOut,
    isAuthenticated: isAuthenticated,
    isLoading: loading,
    currentUser: user,
  };

  if (session.status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
